import FriendsItem from "./FriendsItem";
import ListBottomBar from "./ListBottomBar";

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

  return (
    <div className="w-full flex flex-col items-center">
      {dummys.map((data) => (
        <FriendsItem
          name={data.name}
          content={data.content}
          imgsrc={data.imgsrc}
          bottom={<ListBottomBar />}
        />
      ))}
    </div>
  );
}
