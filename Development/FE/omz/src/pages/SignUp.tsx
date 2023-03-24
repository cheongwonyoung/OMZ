import { useState } from "react";
import StepEnd from "../components/signUp/StepEnd";
import StepFaceResult from "../components/signUp/StepFaceResult";
import StepImgUpload from "../components/signUp/StepImgUpload";
import StepLikeAnimal from "../components/signUp/StepLikeAnimal";
import StepMbti from "../components/signUp/StepMbti";

export default function SignUp() {
  // 회원가입 입력 단계
  const [page, setPage] = useState(0);
  const plusPage = () => {
    setPage((prev) => prev + 1);
  };
  // MBTI 정보
  const [pickedMbti, setPickedMbti] = useState("");
  const handlePickedMbti = (e: any) => {
    setPickedMbti(e.target.id);
  };
  // 관상 결과 정보
  const [animal, setAnimal] = useState("");
  type Result = {
    className: string;
    probability: number;
  }[];
  // 닉네임 정보
  const [nickname, setNickname] = useState("");
  const getNickname = (e: any) => {
    setNickname(e.target.value);
  };

  const getFaceResult = (result: Result) => {
    let maxAni = "";
    let maxVal = 0;
    for (const res of result) {
      if (maxVal < res.probability) {
        maxAni = res.className;
      }
    }
    setAnimal(maxAni);
  };
  const stepPage = () => {
    switch (page) {
      case 0:
        return (
          <StepMbti
            handlePickedMbti={handlePickedMbti}
            pickedMbti={pickedMbti}
            plusPage={plusPage}
          />
        );
      case 1:
        return (
          <StepImgUpload getFaceResult={getFaceResult} plusPage={plusPage} />
        );
      case 2:
        return (
          <StepFaceResult
            animal={animal}
            getNickname={getNickname}
            nickname={nickname}
            plusPage={plusPage}
          />
        );
      case 3:
        return <StepLikeAnimal plusPage={plusPage} />;
      case 4:
        return <StepEnd />;
    }
  };

  return <div className="pt-32 flex justify-center w-full">{stepPage()} </div>;
}
