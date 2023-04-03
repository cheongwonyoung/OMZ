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
    <div className="flex justify-center items-center flex-col w-11/12 gap-10">
      <p className="text-2xl font-bold">얼굴  사진을 업로드 해주세요</p>
      <div className="my-8">
        <ImageUploader file={file} onFile={onFile} shape={true} />
      </div>
      {file.length === 1 && (
        <FaceAnalyze getFaceResult={getFaceResult} plusPage={plusPage} />
      )}
    </div>
  );
}
