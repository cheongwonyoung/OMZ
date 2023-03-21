import { images } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CommunityCommentInput() {
  return (
    <div className="flex justify-around items-center w-full relative gap-[15px] p-[15px] bg-white/70 border-r-0 border-b border-t border-l-0 border-black">
      <img
        className="flex-grow-0 flex-shrink-0 w-10 h-10"
        src={images.mini_room_img}
      />
      <input
        type="text"
        className="w-[70%] bg-white/70"
        placeholder="댓글을 입력하세요"
      />
      <button>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <div></div>
    </div>
  );
}
