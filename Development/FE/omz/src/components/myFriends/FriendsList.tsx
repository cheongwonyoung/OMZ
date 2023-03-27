import { useQuery } from "react-query";
import { getMyFriendsList } from "../../api/myFriends";
import FriendsItem from "./FriendsItem";
import ListBottomBar from "./ListBottomBar";
import { v4 as uuidv4 } from "uuid";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

export default function FriendsList() {
  const dummys = [
    { name: "채채리", content: "피그마 왜이리 어렵냐", imgsrc: "rabbit_img" },
    {
      name: "채채리",
      content:
        "피그마 왜이리 어렵냐 피그마 왜이리 어렵냐피그마 왜이리 어렵냐피그마 왜이리 어렵냐피그마 왜이리 어렵냐",
      imgsrc: "rabbit_img",
    },
    { name: "채채리", content: "피그마 왜이리 어렵냐", imgsrc: "rabbit_img" },
    { name: "채채리", content: "피그마 왜이리 어렵냐", imgsrc: "rabbit_img" },
    { name: "채채리", content: "피그마 왜이리 어렵냐", imgsrc: "rabbit_img" },
  ];

  // TODO 여기 멤버아이디 로그인한 유저로 바꾸고 나중에 DB 생기면 그때 변경
  const memberId = useRecoilValue(userStatus).id;
  const { data: friends } = useQuery(
    "friendlist",
    () => getMyFriendsList(memberId),
    {
      onSuccess(data) {
        console.log(data);
      },
    }
  );
  return (
    <div className="w-full flex flex-col items-center">
      {friends !== undefined &&
        friends.data.map(
          (friend: {
            nickname: string;
            stateMessage: string;
            memberId: number;
          }) => (
            <FriendsItem
              name={friend.nickname}
              imgsrc={"rabbit_img"}
              content={friend.stateMessage}
              key={uuidv4()}
              bottom={<ListBottomBar id={friend.memberId} />}
            />
          )
        )}
      {/* {dummys.map((data) => (
        <FriendsItem
          name={data.name}
          content={data.content}
          imgsrc={data.imgsrc}
          bottom={<ListBottomBar />}
          key={uuidv4()}
        />
      ))} */}
    </div>
  );
}
