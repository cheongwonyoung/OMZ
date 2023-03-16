import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

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
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/newfriends">New Friends</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/miniroom">Mini Room</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/mypage">My Page</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/myfriends">My Friends</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/chatting/1">Chatting</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/community">Community</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
