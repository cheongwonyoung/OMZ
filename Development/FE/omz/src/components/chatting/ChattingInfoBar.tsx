import { images } from "../../assets/images";
import BackBtn from "../common/BackBtn";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUserPlus } from "@fortawesome/free-solid-svg-icons";
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
    <div className="flex w-full justify-center items-center p-2.5 sticky top-0 z-50 bg-black">
      <div className="max-w-3xl w-full flex justify-between">
        <div className="flex items-center gap-3">
          {item?.file && (
            <img
              src={imageUrlRoot}
              alt=""
              className="w-[18%] aspect-square mr-4 rounded-full"
            />
          )}
          <div className="flex flex-col items-start gap-2">
            <p className="font-bold text-white">{item?.nickName}</p>
            {!item?.friendState && (
              <button
                className="text-white border rounded-[10px] px-5 py-1 border-white hover:bg-white hover:text-black"
                onClick={(e) => {
                  e?.stopPropagation();
                  handleFriend();
                }}
              >
                친구추가  &nbsp;
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
            )}
          </div>
        </div>
        <div className="w-[10%] text-white flex justify-center items-center text-xl hover:scale-105 cursor-pointer" onClick={goBack}>
          {/* 얘는 Main으로 가는 게 아니라서 따로 해줬음  */}

            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </div>
    </div>
  );
}
