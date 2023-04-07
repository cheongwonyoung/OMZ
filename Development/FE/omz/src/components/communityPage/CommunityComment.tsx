import { images } from "../../assets/images";
import { useState, useRef } from "react";
import DeleteCommentModal from "../common/DeletetModal";
import { deleteReply, updateReply } from "../../api/community";
import { useMutation } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Comment = {
  [key: string]: any;
};

type Props = {
  item: Comment;
  refetch: () => Promise<any>;
  boardIdNum: number;
};

export default function CommunityComment({ item, refetch, boardIdNum }: Props) {
  const navigate = useNavigate();
  // 삭제 모달 띄울 state
  const [showModal, setShowModal] = useState(false);
  // update 로 바꿔줄 state
  const [showUpdate, setShowUpdate] = useState(false);
  // update할 내용 담기
  const commentContent = useRef<HTMLTextAreaElement>(item.content);
  // 시간 원하는 형식으로 바꿔주기
  const date = new Date(item.registeredTime);

  // 댓글 삭제하기
  const deleteComment = useMutation((replyId: number) => deleteReply(replyId), {
    onSuccess: () => {
      setShowModal(false);
      toast.success("댓글이 삭제되었습니다.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
      refetch();
    },
  });

  const boardId = boardIdNum;
  const replyId = item.replyId;
  const memberId = useRecoilValue(userStatus).id;

  // 댓글 수정하기
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredUpdateComment = commentContent.current!.value;

    if (enteredUpdateComment.trim().length === 0) {
      return;
    }

    handleCommentUpdate(enteredUpdateComment);
  };

  const updateComment = useMutation(
    (reply: { boardId: number; content: string; memberId: number }) =>
      updateReply(replyId, reply),
    {
      onSuccess: () => {
        toast.success("댓글이 수정되었습니다.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT,
        });
        refetch();
      },
    }
  );

  const handleCommentUpdate = (comment: string) => {
    updateComment.mutate({ boardId, content: comment, memberId });
  };

  // 삭제 관련
  function closeModalHandler() {
    setShowModal(false);
  }

  function confirmModalHandler(replyId: number) {
    deleteComment.mutate(replyId);
  }

  // Community 내의 마이 페이지로 이동시킴
  const goToMyPage = (memberId: number) => {
    navigate(`/community/mypage/${memberId}`);
  };

  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;

  return (
    <div className="w-full flex justify-center mt-1">
      <ToastContainer />
      <div className="w-11/12 m-1 max-w-3xl border-b border-black pb-1">
        <div className="flex w-full justify-between items-start gap-3">
          {/* TODO: 나중에 member 나오면 찐 프사로 바꿔주기  */}
          <img
            className="w-[3rem] h-[3rem] cursor-pointer hover:scale-110 rounded-full border"
            src={IMAGE_ROOT + item.member.file}
            onClick={() => {
              goToMyPage(item.member.memberId);
            }}
          />

          <div className="flex w-full flex-col justify-center items-end">
            <div className="flex w-full justify-between items-center">
              <p
                className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#555a64] cursor-pointer hover:text-white"
                onClick={() => goToMyPage(item.member.memberId)}
              >
                {item.member.nickname}
              </p>
              <p className="text-xs text-right text-[#555a64]">
                {moment(date).format("YYYY년 MM월 DD일 HH:mm")}
              </p>
            </div>

            {showUpdate ? (
              <div className="w-full">
                <form action="" onSubmit={submitHandler} className="w-full">
                  <textarea
                    defaultValue={item.content}
                    ref={commentContent}
                    maxLength={70}
                    className="w-full focus:outline-none bg-white/50 resize-none"
                  />
                  <div className="flex justify-end gap-5">
                    {/* 누르면 update 반영되게 !! */}
                    <button className="cursor-pointer hover:text-blue-400 ">
                      <FontAwesomeIcon icon={faCheck} className="text-base" />
                    </button>
                    <div>
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => setShowUpdate(false)}
                        className="cursor-pointer hover:text-[#FF0076] text-base"
                      />
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="w-full">
                <div>
                  <p className="text-left">{item.content}</p>
                </div>
                {memberId === item.member.memberId && (
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setShowUpdate(true)}
                      className="cursor-pointer hover:text-blue-400 text-sm"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => setShowModal(true)}
                      className="cursor-pointer hover:text-[#FF0076] text-sm"
                    >
                      삭제
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <DeleteCommentModal
          onCancel={closeModalHandler}
          onConfirm={() => confirmModalHandler(item.replyId)}
        />
      )}
    </div>
  );
}
