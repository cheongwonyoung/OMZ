import ChattingInfoBar from "../components/chatting/ChattingInfoBar";
import SubmitForm from "../components/chatting/SubmitForm";
import { useEffect, useState, useRef } from "react";
import * as StompJS from "@stomp/stompjs";
import { v4 as uuidv4 } from "uuid";
import MyChatting from "../components/chatting/MyChatting";
import YourChatting from "../components/chatting/YourChatting";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
import { getChattingList, nextChattingList } from "../api/chatting";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

// import { StompConfig } from "@stomp/stompjs";

export default function ChattingDetailPage() {
  const [connected, setConnected] = useState(false);
  const [chatList, setChatList] = useState<chat[]>([]);
  const client: any = useRef({});
  const location = useLocation();
  console.log("HI", location.state.roomid);
  const roomId = location.state.roomid;
  const memberId = useRecoilValue(userStatus).id;
  // 무한 스크롤 관련
  const messageBoxRef = useRef(null);
  const [prevHeight, setPrevHeight] = useState(0);

  type chat = {
    createdTime: Date;
    memberId: number;
    message: string;
    nickName: string;
    roomId: number;
    type: string;
  };

  const { data, isLoading, isError, refetch } = useQuery("getChats", () =>
    getChattingList(roomId, memberId)
  );
  console.log("데이터", data);

  // 무한 스크롤 {cursor: string, memberId: number, message: string, nickname: string}
  // const onFetchMessage = () => {
  //   const last = chatList[chatList.length - 1]
  //   const chatPagingDto = {
  //     cursor: last?.createdTime,
  //     memberId: last?.memberId,
  //     message: last?.message,
  //     nickname: last?.nickName
  //   };
  //   if (prevHeight !== messageBoxRef.current.scrollHeight) {

  //   }
  // }

  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  const connect = () => {
    client.current = new StompJS.Client({
      // brokerURL: "ws://70.12.246.116:8080/api/stomp-chat/websocket",
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
      const newMessage: chat = JSON.parse(data.body);
      if (newMessage.type === "TALK") {
        setChatList((prevMessage) => [...prevMessage, newMessage]);
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

  const disConnect = () => {
    if (connected) {
      client.current.deactivate();
      setConnected(false);
      console.log("deactivate!");
    }
  };

  return (
    <div>
      <ChattingInfoBar />
      <div ref={messageBoxRef}>
        {chatList.map((chat) =>
          chat.memberId === memberId ? (
            <MyChatting item={chat.message} key={uuidv4()} />
          ) : (
            <YourChatting item={chat.message} key={uuidv4()} />
          )
        )}
      </div>
      <SubmitForm sendMessage={handler} />
    </div>
  );
}
