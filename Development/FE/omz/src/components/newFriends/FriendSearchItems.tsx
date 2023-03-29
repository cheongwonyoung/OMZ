import { NavigateFunction, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

type Props = {
  nickname?: string;
  memberId?: number;
  requestPossible?: boolean;
  handleModalFor(memberId: number, nickname: string): void;
  handleProposalModal(): void;
};

export default function FriendSearchItems({
  nickname,
  memberId,
  requestPossible,
  handleModalFor,
  handleProposalModal,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="flex justify-between p-3 items-center">
        <p className="font-bold text-lg text-justify align-middle">
          {nickname}
        </p>
        <div className="flex gap-2">
          {requestPossible && (
            <button
              className="text-base hover:font-bold hover:scale-105 mr-5"
              onClick={() => {
                memberId && nickname && handleModalFor(memberId, nickname);
                handleProposalModal();
              }}
            >
              <FontAwesomeIcon icon={faHeart} className="text-pink-400" /> &nbsp;
              친구신청
            </button>
          )}

          {/* {goBtn("마이페이지", () => navigate(`/mypage/${memberId}`))} */}
          <button
            className="text-base hover:font-bold hover:scale-105"
            onClick={() => navigate(`/mypage/${memberId}`)}
          >
            <FontAwesomeIcon icon={faHome} className="text-teal-400" /> &nbsp;
            놀러가기
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
    </div>
  );
}
