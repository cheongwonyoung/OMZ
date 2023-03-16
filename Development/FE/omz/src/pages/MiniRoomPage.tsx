import { MiniRoom } from "../assets/3DMiniRoom/MiniRoom";
import Camera3D from "../components/common/Camera3D";
import BottomBar from "../components/miniRoom/BottomBar";
import Heart from "../components/miniRoom/Heart";
import MusicModal from "../components/miniRoom/MusicModal";
import StateMessage from "../components/miniRoom/StateMessage";
import UpperBar from "../components/miniRoom/UpperBar";
import { useState } from "react";

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
    <div className="w-full px-4 pt-12 flex flex-col items-center">
      {isMusic && <MusicModal closeMusic={closeMusic} />}
      <UpperBar />
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
        <Camera3D MiniRoom={<MiniRoom position={[0, 0, 0]} />} />
      </div>
      <div className="mt-8">
        <BottomBar />
      </div>
    </div>
  );
}
