import { faHeartCrack, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "react-query";
import { rejectProposal } from "../../api/myFriends";

type Props = {
  closeRefuseModal(): void;
  refuseMember: { id: number; name: string };
  refetch(): void;
};

export default function ModalRefuseProposal({
  closeRefuseModal,
  refuseMember,
  refetch,
}: Props) {
  const refuseFriend = useMutation((id: number) => rejectProposal(id), {
    onSuccess() {
      refetch();
    },
  });

  const refuse = () => {
    refuseFriend.mutate(refuseMember.id);
  };

  return (
    <div className="w-full px-5 pt-3 flex flex-col items-center">
      <div className="flex text-xl justify-between w-11/12 my-4 items-center">
        <FontAwesomeIcon icon={faHeartCrack} className="text-rose-500" />

        <p className="font-bold">친구 신청 거절</p>
        <FontAwesomeIcon
          icon={faXmark}
          className="cursor-pointer hover:text-red-600"
          onClick={closeRefuseModal}
        />
      </div>
      <div className="flex flex-col items-center my-4 font-bold text-lg">
        <p>
          <span className="text-purple-500">{refuseMember.name}</span>님의
        </p>
        <p>친구 신청을 거절하겠습니까?</p>
      </div>
      <div className="flex flex-col items-center text-gray-500 text-xs mb-4">
        <p>⁙ 친구 신청을 거절해도 닉네임 검색을 통해</p>
        <p>친구 신청을 보낼 수 있습니다.</p>
      </div>
      <button
        className="font-bold w-20 hover:text-blue-400"
        onClick={() => {
          refuse();
          closeRefuseModal();
        }}
      >
        예
      </button>
    </div>
  );
}
