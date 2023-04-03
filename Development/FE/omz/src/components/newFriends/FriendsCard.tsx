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
import { Custom_rabbit } from "../../assets/3DAvatar/Custom_rabbit";
import { Custom_bear } from "../../assets/3DAvatar/Custom_bear";
import { Custom_fox } from "../../assets/3DAvatar/Custom_fox";
import { Custom_dino } from "../../assets/3DAvatar/Custom_dino";
import { Custom_cat } from "../../assets/3DAvatar/Custom_cat";
import { Custom_dog } from "../../assets/3DAvatar/Custom_dog";

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
  const info_tags = [`${info.animal}상`, `${info.mbti}`];
  const possibility_tags = [
    `${Math.ceil(info.result * 100)}%`,
    "가능성",
    "짝꿍",
  ];
  console.log(info);
  const goProposal = () => {
    handleModalFor(info.memberId, info.nickname);
    handleProposalModal();
  };

  const goReject = () => {
    handleModalFor(info.memberId, info.nickname);
    handleRefuseModal();
  };

  const navigate = useNavigate();

  const showAvatar = () => {
    switch (info.animal) {
      case "토끼":
        return (
          <CameraAvatar
            Avatar={
              <Custom_rabbit position={[0, 0, 0]} itemStatus={info.items} />
            }
          />
        );
      case "곰":
        return (
          <CameraAvatar
            Avatar={
              <Custom_bear position={[0, 0.3, 0]} itemStatus={info.items} />
            }
          />
        );
      case "여우":
        return (
          <CameraAvatar
            Avatar={<Custom_fox position={[0, 0, 0]} itemStatus={info.items} />}
          />
        );
      case "공룡":
        return (
          <CameraAvatar
            Avatar={
              <Custom_dino position={[0, 0, 0]} itemStatus={info.items} />
            }
          />
        );
      case "고양이":
        return (
          <CameraAvatar
            Avatar={<Custom_cat position={[0, 0, 0]} itemStatus={info.items} />}
          />
        );
      case "강아지":
        return (
          <CameraAvatar
            Avatar={<Custom_dog position={[0, 0, 0]} itemStatus={info.items} />}
          />
        );
    }
  };

  return (
    <div className="w-full bg-slate-500/50 rounded-2xl flex flex-col items-center gap-5 pt-10 pb-20">
      <div className="h-60">{showAvatar()}</div>
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
