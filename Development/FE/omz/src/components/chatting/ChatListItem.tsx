import { imageUrl } from "../../api";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { addFriends } from "../../api/chatting";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

type Chat = {
  [key: string]: any;
};

type Props = {
  item: Chat;
  refetch: any;
};

export default function ChatListItem({ item, refetch }: Props) {
  const navigate = useNavigate();
  const memberId = useRecoilValue(userStatus).id;
  // 채팅방 클릭하면 해당 채팅방으로 이동하게 함

  const handleClick = (roomId: number) => {
    navigate(`${roomId}`, {
      state: { roomId },
    });
  };
  // image 루트 정의
  const imageUrlRoot = imageUrl + item?.chatOtherInfo.file;

  // 지금 시각과 제일 최근에 보낸 채팅의 시각의 차이 를 구함
  const createdTime = item?.recentMessageCreatedTime;

  const nowtime = new Date();
  const chatTime = moment(createdTime);
  const nowTime = moment(nowtime);

  const timeGapMinute = Math.trunc(
    moment.duration(nowTime.diff(chatTime)).asMinutes()
  );
  const timeGapHour = Math.trunc(
    moment.duration(nowTime.diff(chatTime)).asHours()
  );

  // 친구가 아니라면 친구 추가 버튼이 뜸 (friendState가 0일 때)
  // 친구가 하고 싶으면 친구 추가하기
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
      file: item.chatOtherInfo.file,
      friendState: item.chatOtherInfo.friendState,
      memberId: item.chatOtherInfo.memberId,
      nickname: item.chatOtherInfo.nickName,
    },
    memberId: memberId,
  };
  const handleFriend = () => {
    addFriend.mutate(friendInfo);
  };

  return (
    <>
      <div
        onClick={() => handleClick(item?.roomId)}
        className="flex py-2 w-11/12 justify-center items-center border-b border-black gap-5"
      >
        {item?.chatOtherInfo.file && (
          <img
            className="max-h-20 object-cover rounded-full border"
            src={imageUrlRoot}
          />
        )}
        <div className="flex flex-col justify-around py-1 w-[90%] gap-3">
          {/* <div className="flex flex-col justify-start items-start"> */}
          <div className="flex flex-col gap-1">
            <div className="w-full flex justify-between">
              <p className="text-base font-semibold">
                {item?.chatOtherInfo.nickName}
              </p>
              <p className="text-sm pr-3">
                {/* 60분 보다 많으면 시간으로 적으면 분으로 표시하기  */}
                {timeGapMinute > 60
                  ? timeGapHour + "시간 전"
                  : timeGapMinute + "분 전"}
              </p>
            </div>
            {/* friendState가 0일 때 친구 추가 버튼 띄워주기  */}
            {!item?.chatOtherInfo.friendState && (
              <p className="text-xs">친구가 아닌 사용자</p>
              // <button
              //   className="border-black border-2 p-2 hover:bg-black/20"
              //   onClick={(e) => {
              //     e?.stopPropagation();
              //     handleFriend();
              //   }}
              // >
              //   친구추가
              // </button>
            )}
          </div>
          {/* </div> */}
          <p className="text-sm">
          {item?.recentMessage}
          </p>
        </div>
      </div>
    </>
  );
}
