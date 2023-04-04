import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const memberId = useRecoilValue(userStatus).id;

  return (
    <nav className="w-full hidden sm:block">
      <div className="w-full flex justify-center">
        <div className="w-11/12 justify-between md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src={images.main_logo} alt="" className="h-10" />
            </Link>

            <div className="md:hidden">
              <button
                className="outline-none focus:text-[#9492ff]"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FontAwesomeIcon icon={faXmark} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="hover:text-[#9492ff]">
                  <Link to="/" className="title">
                    Home
                  </Link>
                </li>
                <li className=" hover:text-[#9492ff]">
                  <Link to="/newfriends" className="title">
                    New Friends
                  </Link>
                </li>
                <li className=" hover:text-[#9492ff]">
                  <Link to={`miniroom/${memberId}`} className="title">
                    Mini Room
                  </Link>
                </li>
                <li className=" hover:text-[#9492ff]">
                  <Link to={`/mypage/${memberId}`} className="title">
                    My Page
                  </Link>
                </li>
                <li className=" hover:text-[#9492ff]">
                  <Link to="/myfriends" className="title">
                    My Friends
                  </Link>
                </li>
                <li className=" hover:text-[#9492ff]">
                  <Link to={`/chatting/${memberId}`} className="title">
                    Chatting
                  </Link>
                </li>
                <li className=" hover:text-[#9492ff]">
                  <Link to="/community" className="title">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/logout" className="title text-red-600">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
