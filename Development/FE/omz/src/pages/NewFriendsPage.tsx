import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FriendsRecommend from "../components/newFriends/FriendsRecommend";
import ModalBlackBg from "../components/common/ModalBlackBg";
import FriendRefuseModal from "../components/newFriends/FriendRefuseModal";
import { useEffect, useState } from "react";
import FriendsProposalModal from "../components/newFriends/FriendsProposalModal";
import FriendSearchItems from "../components/newFriends/FriendSearchItems";
import FriendSearchList from "../components/newFriends/FriendSearchList";
export default function NewFriendsPage() {
  const [isRefuse, setIsRefuse] = useState(false);
  const handleRefuseModal = () => {
    setIsRefuse((prev) => !prev);
  };

  const [isProposal, setIsProposal] = useState(false);
  const handleProposalModal = () => {
    setIsProposal((prev) => !prev);
  };

  const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    search === "" ? setSearchActive(false) : setSearchActive(true);
  }, [search]);

  return (
    <div className="flex flex-col items-center w-full">
      {isRefuse && (
        <ModalBlackBg
          modal={<FriendRefuseModal handleRefuseModal={handleRefuseModal} />}
        />
      )}
      {isProposal && (
        <ModalBlackBg
          modal={
            <FriendsProposalModal handleProposalModal={handleProposalModal} />
          }
        />
      )}

      <TitleBar icon={images.my_friends_img} title="New Friends" goto="/" />
      <div className="w-11/12 border border-solid rounded-lg border-black h-12 bg-white flex px-2 mt-4">
        <div className="h-full w-12 flex justify-center items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          className="h-full w-full outline-none"
          type="search"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
          value={search}
        />
      </div>
      {searchActive ? (
        <FriendSearchList />
      ) : (
        <FriendsRecommend
          handleRefuseModal={handleRefuseModal}
          handleProposalModal={handleProposalModal}
        />
      )}
    </div>
  );
}
