import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

type Props = {
  img: string;
  deleteUrl(): void;
  handleIsProfile(): void;
  goUpdateImg(): void;
};

export default function ProfileImgModal({
  img,
  deleteUrl,
  handleIsProfile,
  goUpdateImg,
}: Props) {
  return (
    <div className="flex flex-col items-center p-8">
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute right-4 top-4"
        onClick={handleIsProfile}
      />
      <img src={img} alt="" />
      <button
        className="bg-white border-2 border-solid border-purple-200 rounded-xl p-4"
        onClick={() => {
          goUpdateImg();
          handleIsProfile();
          deleteUrl();
        }}
      >
        프로필 사진 저장
      </button>
    </div>
  );
}
