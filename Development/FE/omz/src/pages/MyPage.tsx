import MbtiUpdateModal from "../components/mypage/MbtiUpdateModal";
import { useState } from "react";
import MyPageMiniRoomBanner from "../components/mypage/MyPageMiniRoomBanner";
import MyPageBasicInformation from "../components/mypage/MyPageBasicInformation";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import CameraAvatar from "../components/common/CameraAvatar";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
import { useQuery } from "react-query";
import { getMyPageInfos } from "../api/myPage";
import { Custom_rabbit } from "../assets/3DAvatar/Custom_rabbit";
import { Custom_bear } from "../assets/3DAvatar/Custom_bear";
import { Custom_fox } from "../assets/3DAvatar/Custom_fox";
import { Custom_dino } from "../assets/3DAvatar/Custom_dino";
import { Custom_cat } from "../assets/3DAvatar/Custom_cat";
import { Custom_dog } from "../assets/3DAvatar/Custom_dog";

export default function MyPage() {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const [animal, setAnimal] = useState("");

  const goToCustom = () => {
    navigate("/mypage/custom");
  };
  function closeModalHandler() {
    setShowModal(false);
  }
  const showAvatar = () => {
    switch (animal) {
      case "토끼":
        return (
          <CameraAvatar
            Avatar={
              <Custom_rabbit position={[0, 0, 0]} itemStatus={itemStatus} />
            }
          />
        );
      case "곰":
        return (
          <CameraAvatar
            Avatar={
              <Custom_bear position={[0, 0.3, 0]} itemStatus={itemStatus} />
            }
          />
        );
      case "여우":
        return (
          <CameraAvatar
            Avatar={<Custom_fox position={[0, 0, 0]} itemStatus={itemStatus} />}
          />
        );
      case "공룡":
        return (
          <CameraAvatar
            Avatar={
              <Custom_dino position={[0, 0, 0]} itemStatus={itemStatus} />
            }
          />
        );
      case "고양이":
        return (
          <CameraAvatar
            Avatar={<Custom_cat position={[0, 0, 0]} itemStatus={itemStatus} />}
          />
        );
      case "강아지":
        return (
          <CameraAvatar
            Avatar={<Custom_dog position={[0, 0, 0]} itemStatus={itemStatus} />}
          />
        );
    }
  };

  const memberId = useRecoilValue(userStatus).id;
  const myPageId = useParams().id;
  const isOwner = memberId == myPageId;

  // TODO 아래 itemStatus 이거 아바타에 props로 내려줘서 로직 짜야함

  const [itemStatus, setItemStatus] = useState<{ [key: string]: number }>({
    hat: 0,
    glasses: 0,
    wing: 0,
  });

  const { data } = useQuery(
    "mypageInfo",
    () => getMyPageInfos(Number(myPageId)),
    {
      onSuccess(data) {
        setAnimal(data.data.member.faceName);
        const existingCustom: { [key: string]: number } = {};
        for (const custom of data.data.items) {
          existingCustom[custom.name] = custom.state;
        }
        setItemStatus(existingCustom);
      },
      staleTime: 0,
    }
  );
  const member = data?.data.member;

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <TitleBar goto="/main" title="My Page" icon={images.my_page_img} />
      <MyPageMiniRoomBanner />
      <div className="h-96 my-5 w-11/12 max-w-xl">{showAvatar()}</div>
      {isOwner && (
        <div
          className="flex max-w-sm w-8/12 justify-center mb-3 items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[10px] bg-white/50 border border-black px-10 cursor-pointer hover:bg-black/20"
          onClick={goToCustom}
        >
          <p className="text-sm font-medium text-center">꾸미기</p>
        </div>
      )}

      <MyPageBasicInformation member={member} isOwner={isOwner} />
      {showModal && <MbtiUpdateModal onCancel={closeModalHandler} />}
    </div>
  );
}
