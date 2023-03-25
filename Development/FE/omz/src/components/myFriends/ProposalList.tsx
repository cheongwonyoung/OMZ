import FriendsItem from "./FriendsItem";
import ProposalBottom from "./ProposalBottom";
import { v4 as uuidv4 } from "uuid";
import { getProposalList, rejectProposal } from "../../api/myFriends";
import { useQuery } from "react-query";

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

  //TODO 여기 친구신청 리스트 받는곳
  // const { data } = useQuery("proposalList", () => getProposalList(1), {
  //   onSuccess(data) {
  //     console.log(data);
  //   },
  // });

  return (
    <div className="w-full flex flex-col items-center">
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
