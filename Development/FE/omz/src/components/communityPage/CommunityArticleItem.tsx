import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Article = {
  [key: string]: any;
};

const CommunityArticleItem: React.FC<{ item: Article }> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const timestamp = new Date(props.item.registeredTime);
  const date = timestamp.toDateString();

  const handleClick = (boardId: number) => {
    navigate(`/community/${boardId}`, {
      state: { boardId: boardId, memberId: 1 },
    });
  };

  const goToMyPage = (memberId: number) => {
    navigate(`/community/mypage/${memberId}`);
  };

  return (
    <div className="w-full px-10 flex flex-col pb-3">
      <div
        className="bg-white/70 rounded-xl cursor-pointer hover:scale-105 hover:bg-black/20"
        onClick={() => handleClick(props.item.boardId)}
      >
        <div className="w-[90%] h-[90%]">
          <div className="flex justify-between items-center">
            {props.item.member.file ? (
              <img
                className="flex-grow-0 flex-shrink-0 w-10 h-10"
                src={props.item.member.file}
              />
            ) : (
              <img
                className="flex-grow-0 flex-shrink-0 w-1/12"
                src={images.mini_room_img}
              />
            )}
            <p
              className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left cursor-pointer hover:text-white"
              onClick={(e) => {
                e?.stopPropagation();
                goToMyPage(props.item.member.memberId);
              }}
            >
              {props.item.member.nickname}
            </p>
            {/* TODO: 이거는 내가 썼을 때만 나타나게 하기  */}
            <FontAwesomeIcon
              icon={faEllipsis}
              className="cursor-pointer hover:text-white"
              onClick={(e) => {
                e?.stopPropagation();
              }}
            />
          </div>
          <div>
            {props.item.file ? (
              <img
                className="flex-grow-0 flex-shrink-0 w-[281px] h-[138px] rounded-[10px]"
                src={props.item.file}
              />
            ) : (
              <img
                className="flex-grow-0 flex-shrink-0 w-[281px] h-[138px] rounded-[10px]"
                src={images.main_logo}
              />
            )}
            <p className="w-full flex-grow-0 flex-shrink-0 text-sm text-left break-normal">
              {props.item.content}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex w-3/12 justify-between">
              <FontAwesomeIcon icon={faComment} />
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left">
                {props.item.replyCnt}
              </p>
              <FontAwesomeIcon icon={faHeart} />
              <p className="flex-grow-0 flex-shrink-0 text-sm text-lef">
                {props.item.likeCnt}
              </p>
            </div>
            <div>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-lef">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityArticleItem;
