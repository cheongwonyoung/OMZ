import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../../assets/images";

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
    <div className="max-w-2xl flex flex-col items-center px-2">
      <div className="flex w-full items-center justify-between my-5">
        <div className="flex items-center gap-2">
          <img src={images.my_page_img} alt="" className="w-14" />
          <p className="title text-3xl">Profile</p>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-3xl mr-2 hover:text-red-600 cursor-pointer"
          onClick={handleIsProfile}
        />
      </div>
      <img src={img} alt="" className="w-10/12" />
      <button
        className="flex w-10/12 justify-center items-center py-2 rounded-[10px] bg-white/50 border border-black cursor-pointer hover:bg-black/20 mt-5"
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
