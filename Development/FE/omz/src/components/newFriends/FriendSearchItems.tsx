import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome, faMessage } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { useQuery } from "react-query";
import { talkToFriends } from "../../api/chatting";
import { useEffect } from "react";

type Props = {
  nickname?: string;
  memberId: number;
  requestPossible?: boolean;
  handleModalFor(memberId: number, nickname: string): void;
  handleProposalModal(): void;
  handletalkFriends(id: number): void;
};

export default function FriendSearchItems({
  nickname,
  memberId,
  requestPossible,
  handleModalFor,
  handleProposalModal,
  handletalkFriends,
}: Props) {
  const navigate = useNavigate();
  const myId = useRecoilValue(userStatus).id;

  return (
    <div className="w-full max-w-3xl">
      <div className="flex justify-between p-3 items-center">
        <p className="font-bold text-lg text-justify align-middle">
          {nickname}
        </p>
        <div className="flex gap-2">
          <button
            className="text-base hover:font-bold hover:scale-105 mr-5"
            onClick={() => handletalkFriends(memberId)}
          >
            <FontAwesomeIcon className="text-blue-400" icon={faMessage} />{" "}
            &nbsp; 말 걸기
          </button>

          {requestPossible && (
            <button
              className="text-base hover:font-bold hover:scale-105 mr-5"
              onClick={() => {
                memberId && nickname && handleModalFor(memberId, nickname);
                handleProposalModal();
              }}
            >
              <FontAwesomeIcon icon={faHeart} className="text-pink-400" />{" "}
              &nbsp; 친구신청
            </button>
          )}

          {/* {goBtn("마이페이지", () => navigate(`/mypage/${memberId}`))} */}
          <button
            className="text-base hover:font-bold hover:scale-105"
            onClick={() => navigate(`/miniroom/${memberId}`)}
          >
            <FontAwesomeIcon icon={faHome} className="text-teal-300" /> &nbsp;
            놀러가기
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
    </div>
  );
}
