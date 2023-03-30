import { images } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

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
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const profile = useRecoilValue(userStatus).profile_img;
  return (
    <div className="w-full flex justify-between items-center gap-[15px] px-[30px] p-[15px] max-w-4xl border-b border-t border-black bg-white">
        <img
          className="w-10 h-10 rounded-full border"
          src={IMAGE_ROOT + profile}
        />

        <form
          onSubmit={submitHandler}
          className="w-full h-full flex justify-between items-center"
        >
          <input
            type="text"
            className="w-10/12 h-full focus:outline-none "
            placeholder="댓글을 입력하세요"
            maxLength={70}
            ref={commentInputRef}
          />
          <button>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </form>
    </div>
  );
}
