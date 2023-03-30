import { useState } from "react";
import MyPageBox from "../components/mypage/MyPageBox";
import Camera3D from "../components/common/Camera3D";
import { Model } from "../assets/3DAvatar/Rabbit";
import CameraAvatar from "../components/common/CameraAvatar";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userStatus, userToken } from "../recoil/userAtom";
import { useMutation, useQuery } from "react-query";
import { changeProfileImg, getMyCustomInfo, updateCustom } from "../api/myPage";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";
import ModalBlackBg from "../components/common/ModalBlackBg";
import ProfileImgModal from "../components/mypage/ProfileImgModal";

export default function MyPageCustomPage() {
  const memberId = useRecoilValue(userStatus).id;
  const navigate = useNavigate();
  // 처음 값은 다 1로 설정 (모자, 안경, 날개)
  const [itemStatus, setItemStatus] = useState<{ [key: string]: number }>({
    hat: 0,
    glasses: 0,
    wing: 0,
  });

  const handleItems = (item: string) => {
    const variety = item.split("_")[0];
    const num = Number(item.split("_")[1]);
    console.log(itemStatus);
    setItemStatus({ ...itemStatus, [variety]: num });
  };

  const showAvatar = () => {
    // switch (animal) {
    //   case "rabbit":
    return (
      <CameraAvatar keepRender={true} Avatar={<Model position={[0, 0, 0]} />} />
    );
    // }
  };

  useQuery(["customUpdate", memberId], () => getMyCustomInfo(memberId), {
    onSuccess(data) {
      const existingCustom: { [key: string]: number } = {};
      for (const custom of data.data.items) {
        existingCustom[custom.name] = custom.state;
      }
      setItemStatus(existingCustom);
    },
  });

  const changeCustom = useMutation(
    (body: { name: string; state: number }[]) => updateCustom(memberId, body),
    {
      onSuccess() {
        alert("아바타 수정 성공");
        navigate(-1);
      },
    }
  );

  const changeCustomSubmit = () => {
    const data = [];
    const itemNames = Object.keys(itemStatus);
    for (const name of itemNames) {
      data.push({ name: name, state: itemStatus[name] });
    }
    console.log(data);
    changeCustom.mutate(data);
  };

  const [profileImg, setProfileImg] = useState<any>();
  const [imgUrl, setImgUrl] = useState("");
  const screenShot = () => {
    const target = document.getElementById("capture");
    if (target !== null) {
      html2canvas(target).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob !== null) {
            const myfile = new File([blob], `${uuidv4()}.png`, {
              type: "image/png",
            });
            setProfileImg(myfile);
            const img = URL.createObjectURL(myfile);
            console.log(img);
            setImgUrl(img);
            handleIsProfile();
          }
        });
      });
    }
  };

  const access_token = useRecoilValue(userToken).access_token;
  const [profile, setProfile] = useRecoilState(userStatus);
  const updateProfileImg = useMutation(
    (file: FormData) => changeProfileImg(file, access_token),
    {
      onSuccess(data) {
        console.log(data);
        setProfile({ ...profile, profile_img: data.data.file });
      },
    }
  );
  const goUpdateImg = () => {
    const formdata = new FormData();
    formdata.append("file", profileImg);

    updateProfileImg.mutate(formdata);
  };

  const deleteUrl = () => {
    URL.revokeObjectURL(imgUrl);
  };

  const [isProfile, setIsProfile] = useState(false);
  const handleIsProfile = () => {
    setIsProfile((prev) => !prev);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {isProfile && (
        <ModalBlackBg
          closeModal={handleIsProfile}
          modal={
            <ProfileImgModal
              img={imgUrl}
              deleteUrl={deleteUrl}
              handleIsProfile={handleIsProfile}
              goUpdateImg={goUpdateImg}
            />
          }
        />
      )}

      <TitleBar
        goto={`/mypage/${memberId}`}
        title="My Page"
        icon={images.my_page_img}
      />
      <div className="w-11/12 max-w-3xl  h-full flex flex-col items-center gap-2">
        <p className="w-11/12 font-bold text-2xl mb-8 ml-1 mt-8">꾸미기</p>
        <div className="h-96 aspect-square" id="capture">
          {showAvatar()}
        </div>
        <div
          onClick={changeCustomSubmit}
          className="flex w-8/12 justify-center items-center py-2 rounded-[10px] bg-white/50 border border-black cursor-pointer hover:bg-black/20 my-3"
        >
          저장
        </div>
        <div
          onClick={screenShot}
          className="flex w-8/12 justify-center items-center py-2 rounded-[10px] bg-white/50 border border-black cursor-pointer hover:bg-black/20"
        >
          프로필 사진 촬영
        </div>
        <div className="w-full mt-5">
          <MyPageBox handleItems={handleItems} />
        </div>
      </div>
    </div>
  );
}
