import { useState } from "react";
import { images } from "../assets/images";
import ModalBlackBg from "../components/common/ModalBlackBg";
import TitleBar from "../components/common/TitleBar";
import FriendsList from "../components/myFriends/FriendsList";
import ModalDeleteFriend from "../components/myFriends/ModalDeleteFriend";
import ProposalList from "../components/myFriends/ProposalList";

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

  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/" title="My Friends" icon={images.new_friends_img} />
      {isDeleteModal && (
        <ModalBlackBg
          modal={
            <ModalDeleteFriend
              closeModal={closeModal}
              deleteMember={deleteMember}
            />
          }
        />
      )}
      {/* <ModalBlackBg modal={<ModalDeleteFriend />} /> */}
      <div className="w-11/12 mt-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isToggle}
            onChange={() => setIsToggle((prev) => !prev)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <p className="ml-4 font-bold">{subTitle()}</p>
        </label>
        {isToggle ? (
          <ProposalList />
        ) : (
          <FriendsList handleDeleteMember={handleDeleteMember} />
        )}
      </div>
    </div>
  );
}
