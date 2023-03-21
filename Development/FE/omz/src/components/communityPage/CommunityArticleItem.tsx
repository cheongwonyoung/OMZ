import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

type Article = {
  [key: string]: any;
};

const CommunityArticleItem: React.FC<{ item: Article }> = (props) => {
  const navigate = useNavigate();
  const timestamp = new Date(props.item.registeredTime);
  const date = timestamp.toDateString();

  const handleClick = (boardId: number) => {
    navigate(`/community/${boardId}`);
  };

  return (
    <div
      className="w-full flex justify-center"
      onClick={() => handleClick(props.item.boardId)}
    >
      <div className="flex justify-center items-start w-10/12 relative py-2 my-1 bg-white/70 rounded-xl">
        {/* TODO: 이거는 나중ㅇ에 빼도 됨 무족건 프로필 사진 있을 거니까 */}
        {props.item.member.file ? (
          <img
            className="flex-grow-0 flex-shrink-0 w-1/12"
            src={props.item.member.file}
          />
        ) : (
          <img
            className="flex-grow-0 flex-shrink-0 w-1/12"
            src={images.mini_room_img}
          />
        )}

        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pl-2.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
              <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 py-1">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left">
                    {props.item.member.nickname}
                  </p>
                </div>
                {/* TODO: 이거는 내가 썼을 때만 나타나게 하기  */}
                <FontAwesomeIcon icon={faEllipsis} />
              </div>

              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-2.5 w-full">
                <p className="w-full flex-grow-0 flex-shrink-0 text-sm text-left break-normal">
                  {/* {props.item.content} */}
                </p>
              </div>
            </div>
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
          </div>
          <div className="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 gap-[90px] pl-2.5 pt-2.5">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
              <FontAwesomeIcon icon={faComment} />
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-[5px] pr-[15px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left">
                  {props.item.replyCnt}
                </p>
              </div>
              <FontAwesomeIcon icon={faHeart} />
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-[5px] pr-[15px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-lef">
                  {props.item.likeCnt}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 h-6 relative gap-2.5">
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
