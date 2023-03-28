import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

type Props = {
  memberId: number;
  item: string;
};

export default function CommunityMyPageBanner({ memberId, item }: Props) {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate(`/miniroom/${memberId}`);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 flex flex-col justify-center items-start self-stretch relative gap-3 p-5 border-b border-black mb-5">
        <img
          className="w-20 h-20 border rounded-full"
          src={images.mini_room_img}
        />
        <p className="w-[350px] text-lg font-bold text-left text-black">
          {item}
        </p>
        <button
          className="text-base rounded-md font-bold cursor-pointer hover:bg-black"
          onClick={handleClick}
        >
          마이룸 구경하기
        </button>
      </div>
    </div>
  );
}
