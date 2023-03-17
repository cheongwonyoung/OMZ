import { useState } from "react";
import ImageUploader from "../common/ImageUploader";
import FaceAnalyze from "./FaceAnalyze";

type Props = {
  getFaceResult([]): void;
  plusPage(): void;
};

export default function StepImgUpload({ getFaceResult, plusPage }: Props) {
  const [file, setFile] = useState([]);
  const onFile = (f: []): void => {
    setFile(f);
  };
  return (
    <div className="w-100 flex flex-col items-center">
      <p className="text-xl font-bold mb-8">얼굴사진을 업로드 해주세요</p>
      <div className="my-8">
        <ImageUploader file={file} onFile={onFile} shape={true} />
      </div>
      {file.length === 1 && (
        <FaceAnalyze getFaceResult={getFaceResult} plusPage={plusPage} />
      )}
    </div>
  );
}
