import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import ImageUploader from "../components/common/ImageUploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { images } from "../assets/images";

export default function CommunityCreatePage() {
  const [showUploader, setShowUploader] = useState(false);

  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  const [file, setFile] = useState([]);
  const onFile = (f: []): void => {
    setFile(f);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredContent = contentInputRef.current!.value;

    if (enteredContent.trim().length === 0) {
      return;
    }
    const communityData = {
      content: enteredContent,
      image: file[0],
    };
    console.log(communityData);
  };

  return (
    <div>
      <CommunityBanner />
      <img src={images.main_logo} alt="" className="ml-10 w-10 h-10" />
      <form onSubmit={submitHandler}>
        <div className="w-full flex flex-col justify-center items-center">
          <textarea
            className="w-[80%] bg-inherit m-3"
            maxLength={145}
            placeholder="나는 지금..."
            ref={contentInputRef}
          />
          {showUploader && (
            <ImageUploader file={file} onFile={onFile} shape={false} />
          )}
        </div>

        <div className="flex justify-end items-center gap-3 mr-5">
          <div
            onClick={() => {
              setShowUploader(true);
            }}
          >
            <FontAwesomeIcon icon={faImage} />
          </div>
          <button>
            <FontAwesomeIcon icon={faCheck} />{" "}
          </button>
        </div>
      </form>

      <CommunityNavbar />
    </div>
  );
}
