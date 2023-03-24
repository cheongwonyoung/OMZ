import {
  faHeartCrack,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListBottomBar() {
  return (
    <div className="flex w-full justify-around mt-2 text-xs">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon
          icon={faHome}
          className="text-brown-400 text-teal-400"
        />
        <p>놀러가기</p>
      </div>
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faMessage} className="text-pink-400" />
        <p>말 걸기</p>
      </div>
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faHeartCrack} className="text-blue-400" />
        <p>친구 끊기</p>
      </div>
    </div>
  );
}
