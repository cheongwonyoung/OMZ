import { images } from "../assets/images";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
export default function MainPage() {
  const memberId = useRecoilValue(userStatus).id;
  console.log(memberId);

  return (
    <div className="flex flex-col justify-center items-center gap-[60px]">
      <div className="flex flex-col justify-center items-center mt-16">
        <img
          src={images.main_logo}
          className="w-[205px] h-[101px] object-cover"
        />
        <img
          src={images.sub_logo}
          className="w-[198px] h-[34px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-[50px]">
        <div className="flex justify-end items-end gap-[25px]">
          <Link
            to="/newfriends"
            className="flex flex-col justify-center items-center hover:scale-105"
          >
            <img className="w-[80%] mb-3" src={images.new_friends_img} />
            <p className="title text-base text-center font-bold">New Friends</p>
          </Link>
          <Link
            to={`miniroom/${memberId}`}
            className="flex flex-col justify-center items-center hover:scale-105"
          >
            <img src={images.mini_room_img} className="w-[80%] mb-3" />
            <p className="title text-base text-center font-bold">Mini Room</p>
          </Link>
          <Link
            to={`/mypage/${memberId}`}
            className="flex flex-col justify-center items-center hover:scale-105"
          >
            <img src={images.my_page_img} className="w-[80%] mb-3" />
            <p className="title text-base text-center font-bold">My Page</p>
          </Link>
        </div>
        <div className="flex justify-center items-end gap-[25px]">
          <Link
            to="/myfriends"
            className="flex flex-col justify-center items-center hover:scale-105"
          >
            <img
              src={images.my_friends_img}
              className="w-[80%] hover:scale-110 mb-3"
            />
            <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
              <p className="title text-base text-center font-bold">
                My Friends
              </p>
            </div>
          </Link>
          <Link
            to={`chatting/${memberId}`}
            className="flex flex-col justify-center items-center hover:scale-105"
          >
            <img
              src={images.chatting_img}
              className="w-[80%] hover:scale-110 mb-3"
            />
            <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
              <p className="title text-base text-center font-bold">Chatting</p>
            </div>
          </Link>
          <Link
            to="/community"
            className="flex flex-col justify-center items-center hover:scale-105"
          >
            <img
              src={images.community_img}
              className="w-[80%] hover:scale-110 mb-3 "
            />
            <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
              <div className="w-[72px] h-4">
                <p className="title text-base text-center font-bold">
                  Community
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
