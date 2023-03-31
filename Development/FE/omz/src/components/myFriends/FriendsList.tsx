import FriendsItem from "./FriendsItem";
import ListBottomBar from "./ListBottomBar";
import { v4 as uuidv4 } from "uuid";

type Props = {
  handleDeleteMember(name: string, id: number): void;
  friends: any;
};

export default function FriendsList({ handleDeleteMember, friends }: Props) {
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
                />
              }
            />
          )
        )}
    </div>
  );
}
