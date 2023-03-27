import FriendsItem from "./FriendsItem";
import ProposalBottom from "./ProposalBottom";
import { v4 as uuidv4 } from "uuid";
import { getProposalList, rejectProposal } from "../../api/myFriends";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

export default function ProposalList() {
  const dummys = [
    { name: "채채리", content: "나랑 현피뜨자", imgsrc: "rabbit_img" },
    {
      name: "채채리",
      content: "나랑 친구해쥬세요",
      imgsrc: "rabbit_img",
    },
    { name: "채채리", content: "나랑 친구해쥬세요", imgsrc: "rabbit_img" },
    { name: "채채리", content: "나랑 친구해쥬세요", imgsrc: "rabbit_img" },
    { name: "채채리", content: "나랑 친구해쥬세요", imgsrc: "rabbit_img" },
  ];

  const memberId = useRecoilValue(userStatus).id;
  //TODO 여기 친구신청 리스트 받는곳 나중에 db에 데이터 넣어달라고 하자
  const { data: proposals } = useQuery(
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
          (proposal: { nickname: string; stateMessage: string }) => (
            <FriendsItem
              name={proposal.nickname}
              content={proposal.stateMessage}
              imgsrc={"rabbit_img"}
              bottom={<ProposalBottom />}
              key={uuidv4()}
              // TODO 여기 딕셔너리 KEY값 바꿔야함
            />
          )
        )}
      {dummys.map((data) => (
        <FriendsItem
          name={data.name}
          content={data.content}
          imgsrc={data.imgsrc}
          bottom={<ProposalBottom />}
          key={uuidv4()}
        />
      ))}
    </div>
  );
}
