import {
  faHeartCrack,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

type Props = {
  id: number;
};

export default function ListBottomBar({ id }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-around mt-2 text-xs">
      <div
        className="flex items-center gap-1"
        onClick={() => navigate(`/miniroom/${id}`)}
      >
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
