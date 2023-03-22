import ChattingBar from "../components/chatting/ChattingBar";
import ChatListItem from "../components/chatting/ChatListItem";
import { useNavigate } from "react-router-dom";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";

const ChattingPage = () => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("1");
  };

  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/" title="Chatting" icon={images.chatting_img} />
      <div onClick={handleClick}>
        <ChatListItem />
      </div>
    </div>
  );
};
export default ChattingPage;
