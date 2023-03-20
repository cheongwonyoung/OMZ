import { Model } from "../../assets/3DAvatar/Rabbit";
import CameraAvatar from "../common/CameraAvatar";

export default function FriendsCard() {
  return (
    <div className="w-5/6 bg-slate-500/75 rounded-2xl h-full flex flex-col items-center">
      <CameraAvatar Avatar={<Model />} />
      <div>아바타</div>
      <div>이름</div>
      <div>태그</div>
      <button>놀러가기</button>
    </div>
  );
}
