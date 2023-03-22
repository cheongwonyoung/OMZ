import MbtiUpdateModal from "../components/mypage/MbtiUpdateModal";
import { useState } from "react";
import { Model } from "../assets/3DAvatar/Rabbit";
import Camera3D from "../components/common/Camera3D";
import MyPageMiniRoomBanner from "../components/mypage/MyPageMiniRoomBanner";
import MyPageBasicInformation from "../components/mypage/MyPageBasicInformation";
import { useNavigate } from "react-router-dom";
export default function MyPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const goToCustom = () => {
    navigate("/mypage/custom/1");
  };
  function closeModalHandler() {
    setShowModal(false);
  }
  const showAvatar = () => {
    // switch (animal) {
    //   case "rabbit":
    return <Camera3D Avatar={<Model position={[0, -2, 0]} />} />;
    // }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <MyPageMiniRoomBanner />
      <div className="h-2/4 w-2/4">{showAvatar()}</div>

      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[10px] bg-white/50 border border-black px-10 cursor-pointer hover:bg-black/20"
        onClick={goToCustom}
      >
        <p className="flex-grow text-sm font-medium text-center">꾸미기</p>
      </div>
      <MyPageBasicInformation />
      <button onClick={() => setShowModal(true)}>모달 바로가기</button>
      {showModal ? <MbtiUpdateModal onCancel={closeModalHandler} /> : null}
    </div>
  );
}
