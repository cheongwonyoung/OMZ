import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faHeart,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

export default function CommunityNavbar() {
  const memberId: number = useRecoilValue(userStatus).id;
  return (
    <>
      <div className="bg-black fixed bottom-0 overflow-visible w-full shadow-inner p-4 flex flex-row rounded-tl-[10px] rounded-tr-[10px]">
        <div className="flex flex-1 justify-center text-xs font-bold text-center">
          <NavLink
            to="/community/"
            className={({ isActive }) =>
              !isActive ? "text-[#5B5685]" : "text-white"
            }
          >
            <FontAwesomeIcon icon={faHouse} className="text-2xl" />
            <span className="title block text-xs pt-1">Home</span>
          </NavLink>
        </div>
        <div className="flex flex-1 justify-center text-xs font-bold text-center">
          <NavLink
            to="/community/search"
            className={({ isActive }) =>
              !isActive ? "text-[#5B5685]" : "text-white"
            }
          >
            <FontAwesomeIcon icon={faSearch} className="text-2xl" />
            <span className="title block text-xs pt-1">Explore</span>
          </NavLink>
        </div>
        <div className="flex flex-1 justify-center items-center font-bold text-center">
          <div className="flex justify-center items-center w-[50px] h-[50px] rounded-[10px] bg-white">
            <div
              className="flex justify-center items-center relative w-[45px] h-[45px] rounded-[10px] bg-white border border-black"
              id="btn"
            >
              <NavLink
                to="/community/create"
                className={({ isActive }) =>
                  isActive ? "text-[#5B5685]" : "text-black"
                }
              >
                <FontAwesomeIcon icon={faPlus} className="text-2xl" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-center text-xs font-bold text-center">
          <NavLink
            to="/community/like"
            className={({ isActive }) =>
              !isActive ? "text-[#5B5685]" : "text-white"
            }
          >
            <FontAwesomeIcon icon={faHeart} className="text-2xl" />
            <span className="title block text-xs pt-1">Like</span>
          </NavLink>
        </div>
        <div className="flex flex-1 justify-center text-xs font-bold text-center">
          <NavLink
            to={`/community/mypage/${memberId}`}
            className={({ isActive }) =>
              !isActive ? "text-[#5B5685]" : "text-white"
            }
          >
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
            <span className="title block text-xs pt-1">MyPage</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}
