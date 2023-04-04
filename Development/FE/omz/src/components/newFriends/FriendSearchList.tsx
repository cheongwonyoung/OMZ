import FriendSearchItems from "./FriendSearchItems";
import { v4 as uuidv4 } from "uuid";

interface searchList {
  memberId: number;
  nickname: string;
  requestPossible: boolean;
  file: null;
}

type Props = {
  searchList: searchList[];
  handleModalFor(memberId: number, nickname: string): void;
  handleProposalModal(): void;
};
export default function FriendSearchList({
  searchList,
  handleProposalModal,
  handleModalFor,
}: Props) {
  console.log(searchList);
  return (
    <div className="w-11/12 mt-8 flex flex-col gap-4">
      {searchList.map((search) => (
        <FriendSearchItems
          nickname={search.nickname}
          memberId={search.memberId}
          requestPossible={search.requestPossible}
          key={uuidv4()}
          handleProposalModal={handleProposalModal}
          handleModalFor={handleModalFor}
        />
      ))}
    </div>
  );
}
