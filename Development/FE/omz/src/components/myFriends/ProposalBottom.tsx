import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProposalBottom() {
  return (
    <div className="flex w-full mt-2 gap-2">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faHeart} />
        <p>수락</p>
      </div>
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faHeartCrack} />
        <p>거절</p>
      </div>
    </div>
  );
}
