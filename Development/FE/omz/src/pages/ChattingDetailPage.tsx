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
// import { StompConfig } from "@stomp/stompjs";

export default function ChattingDetailPage() {
  const location = useLocation();
  const roomId = location.state.roomid;
  const [connected, setConnected] = useState(false);
  type chat = {
    createdTime: Date;
    memberId: number;
    message: string;
    nickName: string;
    roomId: number;
    type: string;
  };

  const [chatList, setChatList] = useState<chat[]>([]);
  const client: any = useRef({});
  const memberId = useRecoilValue(userStatus).id;
  // 예전 데이터 긁어오기
  const { data, isLoading, isError, refetch } = useQuery("chatList", () =>
    getChattingList(roomId, memberId)
  );

  console.log("data", data);

  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  const connect = () => {
    client.current = new StompJS.Client({
      // brokerURL: "ws://70.12.246.116:8080/stomp-chat/websocket",
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
      console.log(data.body);
      const newMessage: chat = JSON.parse(data.body);
      if (newMessage.type === "TALK") {
        setChatList((prevMessage) => [...prevMessage, newMessage]);
      }
    });
  };
  console.log(chatList);
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
      {chatList.map((chat) =>
        chat.memberId === memberId ? (
          <MyChatting item={chat.message} key={uuidv4()} />
        ) : (
          <YourChatting item={chat.message} key={uuidv4()} />
        )
      )}
      <SubmitForm sendMessage={handler} />
    </div>
  );
}
