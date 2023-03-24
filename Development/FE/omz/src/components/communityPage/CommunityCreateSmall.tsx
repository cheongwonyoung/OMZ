import { images } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import ImageUploader from "../common/ImageUploader";
import { useState } from "react";

type Props = {
  onArticleSubmit: (article: string, image: File) => void;
};

export default function CommunityCreateSmall({ onArticleSubmit }: Props) {
  const [showUploader, setShowUploader] = useState(false);
  const articleInputRef = useRef<HTMLInputElement>(null);
  // 이미지 업로드
  const [file, setFile] = useState([]);
  const onFile = (f: []): void => {
    setFile(f);
  };

  // const imageInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredArticle = articleInputRef.current!.value;

    if (enteredArticle.trim().length === 0) {
      return;
    }

    onArticleSubmit(enteredArticle, file[0]);
    articleInputRef.current!.value = "";
    setFile([]);
  };

  return (
    <div>
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

          <FontAwesomeIcon
            icon={faImage}
            onClick={() => {
              if (showUploader) {
                setShowUploader(false);
              } else {
                setShowUploader(true);
              }
            }}
          />
          <button>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          {showUploader && (
            <div className="flex flex-col">
              <ImageUploader file={file} onFile={onFile} shape={false} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
