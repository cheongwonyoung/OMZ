import { images } from "../../assets/images";
import { useState } from "react";
import DeleteCommentModal from "./DeleteCommentModal";
import { deleteReply, updateReply } from "../../api/community";
import { useMutation } from "react-query";

type Comment = {
  [key: string]: any;
};

type Props = {
  item: Comment;
  refetch: () => Promise<any>;
};

export default function CommunityComment({ item, refetch }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const timestamp = new Date(item.registeredTime);
  const date = timestamp.toDateString();

  const deleteComment = useMutation((replyId: number) => deleteReply(replyId), {
    onSuccess: () => {
      setShowModal(false);
      refetch();
    },
  });

  // const updateComment = useMutation(
  //   (replyId: number, comment: { boardId: number; content: string; memberId: number }) =>
  //     updateReply(replyId, comment)
  //   {
  //     onSuccess: () => {
  //       refetch();
  //     },
  //   }
  // );

  // const handleCommentUpdate = (comment: string) => {
  //   updateComment.mutate(replyId, {boardId, content:comment, memberId})
  // };

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
              <div>
                <div>
                  <input type="text" />
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
