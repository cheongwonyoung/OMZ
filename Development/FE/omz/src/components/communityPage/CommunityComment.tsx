import { images } from "../../assets/images";
import { useState, useRef } from "react";
import DeleteCommentModal from "./DeleteCommentModal";
import { deleteReply, updateReply } from "../../api/community";
import { useMutation } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

type Comment = {
  [key: string]: any;
};

type Props = {
  item: Comment;
  refetch: () => Promise<any>;
  boardIdNum: number;
};

export default function CommunityComment({ item, refetch, boardIdNum }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const commentContent = useRef<HTMLTextAreaElement>(item.content);
  const timestamp = new Date(item.registeredTime);
  const date = timestamp.toDateString();

  const deleteComment = useMutation((replyId: number) => deleteReply(replyId), {
    onSuccess: () => {
      setShowModal(false);
      refetch();
    },
  });

  const boardId = boardIdNum;
  const replyId = item.replyId;
  const memberId = 1;

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
        refetch();
        console.log("하 이 롱 ");
      },
    }
  );

  const handleCommentUpdate = (comment: string) => {
    updateComment.mutate({ boardId, content: comment, memberId });
  };

  function closeModalHandler() {
    setShowModal(false);
  }

  function confirmModalHandler(replyId: number) {
    deleteComment.mutate(replyId);
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 m-3">
        <div className="flex w-full justify-between items-start gap-3">
          {item.member.file ? (
            <img src={item.member.file} alt="" className="w-10 h-10" />
          ) : (
            <img src={images.main_logo} alt="" className="w-10 h-10" />
          )}

          <div className="flex w-full flex-col justify-center items-end">
            <div className="flex w-full justify-between items-center">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#555a64]">
                {item.member.nickname}
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#555a64]">
                {date}
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
                  <div className="flex justify-end gap-2">
                    {/* 누르면 update 반영되게 !! */}
                    <button className="cursor-pointer hover:text-[#FF0076]">
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={() => setShowUpdate(false)}
                      className="cursor-pointer hover:text-[#FDFFA7]"
                    />
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <div>
                  <p>{item.content}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowModal(true)}
                    className="cursor-pointer hover:text-[#FF0076]"
                  >
                    삭제
                  </button>
                  <button
                    onClick={() => setShowUpdate(true)}
                    className="cursor-pointer hover:text-[#FDFFA7]"
                  >
                    수정
                  </button>
                </div>
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
