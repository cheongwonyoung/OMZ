import ChattingBar from "../components/chatting/ChattingBar";
import ChatListItem from "../components/chatting/ChatListItem";
import { useNavigate } from "react-router-dom";

const ChattingPage = () => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("1");
  };

  return (
    <div>
      <ChattingBar />
      <div onClick={handleClick}>
        <ChatListItem />
      </div>
    </div>
  );
};
export default ChattingPage;
