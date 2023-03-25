import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProposalBottom() {
  return (
    <div className="flex w-full mt-2 gap-2 text-xs justify-evenly">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faHeart} className="text-red-400" />
        <p>수락</p>
      </div>
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faHeartCrack} className="text-blue-400" />
        <p>거절</p>
      </div>
    </div>
  );
}
