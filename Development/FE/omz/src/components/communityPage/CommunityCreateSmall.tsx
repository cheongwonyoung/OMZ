import { images } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
type Props = {
  onArticleSubmit: (article: string, image: File) => void;
};
export default function CommunityCreateSmall({ onArticleSubmit }: Props) {
  const articleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredArticle = articleInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;

    if (enteredArticle.trim().length === 0) {
      return;
    }

    onArticleSubmit(enteredArticle, enteredImage);
    articleInputRef.current!.value = "";
    imageInputRef.current!.value = "";
  };

  return (
    <div className="flex justify-between items-center w-11/12 relative gap-[15px] p-3 mt-3 border-black border-2">
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
          className="w-10/12 h-full focus:outline-none bg-transparent"
          placeholder="나는 지금..."
          maxLength={140}
          ref={articleInputRef}
        />

        <FontAwesomeIcon icon={faImage} />
        <button>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </form>
    </div>
  );
}
