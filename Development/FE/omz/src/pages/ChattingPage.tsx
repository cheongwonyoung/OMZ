import ChattingBar from "../components/chatting/ChattingBar";
import ChatListItem from "../components/chatting/ChatListItem";
import { useNavigate } from "react-router-dom";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import { useQuery } from "react-query";
import { getChatting } from "../api/chatting";
import Loading from "../components/common/Loading";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";

const ChattingPage = () => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("1");
  };
  const memberId = useRecoilValue(userStatus).id;
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["chatting", memberId],
    () => getChatting(memberId)
  );

  if (isLoading) return <Loading />;
  if (isError) return <h3>Error...</h3>;

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
