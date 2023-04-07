import { images } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import ImageUploader from "../common/ImageUploader";
import { useState } from "react";
import { userStatus } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.warning("글을 작성해주세요!", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    onArticleSubmit(enteredArticle, file[0]);
    articleInputRef.current!.value = "";
    setFile([]);
    setShowUploader(false);
  };

  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const profile = useRecoilValue(userStatus).profile_img;
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="w-full flex flex-col justify-center items-center"
      >
        <ToastContainer />
        <div className="w-full flex justify-center">
          <div className="w-11/12 max-w-3xl flex items-center justify-center">
            <div className="flex justify-between items-center w-11/12 relative border-black rounded-sm gap-2">
              <img
                src={IMAGE_ROOT + profile}
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
                  className="text-xl mx-5 cursor-pointer hover:opacity-30"
                  onClick={() => {
                    if (showUploader) {
                      setShowUploader(false);
                    } else {
                      setShowUploader(true);
                    }
                  }}
                />
                <button>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xl hover:opacity-30"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {showUploader && (
          <ImageUploader file={file} onFile={onFile} shape={false} />
        )}
      </form>
    </>
  );
}
