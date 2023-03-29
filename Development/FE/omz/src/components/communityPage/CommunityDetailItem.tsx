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
import moment from "moment"
// import CommunityCommentModal from "./CommunityCommentModal";

type Article = {
  [key: string]: any;
};

type Props = {
  item: Article;
  refetch: () => Promise<any>;
};

export default function CommunityDetailItem({ item, refetch }: Props) {
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
  const date = new Date(item.registeredTime);

  // TODO: imageUrl은 이렇게 하기 (이건 커뮤니티 내 사진)
  const imageUrlRoot = imageUrl + item.file;
  const boardId = item.boardId;
  const file = item.file;

  const memberId = useRecoilValue(userStatus).id;

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
    setShowUpdate(false);
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
        console.log("board");
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
      <div className="w-10/12 flex justify-center m-5 max-w-4xl">
        <div className="w-full bg-white flex flex-col justify-center rounded-xl p-5">
          <div className="flex justify-start gap-5 items-center">
            {/* TODO: 나중에 member 나오면 찐 프사로 바꿔주기  */}
            <img
              className="flex-grow-0 flex-shrink-0 w-[3rem] h-[3rem]"
              src={images.profile_img}
              onClick={(e) => {
                e?.stopPropagation();
                goToMyPage(item.member.memberId);
              }}
            />
            <div className="flex flex-col">
              <p
                className="flex-grow-0 flex-shrink-0 text-ml cursor-pointer hover:text-white font-bold"
                onClick={(e) => {
                  e?.stopPropagation();
                  goToMyPage(item.member.memberId);
                }}
              >
                {item.member.nickname}
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm ">
              {moment(date).format("YYYY년 MM월 DD일 HH:mm")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {item.file ? (
              <img className="rounded-[10px] my-5" src={imageUrlRoot} />
            ) : (
              <></>
            )}

            {showUpdate ? (
              <form onSubmit={submitHandler} className="w-full">
                <textarea
                  onClick={(e) => e.stopPropagation()}
                  defaultValue={item.content}
                  ref={articleContent}
                  maxLength={140}
                  className="w-full focus:outline-none target my-5 px-5 py-3 bg-black/10 rounded-lg"
                ></textarea>
                <div className="flex justify-end">
                  <button
                    className="cursor-pointer hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    수정
                  </button>
                  <button
                    className="cursor-pointer hover:text-white ml-5"
                    onClick={() => setShowUpdate(false)}
                  >
                    취소
                  </button>
                </div>
              </form>
            ) : (
              <p className="w-full text-ml text-center break-normal my-5">
                {item.content}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center mx-5">
            {!showUpdate && (
              <div className="flex w-3/12 justify-start gap-3">
                <FontAwesomeIcon
                  icon={faComment}
                  className="cursor-pointer hover:text-white text-lg"
                />
                <p className="text-sm font-bold">
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
                <p className="text-sm font-bold">
                  {item.likeCnt}
                </p>
              </div>
            )}
            <div>
              {memberId === item?.member.memberId && !showUpdate && (
                <div className="flex justify-start gap-5 items-center">
                  <p
                    className="p-1 cursor-pointer hover:text-white text-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (showUpdate) {
                        setShowUpdate(false);
                      } else {
                        setShowUpdate(true);
                      }
                    }}
                  >
                    수정
                  </p>
                  <p
                    className="p-1 cursor-pointer hover:text-white text-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowModal(true);
                    }}
                  >
                    삭제
                  </p>
                </div>
              )}
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
    </>
  );
}
