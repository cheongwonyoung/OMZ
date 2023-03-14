import { useState } from "react";
import ImageUploader from "../common/ImageUploader";
import FaceAnalyze from "./FaceAnalyze";

export default function StepImgUpload() {
  const [file, setFile] = useState([]);
  const onFile = (f: []): void => {
    setFile(f);
  };
  return (
    <div className="w-100">
      얼굴사진을 업로드 해주세요
      <br />
      <br />
      <br />
      <ImageUploader file={file} onFile={onFile} shape={false} />
      <FaceAnalyze />
    </div>
  );
}
