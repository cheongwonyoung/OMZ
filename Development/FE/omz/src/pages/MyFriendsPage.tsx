import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getMyFriendsList, getProposalList } from "../api/myFriends";
import { images } from "../assets/images";
import ModalBlackBg from "../components/common/ModalBlackBg";
import TitleBar from "../components/common/TitleBar";
import FriendsList from "../components/myFriends/FriendsList";
import ModalDeleteFriend from "../components/myFriends/ModalDeleteFriend";
import ModalRefuseProposal from "../components/myFriends/ModalRefuseProposal";
import ProposalList from "../components/myFriends/ProposalList";
import { userStatus } from "../recoil/userAtom";
export default function MyFriendsPage() {
  const [isToggle, setIsToggle] = useState(false);
  const subTitle = () => {
    return isToggle ? "친구 신청" : "친구 목록";
  };

  const [deleteMember, setDeleteMember] = useState<{
    name: string;
    id: number;
  }>({ name: "", id: 0 });

  const handleDeleteMember = (name: string, id: number) => {
    setDeleteMember({ name, id });
    setIsDeleteModal(true);
  };

  const closeModal = () => {
    setIsDeleteModal(false);
  };

  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const [refuseMember, setRefuseMember] = useState<{
    id: number;
    name: string;
  }>({ id: 0, name: "" });
  const [isRefuseModal, setIsRefusModal] = useState(false);
  const handleRefuseModal = (id: number, name: string) => {
    setRefuseMember({ id, name });
    setIsRefusModal((prev) => !prev);
  };
  const closeRefuseModal = () => {
    setIsRefusModal(false);
  };

  const memberId = useRecoilValue(userStatus).id;
  const { data: proposals, refetch } = useQuery("proposalList", () =>
    getProposalList(memberId)
  );

  const { data: friends, refetch: refetchFriend } = useQuery("friendlist", () =>
    getMyFriendsList(memberId)
  );

  return (
    <div className="w-full flex flex-col items-center">
      <TitleBar goto="/main" title="My Friend" icon={images.my_friends_img} />
      {isDeleteModal && (
        <ModalBlackBg
          closeModal={closeModal}
          modal={
            <ModalDeleteFriend
              closeModal={closeModal}
              deleteMember={deleteMember}
              refetch={refetchFriend}
            />
          }
        />
      )}
      {isRefuseModal && (
        <ModalBlackBg
          closeModal={closeRefuseModal}
          modal={
            <ModalRefuseProposal
              closeRefuseModal={closeRefuseModal}
              refuseMember={refuseMember}
              refetch={refetch}
            />
          }
        />
      )}
      <div className="w-11/12 max-w-3xl mt-4 flex flex-col justify-center">
        <label className="relative inline-flex items-center cursor-pointer my-3">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isToggle}
            onChange={() => setIsToggle((prev) => !prev)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <p className="ml-4 font-bold">{subTitle()}</p>
        </label>
        {isToggle ? (
          <ProposalList
            handleRefuseModal={handleRefuseModal}
            proposals={proposals}
            refetch={refetch}
            refetchFriend={refetchFriend}
          />
        ) : (
          <FriendsList
            handleDeleteMember={handleDeleteMember}
            friends={friends}
          />
        )}
      </div>
    </div>
  );
}
