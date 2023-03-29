import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const memberId = useRecoilValue(userStatus).id;

  return (
    <nav className="w-full bg-white shadow hidden sm:block">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src={images.main_logo} alt="" className="h-10" />
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="hover:text-blue-600">
                <Link to="/" className="title">Home</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link to="/newfriends" className="title">New Friends</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link to="/miniroom" className="title">Mini Room</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link to={`/mypage/${memberId}`} className="title">My Page</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link to="/myfriends" className="title">My Friends</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link to="/chatting/1" className="title">Chatting</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link to="/community" className="title">Community</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
