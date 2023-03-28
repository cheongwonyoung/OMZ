import { images } from "../assets/images";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";

export default function MainPage() {
  const memberId = useRecoilValue(userStatus).id;
  return (
    <div className="flex flex-col justify-center items-center gap-[60px]">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative">
        <img
          src={images.main_logo}
          className="flex-grow-0 flex-shrink-0 w-[205px] h-[101px] object-cover"
        />
        <img
          src={images.sub_logo}
          className="flex-grow-0 flex-shrink-0 w-[198px] h-[34px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[50px]">
        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 gap-[25px]">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
            <Link to="/newfriends">
              <img
                className="flex-grow-0 flex-shrink-0 w-[60px] h-20 hover:scale-110"
                src={images.new_friends_img}
              />
              <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
                <p className="absolute left-2.5 top-[92px] text-sm text-left hover:text-blue-500">
                  New Friends
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
            <Link to={`miniroom/${memberId}`}>
              <img
                src={images.mini_room_img}
                className="flex-grow-0 flex-shrink-0 w-20 h-20 object-cover hover:scale-110"
              />
              <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
                <p className="absolute left-[15px] top-[92px] text-sm text-left hover:text-blue-500">
                  Mini Room
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
            <Link to={`/mypage/${memberId}`}>
              <img
                src={images.my_page_img}
                className="flex-grow-0 flex-shrink-0 w-[75.08px] h-20 object-cover hover:scale-110"
              />
              <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
                <p className="absolute left-5 top-[92px] text-sm text-left hover:text-blue-500">
                  My Page
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-end flex-grow-0 flex-shrink-0 gap-[25px]">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
            <Link to="/myfriends">
              <img
                src={images.my_friends_img}
                className="flex-grow-0 flex-shrink-0 w-[76.08px] h-20 object-cover hover:scale-110"
              />
              <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
                <p className="absolute left-3.5 top-[92px] text-sm text-left hover:text-blue-500">
                  My Friends
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
            <Link to={`chatting/${memberId}`}>
              <img
                src={images.chatting_img}
                className="flex-grow-0 flex-shrink-0 w-[75.41px] h-20 object-cover hover:scale-110"
              />
              <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
                <p className="absolute left-[22px] top-[97.43px] text-sm text-left hover:text-blue-500">
                  Chatting
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
            <Link to="/community">
              <img
                src={images.community_img}
                className="flex-grow-0 flex-shrink-0 w-20 h-20 object-cover hover:scale-110"
              />
              <div className="flex-grow-0 flex-shrink-0 w-[95px] h-[30px]">
                <div className="w-[72px] h-4">
                  <p className="absolute left-3 top-[92px] text-sm text-left hover:text-blue-500">
                    Community
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
