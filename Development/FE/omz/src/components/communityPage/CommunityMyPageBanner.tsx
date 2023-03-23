import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export default function CommunityMyPageBanner() {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("/miniroom");
  };

  return (
    <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-5 border-t-0 border-r-0 border-b border-l-0 border-black">
      <img
        className="flex-grow-0 flex-shrink-0 w-10 h-10"
        src={images.mini_room_img}
      />
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[5px]">
        <p className="flex-grow-0 flex-shrink-0 w-[350px] text-sm font-bold text-left text-black">
          닉네임
        </p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
          <button
            className="flex-grow-0 flex-shrink-0 text-sm text-left"
            onClick={handleClick}
          >
            마이룸 구경하기
          </button>
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden" />
        </div>
      </div>
    </div>
  );
}
