import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteCommentModal from "./DeleteCommentModal";
import { useMutation } from "react-query";
import {
  deleteArticle,
  likeArticle,
  dislikeArticle,
} from "../../api/community";

type Article = {
  [key: string]: any;
};

type Props = {
  item: Article;
  refetch: () => Promise<any>;
};

export default function CommunityArticleItem({ item, refetch }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();
  const timestamp = new Date(item.registeredTime);
  const date = timestamp.toDateString();
  const memberId = 1;
  const boardId = item.boardId;

  // Detail 페이지로 이동시킴
  const handleClick = (boardId: number) => {
    navigate(`/community/${boardId}`, {
      state: { boardId: boardId, memberId: 1 },
    });
  };

  // Community 내의 마이 페이지로 이동시킴
  const goToMyPage = (memberId: number) => {
    navigate(`/community/mypage/${memberId}`);
  };

  const deleteArticleItem = useMutation(
    (boardId: number) => deleteArticle(boardId),
    {
      onSuccess: () => {
        setShowModal(false);
        refetch();
      },
    }
  );

  // const loveArticle = useMutation(() => likeArticle(boardId, memberId), {
  //   onSuccess: () => {
  //     refetch();
  //     console.log('됨!')
  //   },
  // });

  function closeModalHandler() {
    setShowModal(false);
  }

  function confirmModalHandler(boardId: number) {
    deleteArticleItem.mutate(boardId);
  }
  return (
    <div className="w-full px-10 flex flex-col pb-3">
      <div
        className="bg-white/70 rounded-xl cursor-pointer hover:scale-105 hover:bg-black/20"
        onClick={() => handleClick(item.boardId)}
      >
        <div className="w-[90%] h-[90%]">
          <div className="flex justify-between items-center">
            {item.member.file ? (
              <img
                className="flex-grow-0 flex-shrink-0 w-15 h-15 hover:scale-105"
                src={item.member.file}
                onClick={(e) => {
                  e?.stopPropagation();
                  goToMyPage(item.member.memberId);
                }}
              />
            ) : (
              // 나중에 지우기
              <img
                className="flex-grow-0 flex-shrink-0 w-15 h-15 hover:scale=105"
                src={images.mini_room_img}
                onClick={(e) => {
                  e?.stopPropagation();
                  goToMyPage(item.member.memberId);
                }}
              />
            )}
            <p
              className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left cursor-pointer hover:text-white"
              onClick={(e) => {
                e?.stopPropagation();
                goToMyPage(item.member.memberId);
              }}
            >
              {item.member.nickname}
            </p>
            {/* TODO: 이거는 내가 썼을 때만 나타나게 하기  */}
            {/* <FontAwesomeIcon
              icon={faEllipsis}
              className="cursor-pointer hover:text-white"
              onClick={(e) => {
                e?.stopPropagation();
                setShowModal(true);
              }} 
            /> */}
            <button
              className="p-1 border-black border-2 cursor-pointer hover:bg-black/20"
              onClick={(e) => e.stopPropagation()}
            >
              수정
            </button>
            <button
              className="p-1 border-black border-2 cursor-pointer hover:bg-black/20"
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
            >
              삭제
            </button>
          </div>
          <div>
            {item.file ? (
              <img
                className="flex-grow-0 flex-shrink-0 w-[281px] h-[138px] rounded-[10px]"
                src={item.file}
              />
            ) : (
              <img
                className="flex-grow-0 flex-shrink-0 w-[281px] h-[138px] rounded-[10px]"
                src={images.main_logo}
              />
            )}
            <p className="w-full flex-grow-0 flex-shrink-0 text-sm text-left break-normal">
              {item.content}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex w-3/12 justify-between">
              <FontAwesomeIcon icon={faComment} />
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left">
                {item.replyCnt}
              </p>
              {!isLike ? (
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-white hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLike(false);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-red-600 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLike(true);
                  }}
                />
              )}

              <p className="flex-grow-0 flex-shrink-0 text-sm text-lef">
                {item.likeCnt}
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
      {showModal && (
        <DeleteCommentModal
          onCancel={closeModalHandler}
          onConfirm={() => confirmModalHandler(item.boardId)}
        />
      )}
    </div>
  );
}
