import ChatListItem from "../components/chatting/ChatListItem";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import { getChatting } from "../api/chatting";
import Loading from "../components/common/Loading";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
import { useEffect } from "react";
import { useQuery } from "react-query";

type Chat = {
  [key: string]: any;
};

const ChattingPage = () => {
  const memberId = useRecoilValue(userStatus).id;
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["chatting", memberId],
    () => getChatting(memberId)
  );
  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <h3>Error...</h3>;
  return (
    <div className="w-full flex flex-col items-center">
      <TitleBar goto="/" title="Chatting" icon={images.chatting_img} />
      <div className="w-full">
        {data?.data !== "" &&
          data?.data.map((chat: Chat) => (
            <ChatListItem
              item={chat}
              key={chat.recentMessageCreatedTime}
              refetch={refetch}
            />
          ))}
      </div>
    </div>
  );
};
export default ChattingPage;
