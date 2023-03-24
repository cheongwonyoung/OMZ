import {
  faHeartCrack,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListBottomBar() {
  return (
    <div className="flex w-full justify-between mt-2">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faHome} />
        <p>놀러가기</p>
      </div>
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faMessage} />
        <p>말 걸기</p>
      </div>
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faHeartCrack} />
        <p>친구 끊기</p>
      </div>
    </div>
  );
}
