import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const CommunityArticleItem: React.FC<{ content: string }> = (props) => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("/community/1");
  };
  return (
    <div className="w-full flex justify-center" onClick={handleClick}>
      <div className="flex justify-center items-start w-10/12 relative py-2 my-1 bg-white/70 rounded-xl">
        <img
          className="flex-grow-0 flex-shrink-0 w-1/12"
          src={images.mini_room_img}
        />
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pl-2.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
              <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 py-1">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left">
                    닉네임
                  </p>
                </div>
                {/* TODO: 이거는 내가 썼을 때만 나타나게 하기  */}
                <FontAwesomeIcon icon={faEllipsis} />
              </div>

              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 py-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                  {props.content}
                </p>
              </div>
            </div>
            <img
              className="flex-grow-0 flex-shrink-0 w-[281px] h-[138px] rounded-[10px]"
              src={images.main_logo}
            />
          </div>
          <div className="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 gap-[90px] pl-2.5 pt-2.5">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
              <FontAwesomeIcon icon={faComment} />
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-[5px] pr-[15px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left">
                  123
                </p>
              </div>
              <FontAwesomeIcon icon={faHeart} />
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-[5px] pr-[15px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-lef">12</p>
              </div>
            </div>
            <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 h-6 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-lef">
                Timestamp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityArticleItem;
