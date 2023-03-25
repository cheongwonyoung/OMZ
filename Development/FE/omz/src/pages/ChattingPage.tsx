import ChattingBar from "../components/chatting/ChattingBar";
import ChatListItem from "../components/chatting/ChatListItem";
import { useNavigate } from "react-router-dom";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import { useQuery } from "react-query";
import { getChatting } from "../api/chatting";
import Loading from "../components/common/Loading";

const ChattingPage = () => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("1");
  };

  // const { data, isLoading, isError, error, refetch } = useQuery(
  //   "chatting",
  //   () => getChatting()
  // );

  // if (isLoading) return <Loading />;
  // if (isError) return <h3>Error...</h3>;
  // console.log(data);
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
