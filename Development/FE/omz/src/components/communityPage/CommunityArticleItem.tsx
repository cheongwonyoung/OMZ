import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faComment,
  faHeart,
  faPencil,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import DeleteCommentModal from "../common/DeletetModal";
import { useMutation } from "react-query";
import { updateArticle } from "../../api/community";
import {
  deleteArticle,
  likeArticle,
  dislikeArticle,
} from "../../api/community";
import { imageUrl } from "../../api";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

// import CommunityCommentModal from "./CommunityCommentModal";

type Article = {
  [key: string]: any;
};

type Props = {
  item: Article;
  refetch: () => Promise<any>;
};

export default function CommunityArticleItem({ item, refetch }: Props) {
  const navigate = useNavigate();

  // 삭제 눌렀을 때 띄울 모달 state
  const [showModal, setShowModal] = useState(false);
  // 댓글창 눌렀을 때 띄울 모달
  // const [commentModal, setCommentModal] = useState(false);

  // 수정 눌렀을 때 form 으로 바뀌는 state
  const [showUpdate, setShowUpdate] = useState(false);
  // 수정된 article content
  const articleContent = useRef<HTMLTextAreaElement>(item.content);

  // 시간 원하는 걸로 바꾸기
  const timestamp = new Date(item.registeredTime);
  const date = timestamp.toDateString();

  // TODO: imageUrl은 이렇게 하기 (이건 커뮤니티 내 사진)
  const imageUrlRoot = imageUrl + item.file;
  const boardId = item.boardId;
  const file = item.file;

  const memberId = useRecoilValue(userStatus).id;
  // 클릭하면 Detail 페이지로 이동시킴
  const handleClick = (boardId: number) => {
    navigate(`/community/${boardId}`, {
      state: { boardId: boardId },
    });
  };

  // Community 내의 마이 페이지로 이동시킴
  const goToMyPage = (memberId: number) => {
    navigate(`/community/mypage/${memberId}`);
  };

  // 게시글 수정
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredArticleContent = articleContent.current!.value;

    if (enteredArticleContent.trim().length == 0) {
      return;
    }
    handleArticleUpdate(enteredArticleContent);
  };

  const upDateArticle = useMutation(
    (board: {
      boardId: number;
      content: string;
      file: File;
      memberId: number;
    }) => updateArticle(board),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleArticleUpdate = (content: string) => {
    upDateArticle.mutate({ boardId, content: content, file, memberId });
  };

  // 게시글 삭제
  const deleteArticleItem = useMutation(
    (boardId: number) => deleteArticle(boardId),
    {
      onSuccess: () => {
        setShowModal(false);
        refetch();
      },
    }
  );

  // 게시글 좋아요
  const loveArticle = useMutation(
    (board: { memberId: number; boardId: number }) =>
      likeArticle(board.memberId, board.boardId),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const goLoveArticle = async () => {
    loveArticle.mutate({ memberId, boardId });
  };

  // 게시글 좋아요 취소
  const disloveArticle = useMutation(
    (board: { memberId: number; boardId: number }) =>
      dislikeArticle(board.memberId, board.boardId),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const goDisloveArticle = async () => {
    disloveArticle.mutate({ memberId, boardId });
  };

  // 삭제 모달 관련
  function closeModalHandler() {
    setShowModal(false);
  }

  function confirmModalHandler(boardId: number) {
    deleteArticleItem.mutate(boardId);
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex flex-col pb-5 px-2 items-center">
          <div
            className="bg-white/70 flex justify-center rounded-xl cursor-pointer hover:scale-105 hover:bg-black/20 p-2"
            onClick={() => handleClick(item.boardId)}
          >
            <div className="w-[90%] h-[90%]">
              <div className="flex justify-between">
                <div className="flex justify-start gap-5 items-center">
                  {/* TODO: 나중에 member 나오면 찐 프사로 바꿔주기  */}
                  <img
                    className="flex-grow-0 flex-shrink-0 w-[3rem] h-[3rem] hover:scale-105"
                    src={images.profile_img}
                    onClick={(e) => {
                      e?.stopPropagation();
                      goToMyPage(item.member.memberId);
                    }}
                  />

                  <p
                    className="flex-grow-0 flex-shrink-0 text-ml cursor-pointer hover:text-white font-bold"
                    onClick={(e) => {
                      e?.stopPropagation();
                      goToMyPage(item.member.memberId);
                    }}
                  >
                    {item.member.nickname}
                  </p>
                </div>
                {memberId === item?.member.memberId && (
                  <div className="flex justify-start gap-5 items-center">
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="p-1 cursor-pointer hover:text-white text-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (showUpdate) {
                          setShowUpdate(false);
                        } else {
                          setShowUpdate(true);
                        }
                      }}
                    />

                    <FontAwesomeIcon
                      icon={faXmark}
                      className="p-1 cursor-pointer hover:text-white text-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(true);
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                {item.file ? (
                  <img
                    className="flex-grow-0 flex-shrink-0 w-full rounded-[10px]"
                    src={imageUrlRoot}
                  />
                ) : (
                  <img
                    className="flex-grow-0 flex-shrink-0 w-full rounded-[10px]"
                    src={images.main_logo}
                  />
                )}
                {/* 수정할 때 나오는 창  */}
                {showUpdate ? (
                  <form
                    onSubmit={submitHandler}
                    className="w-full flex flex-col justify-center items-end"
                  >
                    <textarea
                      onClick={(e) => e.stopPropagation()}
                      defaultValue={item.content}
                      ref={articleContent}
                      maxLength={140}
                      rows={6}
                      className="w-full focus:outline-none bg-white/50 resize-none"
                    ></textarea>
                    <button
                      className="cursor-pointer hover:text-white p-3 border-black border-2 rounded-xl mb-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      수정하기
                    </button>
                  </form>
                ) : (
                  <p className="w-full flex-grow-0 flex-shrink-0 text-ml text-left break-normal pb-2">
                    {item.content}
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                <div className="flex w-3/12 justify-start gap-3">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="cursor-pointer hover:text-white text-lg"
                  />
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold">
                    {item.replyCnt}
                  </p>
                  {!item.ilikeBoard ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="hover:text-white text-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        goLoveArticle();
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-red-600 hover:scale-110 text-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        goDisloveArticle();
                      }}
                    />
                  )}

                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold">
                    {item.likeCnt}
                  </p>
                </div>
                <div>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold">
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
      </div>
    </>
  );
}
