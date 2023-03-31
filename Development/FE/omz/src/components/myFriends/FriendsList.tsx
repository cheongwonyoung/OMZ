import { useQuery } from "react-query";
import { getMyFriendsList } from "../../api/myFriends";
import FriendsItem from "./FriendsItem";
import ListBottomBar from "./ListBottomBar";
import { v4 as uuidv4 } from "uuid";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { useMutation } from "react-query";
import { talkToFriends } from "../../api/chatting";
import { useNavigate } from "react-router-dom";
type Props = {
  handleDeleteMember(name: string, id: number): void;
  friends: any;
};

export default function FriendsList({ handleDeleteMember, friends }: Props) {
  const navigate = useNavigate();

  // TODO 여기 멤버아이디 로그인한 유저로 바꾸고 나중에 DB 생기면 그때 변경
  const memberId = useRecoilValue(userStatus).id;
  // const { data: friends, refetch } = useQuery(
  //   "friendlist",
  //   () => getMyFriendsList(memberId),
  //   {
  //     onSuccess(data) {
  //       console.log(data);
  //     },
  //   }
  // );

  const talkFriends = useMutation(
    (member: { memberId: number; id: number }) =>
      talkToFriends(member.memberId, member.id),
    {
      onSuccess: (data) => {
        const roomId = data.data;
        navigate(`/chatting/${memberId}/${roomId}`, {
          state: { roomId },
        });
      },
    }
  );

  const handletalkFriends = (id: number) => {
    talkFriends.mutate({ memberId, id: id });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {friends !== undefined &&
        friends.data.map(
          (friend: {
            nickname: string;
            stateMessage: string;
            file: string;
            memberId: number;
          }) => (
            <FriendsItem
              name={friend.nickname}
              imgsrc={friend.file}
              content={friend.stateMessage}
              key={uuidv4()}
              bottom={
                <ListBottomBar
                  id={friend.memberId}
                  name={friend.nickname}
                  handleDeleteMember={handleDeleteMember}
                  handletalkFriends={handletalkFriends}
                />
              }
            />
          )
        )}
    </div>
  );
}
