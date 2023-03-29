import { NavigateFunction, useNavigate } from "react-router";

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
              className="p-2 border border-black border-solid bg-slate-200 rounded-lg text-xs"
              onClick={() => {
                memberId && nickname && handleModalFor(memberId, nickname);
                handleProposalModal();
              }}
            >
              친구신청
            </button>
          )}

          {/* {goBtn("마이페이지", () => navigate(`/mypage/${memberId}`))} */}
          <button
            className="p-2 border border-black border-solid bg-slate-200 rounded-lg text-xs"
            onClick={() => navigate(`/mypage/${memberId}`)}
          >
            마이페이지
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
    </div>
  );
}
