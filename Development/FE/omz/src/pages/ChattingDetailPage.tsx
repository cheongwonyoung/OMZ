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
import { useMutation } from "react-query";
import { getChattingList } from "../api/chatting";
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
  const roomId = location.state.roomId;

  const client: any = useRef({});
  const memberId = useRecoilValue(userStatus).id;
  const [connected, setConnected] = useState(false);
  // const [chatMessages, setChatMessages] = useState<chat[]>([]);
  const [chatPaging, setChatPaging] = useState<chatPagingDTO>(null);
  const setTarget = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [chatMessages, setChatMessages] = useState<{ [key: string]: any }[]>(
    []
  );
  const [chatOtherInfo, setChatOtherInfo] = useState<any>({});
  type Dto = {
    cursor: string;
    memberId: number;
    message: string;
    nickname: string;
  } | null;
  const {
    mutate: getChatLog,
    isLoading,
    isError,
  } = useMutation((dto: Dto) => getChattingList(roomId, memberId, dto), {
    onSuccess(data) {
      setChatOtherInfo(data.data.chatOtherInfo);
      const chatBefore = data.data.chatList;
      if (chatBefore.length !== 0) {
        setChatMessages((prev: { [key: string]: any }[]) => [
          ...prev,
          ...chatBefore,
        ]);
        const last = chatBefore[chatBefore.length - 1];
        setChatPaging({
          cursor: last.createdTime,
          memberId: last.memberId,
          message: last.message,
          nickname: last.nickname,
        });
      }
    },
  });

  const [page, setPage] = useState(0);

  useEffect(() => {
    getChatLog(chatPaging);
  }, [page]);

  const goRefetch = () => {
    getChatLog(chatPaging);
  };

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.5 }
    )
  );

  useEffect(() => {
    setTimeout(function () {
      const topRef = setTarget.current;
      if (topRef === null) return;
      observer.current.observe(topRef);
      return () => {
        observer.current.unobserve(topRef);
      };
    }, 500);
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
      // brokerURL: "ws://localhost:8080/api/stomp-chat/websocket",
      brokerURL: "ws://j8a705.p.ssafy.io:8080/api/stomp-chat/websocket",
      connectHeaders: {
        login: "user",
        password: "password",
      },
      onConnect: () => {
        setConnected(true);
        subscribe();
      },
      debug: function (str: any) {
        // console.log("debug", str);
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
        setChatMessages((chatMessages: any[]) => [newMessage, ...chatMessages]);
      }
    });
  };
  console.log(chatMessages);
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
    }
  };

  // 로딩중이거나 에러 있을 때 나오게
  if (isError) return <h3>isError</h3>;

  const chatData = chatMessages?.slice(0).reverse();
  return (
    <div className="flex flex-col items-center">
      <ChattingInfoBar item={chatOtherInfo} refetch={goRefetch} />
      <div ref={setTarget}></div>
      <div className="w-full max-w-3xl">
        {chatData?.map((chat) =>
          chat.memberId === memberId ? (
            <MyChatting
              item={chat.message}
              time={chat.createdTime}
              key={uuidv4()}
            />
          ) : (
            <YourChatting
              item={chat.message}
              time={chat.createdTime}
              key={uuidv4()}
            />
          )
        )}
      </div>
      <div ref={bottomRef} className="m-10"></div>
      <SubmitForm sendMessage={handler} />
    </div>
  );
}
