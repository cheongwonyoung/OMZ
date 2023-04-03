import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CameraAvatar from "../common/CameraAvatar";
import {
  faHome,
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import TagList from "./TagList";
import FriendBtn from "./FriendBtn";
import { useNavigate } from "react-router-dom";
type Props = {
  handleRefuseModal(): void;
  handleProposalModal(): void;
  handleModalFor(memberId: number, nickname: string): void;
  info: any;
};
export default function FriendsCard({
  handleRefuseModal,
  handleProposalModal,
  handleModalFor,
  info,
}: Props) {
  // const tags = ["곰상", "ISFP", "짝꿍", "가능성", "95%"];
  const info_tags = [`${info.animal}상`, `${info.mbti}`];
  const possibility_tags = [
    `${Math.ceil(info.result * 100)}%`,
    "가능성",
    "짝꿍",
  ];

  const goProposal = () => {
    handleModalFor(info.memberId, info.nickname);
    handleProposalModal();
  };

  const goReject = () => {
    handleModalFor(info.memberId, info.nickname);
    handleRefuseModal();
  };

  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-500/50 rounded-2xl flex flex-col items-center gap-5 pt-10 pb-20">
      <div className="h-60"></div>
      <div className="text-2xl text-white">{info.nickname}</div>
      <div className="flex flex-col gap-2">
        <TagList tags={info_tags} />
        <TagList tags={possibility_tags} />
      </div>
      <button
        className="text-white text-base opacity-95 hover:text-black"
        onClick={() => navigate(`/miniroom/${info.memberId}`)}
      >
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        놀러가기
      </button>
      <div className="flex justify-center gap-3">
        <FriendBtn
          icon={<FontAwesomeIcon icon={faHeart} />}
          text={"친구 신청"}
          logic={goProposal}
        />
        <FriendBtn
          icon={<FontAwesomeIcon icon={faHeartCrack} />}
          text={"친구 거절"}
          logic={goReject}
        />
      </div>
    </div>
  );
}
