import { images } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
export default function MyPageMiniRoomBanner() {
  const navigate = useNavigate();
  const memberId = useParams().id;
  const goMiniRoom = () => {
    navigate(`/miniroom/${memberId}`);
  };
  return (
    <div
      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 rounded-[10px] mt-6 cursor-pointer"
      onClick={goMiniRoom}
    >
      <img
        src={images.mini_room_img}
        className="flex-grow-0 flex-shrink-0 w-10 h-10 object-cover hover:scale-105"
      />
      <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-bold text-center hover:text-[#9492FF]">
        Mini Room
      </p>
      <FontAwesomeIcon icon={faArrowRight} className="hover:text-[#9492FF]" />
    </div>
  );
}
