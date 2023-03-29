import { faHeartCrack, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { removeFriend } from "../../api/myFriends";
import { userStatus } from "../../recoil/userAtom";

type Props = {
  closeModal(): void;
  deleteMember: { name: string; id: number };
  refetch(): void;
};

export default function ModalDeleteFriend({
  closeModal,
  deleteMember,
  refetch,
}: Props) {
  const fromMember = useRecoilValue(userStatus).id;

  const deleteFriend = useMutation(
    () => removeFriend(deleteMember.id, fromMember),
    {
      onSuccess(data, variables, context) {
        console.log(data);
      },
    }
  );

  const finishFriend = () => {
    deleteFriend.mutate();
    closeModal();
    refetch();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-xl justify-between w-11/12 my-4 items-center">
        <FontAwesomeIcon icon={faHeartCrack} className="text-rose-500 w-10" />

        <p className="font-bold">친구삭제</p>
        <FontAwesomeIcon icon={faXmark} onClick={closeModal} className="w-10" />
      </div>
      <div className="flex flex-col items-center my-4 font-bold text-lg">
        <p>
          <span className="text-purple-500">{deleteMember.name}</span>님을
        </p>
        <p>친구목록에서 삭제하겠습니까?</p>
      </div>
      <div className="flex flex-col items-center text-gray-500 text-xs mb-4">
        <p>⁙ 친구 삭제를 하면</p>
        <p>다시 친구 신청이 불가능해집니다.</p>
      </div>
      <button className="font-bold" onClick={finishFriend}>
        예
      </button>
    </div>
  );
}
