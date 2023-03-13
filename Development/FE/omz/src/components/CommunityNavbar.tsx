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
            <FontAwesomeIcon icon={faHouse} className="text-white text-2xl" />
            <FontAwesomeIcon icon={faSearch} className="text-white text-2xl" />
          </div>
          <div className="flex justify-evenly items-center flex-grow-0 flex-shrink-0 gap-8">
            <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
            <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
          </div>
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px] absolute left-[170px] top-0 gap-[5px] p-[5px] rounded-[10px] bg-white">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-[10px] bg-white border border-black">
            <FontAwesomeIcon icon={faPlus} className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

// <div>
//   <li className="text-gray-600 hover:text-blue-600">
//     <Link to="/community/like">like</Link>
//   </li>
//   <li className="text-gray-600 hover:text-blue-600">
//     <Link to="/community/mypage">mypage</Link>
//   </li>
// </div>
