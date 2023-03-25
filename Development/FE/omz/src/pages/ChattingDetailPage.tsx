import ChattingInfoBar from "../components/chatting/ChattingInfoBar";
import SubmitForm from "../components/chatting/SubmitForm";
import { useEffect, useState, useRef } from "react";
import * as StompJS from "@stomp/stompjs";
import { v4 as uuidv4 } from "uuid";

import MyChatting from "../components/chatting/MyChatting";
import YourChatting from "../components/chatting/YourChatting";
// import { StompConfig } from "@stomp/stompjs";

export default function ChattingDetailPage() {
  const [connected, setConnected] = useState(false);
  type chat = { memberId?: number; message: string };
  const [chatList, setChatList] = useState<chat[]>([
    {
      message: "안녕하세요",
      memberId: 3,
    },
  ]);
  const client: any = useRef({});
  const roomId: number = 18;
  const memberId: number = 1;

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
        console.log(str);
      },
    });
    client.current.activate();
  };

  const subscribe = () => {
    client.current.subscribe("/sub/chat/room/" + roomId, (data: any) => {
      const newMessage: string = JSON.parse(data.body).message as string;
      const newMemberID: number = JSON.parse(data.body).memberId as number;
      addContent(newMessage, newMemberID);
    });
  };

  const addContent = (message: string, newMemberID: number) => {
    setChatList((prevList) => [
      ...prevList,
      {
        message: message,
        memberId: newMemberID,
      },
    ]);
    console.log(chatList);
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
      {chatList.map((chat) =>
        chat.memberId === 1 ? (
          <MyChatting item={chat.message} key={uuidv4()} />
        ) : (
          <YourChatting item={chat.message} key={uuidv4()} />
        )
      )}
      <SubmitForm sendMessage={handler} />
    </div>
  );
}
