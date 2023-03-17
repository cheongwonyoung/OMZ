import { MiniRoom } from "../assets/3DMiniRoom/MiniRoom";
import Camera3D from "../components/common/Camera3D";
import BottomBar from "../components/miniRoom/BottomBar";
import Heart from "../components/miniRoom/Heart";
import MusicModal from "../components/miniRoom/MusicModal";
import StateMessage from "../components/miniRoom/StateMessage";
import UpperBar from "../components/miniRoom/UpperBar";
import { useState } from "react";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import { MiniroomBeta } from "../assets/3DMiniRoom/MiniroomBeta";
import { MiniroomBeta2 } from "../assets/3DMiniRoom/MiniroomBeta2";

export default function MiniRoomPage() {
  // BGM 설정 모달
  const [isMusic, setIsMusic] = useState(false);
  const closeMusic = () => {
    setIsMusic(false);
  };

  // 상태 메세지
  const [message, setMessage] = useState("");
  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-full px-4 flex flex-col items-center">
      {isMusic && <MusicModal closeMusic={closeMusic} />}
      <TitleBar
        icon={images.mini_room_img}
        title={"000님의 MiniRoom"}
        backBtn={true}
      />
      <div className="mt-8 w-full">
        <StateMessage handleMessage={handleMessage} message={message} />
      </div>
      <button
        onClick={() => setIsMusic(true)}
        className="bg-pink-300 rounded-md w-40 h-10 font-bold text-white mt-4 shadow-xl"
      >
        BGM 선택
      </button>
      <div className="mt-8">
        <Heart />
      </div>
      <div className="w-full aspect-square">
        <Camera3D
          MiniRoom={
            <MiniroomBeta2
              position={[20, -25, -20]}
              itemStatus={{ table: "1", lamp: "1", bed: "1" }}
            />
          }
        />
        {/* <Camera3D MiniRoom={<MiniRoom position={[15, -15, -15]} />} /> */}
      </div>
      <div className="mt-8">
        <BottomBar />
      </div>
    </div>
  );
}
