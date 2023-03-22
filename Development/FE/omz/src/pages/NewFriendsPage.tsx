import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FriendsRecommend from "../components/newFriends/FriendsRecommend";

export default function NewFriendsPage() {
  return (
    <div className="flex flex-col items-center h-screen">
      <TitleBar
        icon={images.my_friends_img}
        title="My Friends"
        backBtn={true}
      />
      <div className="w-11/12 border border-solid rounded-lg border-black h-12 bg-white flex px-2 mt-4">
        <div className="h-full w-12 flex justify-center items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          className="h-full w-full outline-none"
          type="search"
          placeholder="Search"
        />
      </div>
      <FriendsRecommend />
    </div>
  );
}
