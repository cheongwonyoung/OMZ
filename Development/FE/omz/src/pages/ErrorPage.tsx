import { Link } from "react-router-dom";
import CameraAvatar from "../components/common/CameraAvatar";
import { Fox_move } from "../assets/3DAvatar/Fox_move";
export default function ErrorPage() {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center gap-2">
      <div className="h-1/2">
        <CameraAvatar Avatar={<Fox_move position={[0, 0.5, 0]} />} />
      </div>
      <p className="text-center">찾을 수 없는 페이지입니다.</p>
      <p className="pb-10">
        {" "}
        요청하신 페이지가 사라졌거나 잘못된 경로를 이용하셨어요.
      </p>
      <Link
        to="/main"
        className=" border-black border-2 px-6 py-3 hover:bg-black/20"
      >
        홈으로 이동
      </Link>
    </div>
  );
}
