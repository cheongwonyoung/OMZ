import { images } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

type Props = {
  onCommentSubmit: (comment: string) => void;
};

export default function CommunityCommentInput({ onCommentSubmit }: Props) {
  const commentInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredComment = commentInputRef.current!.value;

    if (enteredComment.trim().length === 0) {
      return;
    }
    onCommentSubmit(enteredComment);
    commentInputRef.current!.value = "";
  };

  return (
    <div className="w-full flex justify-center  bg-white border-r-0 border-b border-t border-l-0 border-black ">
      <div className="flex justify-between items-center w-11/12 relative gap-[15px] p-[15px] max-w-4xl">
        <img
          className="flex-grow-0 flex-shrink-0 w-10 h-10"
          src={images.mini_room_img}
        />

        <form
          onSubmit={submitHandler}
          className="w-full h-full flex justify-between items-center"
        >
          <input
            type="text"
            className="w-10/12 h-full focus:outline-none"
            placeholder="댓글을 입력하세요"
            maxLength={70}
            ref={commentInputRef}
          />
          <button>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </form>
      </div>
    </div>
  );
}
