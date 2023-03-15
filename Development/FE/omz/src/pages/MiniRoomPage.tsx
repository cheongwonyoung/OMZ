import { MiniRoom } from "../assets/3DMiniRoom/MiniRoom";
import Camera3D from "../components/common/Camera3D";
import BottomBar from "../components/miniRoom/BottomBar";
import Heart from "../components/miniRoom/Heart";
import MusicModal from "../components/miniRoom/MusicModal";
import StateMessage from "../components/miniRoom/StateMessage";
import UpperBar from "../components/miniRoom/UpperBar";
import { useState } from "react";

export default function MiniRoomPage() {
  const [isMusic, setIsMusic] = useState(false);
  return (
    <div className="w-full px-4 pt-12 flex flex-col items-center">
      {isMusic && <MusicModal />}
      <UpperBar />
      <div className="mt-8 w-full">
        <StateMessage />
      </div>
      <button onClick={() => setIsMusic(true)}>BGM</button>
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
