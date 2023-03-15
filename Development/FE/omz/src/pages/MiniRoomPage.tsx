import { MiniRoom } from "../assets/3DMiniRoom/MiniRoom";
import Camera3D from "../components/common/Camera3D";
import BottomBar from "../components/miniRoom/BottomBar";
import Heart from "../components/miniRoom/Heart";
import StateMessage from "../components/miniRoom/StateMessage";
import UpperBar from "../components/miniRoom/UpperBar";

export default function MiniRoomPage() {
  return (
    <div className="w-full px-4 pt-12 flex flex-col items-center">
      <UpperBar />
      <div className="mt-8 w-full">
        <StateMessage />
      </div>
      <div className="mt-8">
        <Heart />
      </div>
      <div className="w-full h-80">
        <Camera3D MiniRoom={<MiniRoom position={[0, 0, 0]} />} />
      </div>
      <div className="mt-8">
        <BottomBar />
      </div>
    </div>
  );
}
