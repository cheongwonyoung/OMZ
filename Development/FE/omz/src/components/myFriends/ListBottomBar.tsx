import {
  faHeartCrack,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import { talkToFriends } from "../../api/chatting";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { useEffect } from "react";

type Props = {
  id: number;
  name: string;
  handleDeleteMember(name: string, id: number): void;
};

export default function ListBottomBar({ id, name, handleDeleteMember }: Props) {
  const navigate = useNavigate();
  const memberId = useRecoilValue(userStatus).id;

  const { data, refetch } = useQuery(
    "talkfriends",
    () => talkToFriends(memberId, id),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  const onClick = () => {
    refetch();
    const roomId = data!.data;
    navigate(`/chatting/${memberId}/${roomId}`, {
      state: { roomId },
    });
  };

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
        onClick={onClick}
        className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:font-bold"
      >
        <FontAwesomeIcon icon={faMessage} className="text-pink-400" />
        <p>말 걸기</p>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:font-bold"
        onClick={() => handleDeleteMember(name, id)}
      >
        <FontAwesomeIcon icon={faHeartCrack} className="text-blue-400" />
        <p>친구 끊기</p>
      </div>
    </div>
  );
}
