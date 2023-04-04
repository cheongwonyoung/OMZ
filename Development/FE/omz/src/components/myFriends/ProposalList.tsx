import FriendsItem from "./FriendsItem";
import ProposalBottom from "./ProposalBottom";
import { v4 as uuidv4 } from "uuid";

type Props = {
  handleRefuseModal(id: number, name: string): void;
  proposals: any;
  refetch(): void;
};

export default function ProposalList({
  handleRefuseModal,
  proposals,
  refetch,
}: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      {proposals !== undefined &&
        proposals.data.map(
          (proposal: {
            friendId: number;
            fromMember: { memberId: number; nickname: string; file: string };
            message: string;
          }) => (
            <FriendsItem
              name={proposal.fromMember.nickname}
              content={proposal.message}
              imgsrc={proposal.fromMember.file}
              bottom={
                <ProposalBottom
                  handleRefuseModal={handleRefuseModal}
                  id={proposal.friendId}
                  name={proposal.fromMember.nickname}
                  refetch={refetch}
                />
              }
              key={uuidv4()}
            />
          )
        )}
    </div>
  );
}
