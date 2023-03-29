import FriendsItem from "./FriendsItem";
import ProposalBottom from "./ProposalBottom";
import { v4 as uuidv4 } from "uuid";
import { getProposalList, rejectProposal } from "../../api/myFriends";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

type Props = {
  handleRefuseModal(id: number, name: string): void;
};

export default function ProposalList({ handleRefuseModal }: Props) {
  const memberId = useRecoilValue(userStatus).id;
  //TODO 여기 친구신청 리스트 받는곳 나중에 db에 데이터 넣어달라고 하자
  const { data: proposals, refetch } = useQuery(
    "proposalList",
    () => getProposalList(memberId),
    {
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  return (
    <div className="w-full flex flex-col items-center">
      {proposals !== undefined &&
        proposals.data.map(
          (proposal: {
            friendId: number;
            toMember: { memberId: number; nickname: string; file: string };
            message: string;
          }) => (
            <FriendsItem
              name={proposal.toMember.nickname}
              content={proposal.message}
              imgsrc={proposal.toMember.file}
              bottom={
                <ProposalBottom
                  handleRefuseModal={handleRefuseModal}
                  id={proposal.friendId}
                  name={proposal.toMember.nickname}
                  refetch={refetch}
                />
              }
              key={uuidv4()}
            />
          )
        )}
      {/* {dummys.map((data) => (
        <FriendsItem
          name={data.name}
          content={data.content}
          imgsrc={data.imgsrc}
          bottom={<ProposalBottom />}
          key={uuidv4()}
        />
      ))} */}
    </div>
  );
}
