import { images } from "../assets/images";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { div } from "@tensorflow/tfjs";
export default function MainPage() {
  const memberId = useRecoilValue(userStatus).id;

  const logOut = () => {
    const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
    const LOGOUT_REDIRECT_URI = import.meta.env.VITE_LOGOUT_URI;
    const KAKAO_LOGOUT_URI = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
    window.location.href = KAKAO_LOGOUT_URI;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center mt-10">
        <img
          src={images.main_logo}
          className="w-[205px] h-[101px] object-cover"
        />
        <img
          src={images.sub_logo}
          className="w-[198px] h-[34px] object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-11/12 max-w-lg flex justify-around items-end gap-4">
          <Link
            to="/newfriends"
            className="flex flex-col justify-center w-3/12 max-w-md items-center hover:scale-105"
          >
            <img className="w-[80%] h-[50%] mb-3" src={images.main_new_friends_img} />
            <div className="flex justify-center items-center relative w-fit px-3 py-1 rounded-full bg-gradient-to-b from-[#7bdfff]/[0.88] to-[#fffee5]/0 border border-black min-w-[120px]">
              <p className="title text-base text-black text-center">
                New Friend
              </p>
            </div>
          </Link>
          <Link
            to={`/miniroom/${memberId}`}
            className="flex flex-col justify-center w-3/12 max-w-md items-center hover:scale-105"
          >
            <img src={images.main_mini_room_img} className="w-[80%] mb-3" />
            <div className="flex justify-center items-center relative w-fit px-3 py-1 rounded-full bg-gradient-to-b from-[#7bdfff]/[0.88] to-[#fffee5]/0 border border-black min-w-[120px]">
              <p className="title text-base text-black text-center">
                Mini Room
              </p>
            </div>
          </Link>
          <Link
            to={`/mypage/${memberId}`}
            className="flex flex-col justify-center w-3/12 max-w-md items-center hover:scale-105"
          >
            <img src={images.main_my_page_img} className="w-[80%] mb-3" />
            <div className="flex justify-center items-center relative w-fit px-3 py-1 rounded-full bg-gradient-to-b from-[#7bdfff]/[0.88] to-[#fffee5]/0 border border-black min-w-[120px]">
              <p className="title text-base text-black text-center">My Page</p>
            </div>
          </Link>
        </div>
        <div className="w-11/12 max-w-lg flex justify-around items-end gap-4">
          <Link
            to="/myfriends"
            className="flex flex-col justify-center w-3/12 max-w-md items-center hover:scale-105"
          >
            <img
              src={images.main_my_friends_img}
              className="w-[80%] hover:scale-110 mb-3"
            />

            <div className="flex justify-center items-center relative w-fit px-3 py-1 rounded-full bg-gradient-to-b from-[#7bdfff]/[0.88] to-[#fffee5]/0 border border-black min-w-[120px]">
              <p className="title text-base text-black text-center">
                My Friends
              </p>
            </div>
          </Link>
          <Link
            to={`/chatting/${memberId}`}
            className="flex flex-col justify-center w-3/12 max-w-md items-center hover:scale-105"
          >
            <img
              src={images.main_chatting_img}
              className="w-[80%] hover:scale-110 mb-3"
            />

            <div className="flex justify-center items-center relative w-fit px-3 py-1 rounded-full bg-gradient-to-b from-[#7bdfff]/[0.88] to-[#fffee5]/0 border border-black min-w-[120px]">
              <p className="title text-base text-black text-center">Chatting</p>
            </div>
          </Link>
          <Link
            to="/community"
            className="flex flex-col justify-center w-3/12 max-w-md items-center hover:scale-105"
          >
            <img
              src={images.main_community_img}
              className="w-[80%] hover:scale-110 mb-3 "
            />
            <div className="flex justify-center items-center relative w-fit px-3 py-1 rounded-full bg-gradient-to-b from-[#7bdfff]/[0.88] to-[#fffee5]/0 border border-black min-w-[120px]">
              <p className="title text-base text-black text-center">
                Community
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div onClick={logOut} className="cursor-pointer mt-10">
        <div className="flex justify-center items-center gap-2.5 px-10 py-1.5 rounded-full bg-white/50 border border-black hover:bg-black/20">
          <p className="title text-base">LOGOUT</p>
          <FontAwesomeIcon icon={faPowerOff} />
        </div>
      </div>
    </div>
  );
}
