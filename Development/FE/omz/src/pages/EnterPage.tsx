import { OMZmain_with_png_logo } from "../assets/3DAvatar/OMZmain_with_png_logo";
import Camera3D from "../components/common/Camera3D";

export default function EnterPage() {
  return (
    <div className="w-screen h-screen">
      <Camera3D
        MiniRoom={<OMZmain_with_png_logo position={[20, -25, -20]} />}
      />
    </div>
  );
}
