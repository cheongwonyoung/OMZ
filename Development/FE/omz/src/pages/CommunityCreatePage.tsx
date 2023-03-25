import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import ImageUploader from "../components/common/ImageUploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import { useMutation } from "react-query";
import { createArticle } from "../api/community";
import { useNavigate } from "react-router-dom";

export default function CommunityCreatePage() {
  const [showUploader, setShowUploader] = useState(false);
  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const onFile = (f: []): void => {
    setFile(f);
  };
  const memberId = 1;

  const addArticle = useMutation(
    (article: { content: string; file: File; memberId: number }) =>
      createArticle(article),
    {
      onSuccess: () => {
        navigate("/community");
      },
    }
  );

  const ArticleSubmit = (content: string, file: File) => {
    addArticle.mutate({ content: content, file: file, memberId });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredContent = contentInputRef.current!.value;

    if (enteredContent.trim().length === 0) {
      return;
    }
    ArticleSubmit(enteredContent, file[0]);
    contentInputRef.current!.value = "";
    setFile([]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <div className="mb-5"></div>
      <form action="" className="w-11/12 pb-10" onSubmit={submitHandler}>
        <div className="w-full flex justify-between items-start gap-2">
          <img src={images.profile_img} alt="" className="w-15 h-15" />
          <textarea
            maxLength={140}
            placeholder="아무말이나 일단 써"
            ref={contentInputRef}
            className="bg-inherit focus:outline-none w-full h-[200px] resize-none"
          />
        </div>
        <div className="flex justify-center mb-2">
          {showUploader && (
            <ImageUploader file={file} onFile={onFile} shape={false} />
          )}
        </div>

        <div className="flex justify-end items-center gap-5">
          <div
            onClick={() => {
              if (showUploader) {
                setShowUploader(false);
              } else {
                setShowUploader(true);
              }
            }}
          >
            <FontAwesomeIcon
              icon={faImage}
              className="text-2xl cursor-pointer hover:text-white"
            />
          </div>
          <button>
            <FontAwesomeIcon
              icon={faCheck}
              className="text-2xl cursor-pointer hover:text-white"
            />
          </button>
        </div>
      </form>
      <div className="pb-20"></div>
      <CommunityNavbar />
    </div>
  );
}
