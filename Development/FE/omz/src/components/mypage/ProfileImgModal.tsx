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
  // useEffect(() => {
  //   // return deleteUrl();
  // }, [img]);

  return (
    <div className="flex flex-col items-center p-8">
      <img src={img} alt="" />
      <button
        className="border border-solid border-purple-200 bg-white"
        onClick={() => {
          goUpdateImg();
          handleIsProfile();
        }}
      >
        프로필 사진 저장
      </button>
    </div>
  );
}
