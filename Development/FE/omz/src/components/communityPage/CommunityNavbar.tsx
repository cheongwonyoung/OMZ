import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faHeart,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function CommunityNavbar() {
  return (
    <>
      <div className="w-full sm:hidden fixed left-0 bottom-0">
        <div className="w-full h-[55px] flex justify-around items-center bg-black">
          <div className="flex justify-evenly items-center flex-grow-0 flex-shrink-0 gap-8">
            <Link to="/community">
              <FontAwesomeIcon icon={faHouse} className="text-white text-2xl" />
            </Link>
            <Link to="/community/search">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-white text-2xl"
              />
            </Link>
          </div>
          <div className="flex justify-evenly items-center flex-grow-0 flex-shrink-0 gap-8">
            <Link to="/community/like">
              <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
            </Link>
            <Link to="/community/mypage">
              <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px] absolute left-[170px] top-0 gap-[5px] p-[5px] rounded-[10px] bg-white">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-[10px] bg-white border border-black">
            <Link to="/community/create">
              <FontAwesomeIcon icon={faPlus} className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
