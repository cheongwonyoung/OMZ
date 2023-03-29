import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "react-query";
import { acceptProposal } from "../../api/myFriends";

type Props = {
  handleRefuseModal(id: number, name: string): void;
  id: number;
  name: string;
  refetch(): void;
};

export default function ProposalBottom({
  handleRefuseModal,
  id,
  name,
  refetch,
}: Props) {
  const acceptFriend = useMutation((id: number) => acceptProposal(id), {
    onSuccess() {
      refetch;
    },
  });
  const accept = () => {
    acceptFriend.mutate(id);
  };

  return (
    <div className="flex w-full mt-2 gap-2 text-xs justify-evenly">
      <div className="flex items-center gap-1" onClick={accept}>
        <FontAwesomeIcon icon={faHeart} className="text-red-400" />
        <p>수락</p>
      </div>
      <div
        className="flex items-center gap-1"
        onClick={() => handleRefuseModal(id, name)}
      >
        <FontAwesomeIcon icon={faHeartCrack} className="text-blue-400" />
        <p>거절</p>
      </div>
    </div>
  );
}
