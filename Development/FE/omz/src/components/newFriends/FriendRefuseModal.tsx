import { faHeartCrack, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "react-query";
import { rejectProposal } from "../../api/myFriends";

type Props = {
  handleRefuseModal(): void;
};
export default function FriendRefuseModal({ handleRefuseModal }: Props) {
  const refuseFriend = useMutation((id: number) => rejectProposal(id));

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-xl justify-between w-11/12 my-4 items-center">
        <FontAwesomeIcon icon={faHeartCrack} className="text-rose-500 w-10" />
        <p className="font-bold">친구거절</p>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleRefuseModal}
          className="w-10"
        />
      </div>
      <div className="flex flex-col items-center my-4 font-bold text-lg">
        <p>
          <span className="text-purple-500">최유태</span>님을
        </p>
        <p>더이상 추천받지 않습니다.</p>
      </div>
      <div className="flex flex-col items-center text-gray-500 text-xs mb-4">
        <p>⁙ 추천 친구에는 나타나지 않지만,</p>
        <p>검색 결과에는 나타날 수 있습니다.</p>
      </div>
      <button className="font-bold">예</button>
    </div>
  );
}
