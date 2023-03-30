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
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";

export default function CommunityCreatePage() {
  const navigate = useNavigate();
  // 게시글 내용
  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  // 이미지 파일
  // image업로더 보여지는 유무
  const [showUploader, setShowUploader] = useState(false);
  const [file, setFile] = useState([]);
  const onFile = (f: []): void => {
    setFile(f);
  };

  const memberId = useRecoilValue(userStatus).id;
  // 게시글 POST, 생성이 되었으면 메인 커뮤니티로 보내줌
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
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const profile = useRecoilValue(userStatus).profile_img;
  return (
    <div className="flex flex-col items-center justify-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <div className="mb-5"></div>
      <form action="" className="w-10/12 pb-10" onSubmit={submitHandler}>
        <div className="w-full flex justify-between items-start gap-2">
          <img
            src={IMAGE_ROOT + profile}
            alt=""
            className="w-14 h-14 rounded-full border"
          />
          <textarea
            maxLength={140}
            placeholder="무슨 일이 일어나고 있나요?"
            ref={contentInputRef}
            className="bg-inherit focus:outline-none w-full h-[200px] resize-none pl-5"
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
              className="text-2xl cursor-pointer hover:opacity-30"
            />
          </div>
          <button>
            <FontAwesomeIcon
              icon={faCheck}
              className="text-2xl cursor-pointer hover:opacity-30"
            />
          </button>
        </div>
      </form>
      <div className="pb-20"></div>
      <CommunityNavbar />
    </div>
  );
}
