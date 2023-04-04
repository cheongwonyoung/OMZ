import {
  faHeartCrack,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

type Props = {
  id: number;
  name: string;
  handleDeleteMember(name: string, id: number): void;
  handletalkFriends(id: number): void;
};

export default function ListBottomBar({
  id,
  name,
  handleDeleteMember,
  handletalkFriends,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mt-2 mx-5 text-sm">
      <div
        className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:font-bold"
        onClick={() => navigate(`/miniroom/${id}`)}
      >
        <FontAwesomeIcon icon={faHome} className="text-teal-400" />
        <p>놀러가기</p>
      </div>
      <div
        onClick={() => handletalkFriends(id)}
        className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:font-bold"
      >
        <FontAwesomeIcon icon={faMessage} className="text-blue-400" />
        <p>말 걸기</p>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:font-bold"
        onClick={() => handleDeleteMember(name, id)}
      >
        <FontAwesomeIcon icon={faHeartCrack} />
        <p>친구 끊기</p>
      </div>
    </div>
  );
}
