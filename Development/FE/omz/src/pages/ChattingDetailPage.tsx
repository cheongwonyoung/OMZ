import ChattingInfoBar from "../components/chatting/ChattingInfoBar";
import SubmitForm from "../components/chatting/SubmitForm";
import { useEffect, useState, useRef } from "react";
import * as StompJS from "@stomp/stompjs";
// import { StompConfig } from "@stomp/stompjs";

export default function ChattingDetailPage() {
  const [content, setContent] = useState("hihi");
  const client: any = useRef({});
  const roomId: number = 1;
  const memberId: number = 1;

  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  const connect = () => {
    client.current = new StompJS.Client({
      brokerURL: "ws://localhost:8080/stomp-chat/websocket",
      connectHeaders: {
        login: "user",
        password: "password",
      },
      onConnect: () => {
        subscribe();
      },
      debug: function (str: any) {
        console.log(str);
      },
    });
    client.current.activate();
  };

  const subscribe = () => {
    client.current.subscribe("sub/chat/room/" + roomId, (data: any) => {
      const newMessage: string = JSON.parse(data.body).message as string;
      addContent(newMessage);
    });
  };

  const addContent = (message: string) => {
    setContent(content.concat(message));
  };

  const handler = (message: string) => {
    if (!client.current.connected) return;

    client.current.publish({
      destination: "pub/chat/message",
      body: JSON.stringify({
        roomId: roomId,
        message: message,
        memberId: memberId,
      }),
    });
  };

  const disConnect = () => {
    if (client.current.connected) client.current.deactivate();
  };

  return (
    <div>
      <ChattingInfoBar />
      <div>{content}</div>
      <SubmitForm sendMessage={handler} />
    </div>
  );
}
