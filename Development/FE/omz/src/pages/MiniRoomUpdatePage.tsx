import { MiniRoom } from "../assets/3DMiniRoom/MiniRoom";
import { images } from "../assets/images";
import Camera3D from "../components/common/Camera3D";
import TitleBar from "../components/common/TitleBar";
import ItemBox from "../components/miniRoom/ItemBox";
import NextBtn from "../components/signUp/NextBtn";
import { useState } from "react";
import { MiniroomBeta } from "../assets/3DMiniRoom/MiniroomBeta";
import { MiniroomBeta2 } from "../assets/3DMiniRoom/MiniroomBeta2";
export default function MiniRoomUpdatePage() {
  const [itemStatus, setItemStatus] = useState({
    table: "1",
    lamp: "1",
    bed: "1",
  });

  const handleItems = (item: string) => {
    const variety = item.split("_")[0];
    const num = item.split("_")[1];
    setItemStatus({ ...itemStatus, [variety]: num });
  };
  return (
    <div className="w-full px-4 flex flex-col items-center">
      <TitleBar
        icon={images.mini_room_img}
        title={"000님의 MiniRoom"}
        backBtn={true}
      />
      <div className="w-full aspect-square">
        {/* <Camera3D
          MiniRoom={
            <MiniroomBeta position={[20, -25, -20]} itemStatus={itemStatus} />
          }
        /> */}
        <Camera3D
          MiniRoom={
            <MiniroomBeta2 position={[20, -25, -20]} itemStatus={itemStatus} />
          }
        />
      </div>
      <NextBtn
        comment="저장"
        logic={() => console.log("API나오면 변경사항 저장 해버룟")}
      />
      <div className="w-full h-1/4 mt-8">
        <ItemBox handleItems={handleItems} />
      </div>
    </div>
  );
}
