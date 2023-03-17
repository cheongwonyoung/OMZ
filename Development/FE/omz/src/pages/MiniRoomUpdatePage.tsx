import { MiniRoom } from "../assets/3DMiniRoom/MiniRoom";
import Camera3D from "../components/common/Camera3D";
import ItemBox from "../components/miniRoom/ItemBox";
import NextBtn from "../components/signUp/NextBtn";

export default function MiniRoomUpdatePage() {
  return (
    <div className="w-full px-4 pt-12 flex flex-col items-center">
      <div className="w-full aspect-square">
        <Camera3D MiniRoom={<MiniRoom position={[0, 0, 0]} />} />
      </div>
      <NextBtn comment="저장" logic={() => console.log("갱")} />
      <div className="w-full h-1/4 mt-8">
        <ItemBox />
      </div>
    </div>
  );
}
