import { images } from "../../assets/images";
import BackBtn from "../common/BackBtn";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { addFriends } from "../../api/chatting";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { imageUrl } from "../../api";

type chat = {
  [key: string]: any;
};
type Props = {
  item: chat;
  refetch: any;
};

export default function ChattingInfoBar({ item, refetch }: Props) {
  const memberId = useRecoilValue(userStatus).id;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const addFriend = useMutation(
    (chatMembersInfo: {
      chatOtherInfo: {
        file: string;
        friendState: number;
        memberId: number;
        nickname: string;
      };
      memberId: number;
    }) => addFriends(chatMembersInfo),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  const friendInfo = {
    chatOtherInfo: {
      file: item.file,
      friendState: item.friendState,
      memberId: item.memberId,
      nickname: item.nickName,
    },
    memberId: memberId,
  };

  const handleFriend = () => {
    addFriend.mutate(friendInfo);
  };

  const imageUrlRoot = imageUrl + item?.file;
  return (
    <div className="flex w-full justify-between items-center p-2.5 border-t-0 border-r-0 border-b border-l-0 border-black">
      <div className="flex items-center">
        {item?.file && (
          <img src={imageUrlRoot} alt="" className="h-12 aspect-square mr-4" />
        )}

        <div className="flex flex-col justify-evenly items-start">
          <p className="font-bold">{item?.nickName}</p>
          {!item?.friendState && (
            <button
              className="border-black border-2 p-2 hover:bg-black/20"
              onClick={(e) => {
                e?.stopPropagation();
                handleFriend();
              }}
            >
              친구추가
            </button>
          )}
        </div>
      </div>
      <div className="w-10 h-10 flex content-center">
        {/* 얘는 Main으로 가는 게 아니라서 따로 해줬음  */}
        <div
          onClick={goBack}
          className="text-black w-full h-full flex justify-center items-center text-xl hover:scale-105 cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </div>
    </div>
  );
}
