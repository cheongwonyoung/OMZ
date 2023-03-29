import ChattingInfoBar from "../components/chatting/ChattingInfoBar";
import SubmitForm from "../components/chatting/SubmitForm";
import { useEffect, useState, useRef } from "react";
import * as StompJS from "@stomp/stompjs";
import { v4 as uuidv4 } from "uuid";
import MyChatting from "../components/chatting/MyChatting";
import YourChatting from "../components/chatting/YourChatting";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getChattingList } from "../api/chatting";
import Loading from "../components/common/Loading";

// import { StompConfig } from "@stomp/stompjs";

export default function ChattingDetailPage() {
  type chat = {
    chatRoomId: number;
    message: string;
    memberId: number;
    nickname: string;
    createdTime: string;
    checked: boolean;
  };

  type chatPagingDTO = {
    cursor: string;
    memberId: number;
    message: string;
    nickname: string;
  } | null;

  // prop 받아온 roomId
  const location = useLocation();
  const roomId = location.state.roomid;
  // const roomId = 2;

  const client: any = useRef({});
  const memberId = useRecoilValue(userStatus).id;
  const [connected, setConnected] = useState(false);
  // const [chatMessages, setChatMessages] = useState<chat[]>([]);
  const [chatPaging, setChatPaging] = useState<chatPagingDTO>(null);
  const setTarget = useRef<HTMLDivElement>();
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError, refetch } = useQuery(
    ["chatList", chatPaging],
    () => getChattingList(roomId, memberId, chatPaging)
    // {
    // onSuccess(data) {
    //   if (data?.data?.chatList[0] === chatMessages[0]) {
    //     return;
    //   }
    //   setChatMessages((chatMessages) => [
    //     chatMessages,
    //     ...data?.data.chatList,
    //   ]);
    // },
    // }
  );

  const [chatMessages, setChatMessages] = useState(data?.data?.chatList);

  useEffect(() => {
    // if (data?.data?.chatList[0] === chatMessages[0]) {
    //   return;
    // }
    setChatMessages(data?.data?.chatList);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [connected]);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting && chatMessages) {
          const last = chatMessages[chatMessages.length - 1];
          console.log(chatMessages);
          console.log("라스트다 이놈아", last);
          setChatPaging({
            cursor: last.createdTime,
            memberId: last.memberId,
            message: last.message,
            nickname: last.nickname,
          });
          refetch();
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    setTimeout(function () {
      observer.current.observe(setTarget.current);
      return () => {
        observer.current.unobserve(setTarget.current);
      };
    }, 2000);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    connect();
    return () => {
      disConnect();
    };
  }, []);

  const connect = () => {
    client.current = new StompJS.Client({
      brokerURL: "ws://localhost:8080/api/stomp-chat/websocket",
      connectHeaders: {
        login: "user",
        password: "password",
      },
      onConnect: () => {
        setConnected(true);
        subscribe();
      },
      debug: function (str: any) {
        console.log("debug", str);
      },
    });
    client.current.activate();
  };

  const subscribe = () => {
    client.current.subscribe("/sub/chat/room/" + roomId, (data: any) => {
      const newMessages = JSON.parse(data.body);

      const newMessage = {
        chatRoomId: newMessages.roomId,
        message: newMessages.message,
        memberId: newMessages.memberId,
        nickname: newMessages.nickName,
        createdTime: newMessages.createdTime,
        checked: newMessages.checked,
      };

      if (newMessage.message !== null) {
        setChatMessages((chatMessages: chat[]) => [
          newMessage,
          ...chatMessages,
        ]);
      }
    });
  };

  const handler = (message: string) => {
    if (!client.current.connected) return;
    client.current.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({
        roomId: roomId,
        message: message,
        memberId: memberId,
      }),
    });
  };

  // 연결 끊어졌을 때
  const disConnect = () => {
    if (connected) {
      client.current.deactivate();
      setConnected(false);
      console.log("deactivate!");
    }
  };

  // 로딩중이거나 에러 있을 때 나오게
  if (isLoading) return <Loading />;
  if (isError) return <h3>isError</h3>;

  const chatData = chatMessages?.slice(0).reverse();
  return (
    <div>
      <ChattingInfoBar />
      <div ref={setTarget}></div>
      <div>
        {chatData?.map((chat) =>
          chat.memberId === memberId ? (
            <MyChatting item={chat.message} key={uuidv4()} />
          ) : (
            <YourChatting item={chat.message} key={uuidv4()} />
          )
        )}
      </div>
      <div ref={bottomRef}></div>
      <SubmitForm sendMessage={handler} />
    </div>
  );
}
