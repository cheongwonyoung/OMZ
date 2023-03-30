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
      className="flex justify-center items-center mt-3 gap-2 cursor-pointer hover:scale-105"
      onClick={goMiniRoom}
    >
      <img
        src={images.mini_room_img}
        className="w-10 h-10 object-cover"
      />
      <p className="title text-base">
        Mini Room
      </p>
      {/* <FontAwesomeIcon icon={faArrowRight}/> */}
    </div>
  );
}
