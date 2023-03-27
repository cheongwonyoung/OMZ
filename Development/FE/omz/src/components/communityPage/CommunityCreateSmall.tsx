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
  // 이미지 버튼 클릭하면 이미지 업로더 띄울 수 있게 함
  const [showUploader, setShowUploader] = useState(false);
  // 내용 업로드
  const articleInputRef = useRef<HTMLInputElement>(null);
  // 이미지 업로드
  const [file, setFile] = useState([]);
  const onFile = (f: []): void => {
    setFile(f);
  };

  // Post 하고 값들 다 없는 걸로 바꿔주기
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
    <>
      {/* TODO: img 방식 나중에 바꾸기  */}
      <form onSubmit={submitHandler} className="w-[90%]">
        <div className="w-full flex flex-col items-center">
          <div className="flex justify-between items-center w-11/12 relative border-black rounded-sm gap-2 mb-5">
            <img
              src={images.profile_img}
              alt=""
              className="w-[3rem] h-[3rem] object-cover rounded-full"
            />
            <div className="w-full flex justify-between items-center">
              <input
                type="text"
                className="w-10/12 focus:outline-none bg-transparent ml-5"
                placeholder="무슨 일이 일어나고 있나요?"
                maxLength={140}
                ref={articleInputRef}
              />
              <FontAwesomeIcon
                icon={faImage}
                className="text-xl mx-5"
                onClick={() => {
                  if (showUploader) {
                    setShowUploader(false);
                  } else {
                    setShowUploader(true);
                  }
                }}
              />
              <button>
                <FontAwesomeIcon icon={faCheck} className="text-xl" />
              </button>
            </div>
          </div>
          {showUploader && (
            <ImageUploader file={file} onFile={onFile} shape={false} />
          )}
        </div>
      </form>
    </>
  );
}
