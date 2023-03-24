import FriendsItem from "./FriendsItem";
import ProposalBottom from "./ProposalBottom";

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

  return (
    <div className="w-full flex flex-col items-center">
      {dummys.map((data) => (
        <FriendsItem
          name={data.name}
          content={data.content}
          imgsrc={data.imgsrc}
          bottom={<ProposalBottom />}
        />
      ))}
    </div>
  );
}
