import MbtiUpdateModal from "../components/mypage/MbtiUpdateModal";
import { useState } from "react";
import { Model } from "../assets/3DAvatar/Rabbit";
import Camera3D from "../components/common/Camera3D";
import MyPageMiniRoomBanner from "../components/mypage/MyPageMiniRoomBanner";
import MyPageBasicInformation from "../components/mypage/MyPageBasicInformation";
import { useNavigate } from "react-router-dom";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import CameraAvatar from "../components/common/CameraAvatar";
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
    return <CameraAvatar Avatar={<Model position={[0, 0, 0]} />} />;
    // }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <TitleBar goto="/" title="My Page" icon={images.my_page_img} />
      <MyPageMiniRoomBanner />
      <div className="w-[90%] aspect-square">{showAvatar()}</div>

      <div
        className="flex w-[80%] justify-center mb-8 items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[10px] bg-white/50 border border-black px-10 cursor-pointer hover:bg-black/20"
        onClick={goToCustom}
      >
        <p className="flex-grow text-sm font-medium text-center">꾸미기</p>
      </div>
      <MyPageBasicInformation />
      <button onClick={() => setShowModal(true)}>모달 바로가기</button>
      {showModal && <MbtiUpdateModal onCancel={closeModalHandler} />}
    </div>
  );
}
