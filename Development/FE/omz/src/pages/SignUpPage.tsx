import { useState } from "react";
import StepEnd from "../components/signUp/StepEnd";
import StepFaceResult from "../components/signUp/StepFaceResult";
import StepImgUpload from "../components/signUp/StepImgUpload";
import StepLikeAnimal from "../components/signUp/StepLikeAnimal";
import StepMbti from "../components/signUp/StepMbti";
import html2canvas from "html2canvas";

export default function SignUpPage() {
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

  const [faceResult, setFaceResult] = useState<Result>();

  const getFaceResult = (result: Result) => {
    let maxAni = "";
    let maxVal = 0;
    setFaceResult(result);
    for (const res of result) {
      if (maxVal < res.probability) {
        maxAni = res.className;
      }
    }
    setAnimal(maxAni);
  };

  // 선호하는 동물 상
  interface AnimalPrefer {
    [key: string]: number;
  }

  const [animalPrefer, setAnimalPrefer] = useState<AnimalPrefer>({
    강아지: 0,
    고양이: 0,
    곰: 0,
    여우: 0,
    토끼: 0,
    공룡: 0,
  });

  const changePrefer = (e: any) => {
    const name = e.target.id;
    const value = e.target.value;
    setAnimalPrefer({ ...animalPrefer, [name]: value });
    console.log(animalPrefer);
  };

  const [profileImg, setProfileImg] = useState<File>();
  const screenShot = () => {
    const target = document.getElementById("capture");
    if (target !== null) {
      html2canvas(target).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob !== null) {
            const myfile = new File([blob], "name.png", { type: "image/png" });
            setProfileImg(myfile);
          }
        });
      });
    }
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
            // screenShot={screenShot}
          />
        );
      case 3:
        return (
          <StepLikeAnimal
            plusPage={plusPage}
            changePrefer={changePrefer}
            animalPrefer={animalPrefer}
          />
        );
      case 4:
        return <StepEnd />;
    }
  };

  return (
    <div className="pt-32 flex justify-center w-full">
      {stepPage()}
      <button
        onClick={() => {
          console.log(profileImg);
          console.log(animalPrefer);
          console.log(nickname);
          console.log(faceResult);
        }}
      >
        gogogo
      </button>
    </div>
  );
}
