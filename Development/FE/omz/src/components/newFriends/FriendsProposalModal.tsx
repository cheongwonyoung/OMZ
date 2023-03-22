import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack, faXmark } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";

type Props = {
  handleProposalModal(): void;
};

export default function FriendsProposalModal({ handleProposalModal }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex text-xl justify-between w-11/12 my-4 items-center">
        <img src={images.new_friends_img} alt="" className="h-10" />
        <p className="font-bold">New Friends</p>
        <FontAwesomeIcon
          icon={faXmark}
          className="w-10"
          onClick={handleProposalModal}
        />
      </div>
      <div className="w-full">
        <p className="font-bold mb-2 ml-4">To. 최윾태</p>
        <textarea
          className="border-4 border-solid rounded-xl w-full focus:outline-none resize-none h-32 p-2"
          maxLength={30}
          placeholder="친구 신청 메시지를 작성해주세요. (최대 30자)"
        ></textarea>
      </div>
      <button className="font-bold mt-2 shadow-lg w-16 h-8 rounded-xl">
        전송
      </button>
    </div>
  );
}
