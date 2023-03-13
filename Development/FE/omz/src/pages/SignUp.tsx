import { useState } from "react";
import StepImgUpload from "../components/signUp/StepImgUpload";
import StepMbti from "../components/signUp/StepMbti";

export default function SignUp() {
  // 회원가입 정보
  const [page, setPage] = useState(0);
  const plusPage = () => {
    setPage((prev) => prev + 1);
  };
  // MBTI 정보
  const [pickedMbti, setPickedMbti] = useState("");
  const handlePickedMbti = (e: any) => {
    setPickedMbti(e.target.id);
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
        return <StepImgUpload />;
    }
  };

  return <div>{stepPage()}</div>;
}
