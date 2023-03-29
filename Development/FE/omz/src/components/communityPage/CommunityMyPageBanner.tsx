import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {
  memberId: number;
  item: string;
  file: string;
};

export default function CommunityMyPageBanner({ memberId, item, file }: Props) {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate(`/miniroom/${memberId}`);
  };
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 flex flex-col justify-center items-start self-stretch relative gap-3 p-5 border-b border-black mb-5">
        <img
          className="w-20 h-20 border rounded-full"
          src={IMAGE_ROOT + file}
        />
        <p className="w-[350px] text-lg font-bold text-left text-black pl-2">
          {item}
        </p>
        <div className="pl-2 flex gap-2 items-center hover:scale-105">
          <FontAwesomeIcon
            icon={faHome}
            className="text-brown-400 text-teal-400"
          />
          <button
            className="text-base rounded-md font-bold cursor-pointer"
            onClick={handleClick}
          >
            마이룸 구경하기
          </button>
        </div>
      </div>
    </div>
  );
}
