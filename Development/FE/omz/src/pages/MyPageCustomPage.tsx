import { useState } from "react";
import MyPageBox from "../components/mypage/MyPageBox";
import Camera3D from "../components/common/Camera3D";
import { Model } from "../assets/3DAvatar/Rabbit";

export default function MyPageCustomPage() {
  // 처음 값은 다 1로 설정 (모자, 안경, 날개)
  const [itemStatus, setItemStatus] = useState({
    cap: "1",
    glasses: "1",
    wing: "1",
  });

  const handleItems = (item: string) => {
    const variety = item.split("_")[0];
    const num = item.split("_")[1];
    console.log(itemStatus);
    setItemStatus({ ...itemStatus, [variety]: num });
  };

  const showAvatar = () => {
    // switch (animal) {
    //   case "rabbit":
    return <Camera3D Avatar={<Model position={[0, -2, 0]} />} />;
    // }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <p>꾸미기</p>
      <div className="h-full w-full">{showAvatar()}</div>
      <div className="w-[50%] flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-2.5 rounded-[10px] bg-white/50 border border-black cursor-pointer hover:bg-black/20">
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-black">
          저장
        </p>
      </div>

      <div className="w-full h-1/4 mt-8">
        <MyPageBox handleItems={handleItems} />
      </div>
    </div>
  );
}
