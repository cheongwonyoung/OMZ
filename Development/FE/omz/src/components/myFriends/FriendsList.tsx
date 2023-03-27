import { useQuery } from "react-query";
import { getMyFriendsList } from "../../api/myFriends";
import FriendsItem from "./FriendsItem";
import ListBottomBar from "./ListBottomBar";
import { v4 as uuidv4 } from "uuid";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

type Props = {
  handleDeleteMember(name: string, id: number): void;
};

export default function FriendsList({ handleDeleteMember }: Props) {
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
              bottom={
                <ListBottomBar
                  id={friend.memberId}
                  name={friend.nickname}
                  handleDeleteMember={handleDeleteMember}
                />
              }
            />
          )
        )}
    </div>
  );
}
