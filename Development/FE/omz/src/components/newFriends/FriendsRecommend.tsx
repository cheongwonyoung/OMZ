import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import FriendsCard from "./FriendsCard";
export default function FriendsRecommend() {
  return (
    <div className="flex flex-col w-11/12 h-full pt-8">
      <p className=" text-purple-500 font-semibold">추천 친구</p>
      <div className="w-full flex justify-center h-3/4 mt-8 items-center">
        <div className="w-1/12 flex justify-center items-center">
          <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer" />
        </div>
        <FriendsCard />
        <div className="w-1/12 flex justify-center items-center">
          <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-8">
        <button>친구 신청</button>
        <button>친구 거절</button>
      </div>
    </div>
  );
}
