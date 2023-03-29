import { faHeartCrack, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "react-query";
import { rejectProposal } from "../../api/myFriends";

type Props = {
  closeRefuseModal(): void;
  refuseMember: { id: number; name: string };
};

export default function ModalRefuseProposal({
  closeRefuseModal,
  refuseMember,
}: Props) {
  console.log(refuseMember);

  const refuseFriend = useMutation((id: number) => rejectProposal(id), {
    onSuccess() {
      console.log("리패치해야함");
    },
  });

  const refuse = () => {
    refuseFriend.mutate(refuseMember.id);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-xl justify-between w-11/12 my-4 items-center">
        <FontAwesomeIcon icon={faHeartCrack} className="text-rose-500 w-10" />

        <p className="font-bold">친구 신청 거절</p>
        <FontAwesomeIcon
          icon={faXmark}
          className="w-10"
          onClick={closeRefuseModal}
        />
      </div>
      <div className="flex flex-col items-center my-4 font-bold text-lg">
        <p>
          <span className="text-purple-500">{refuseMember.name}</span>님의
        </p>
        <p>친구신청을 거절하겠습니까?</p>
      </div>
      <div className="flex flex-col items-center text-gray-500 text-xs mb-4">
        <p>⁙ 친구 신청 거절을 하면</p>
        <p>다시 친구 신청이 불가능해집니다.</p>
      </div>
      <button
        className="font-bold"
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
