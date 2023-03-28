import { useEffect, useState } from "react";
import StepEnd from "../components/signUp/StepEnd";
import StepFaceResult from "../components/signUp/StepFaceResult";
import StepImgUpload from "../components/signUp/StepImgUpload";
import StepLikeAnimal from "../components/signUp/StepLikeAnimal";
import StepMbti from "../components/signUp/StepMbti";
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";
import { useRecoilValue } from "recoil";
import { userToken } from "../recoil/userAtom";
import { useMutation, useQuery } from "react-query";
import { getUserInfo, signUp } from "../api/kakaoLogin";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

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
    dog: 0,
    cat: 0,
    bear: 0,
    fox: 0,
    rabbit: 0,
    dino: 0,
  });

  const changePrefer = (e: any) => {
    const name = e.target.id;
    const value = e.target.value;
    setAnimalPrefer({ ...animalPrefer, [name]: value });
    console.log(animalPrefer);
  };

  const [profileImg, setProfileImg] = useState<any>();
  const screenShot = () => {
    const target = document.getElementById("capture");
    if (target !== null) {
      html2canvas(target).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob !== null) {
            const myfile = new File([blob], `${uuidv4()}.png`, {
              type: "image/png",
            });
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
            screenShot={screenShot}
          />
        );
      case 3:
        return (
          <StepLikeAnimal
            changePrefer={changePrefer}
            animalPrefer={animalPrefer}
            signUpSubmit={signUpSubmit}
          />
        );
    }
  };
  const token: string = useRecoilValue(userToken).access_token;

  const signUpSubmit = () => {
    const formData = new FormData();
    const member = { mbti: pickedMbti, nickname };
    formData.append("member", JSON.stringify(member));
    const preferFace = animalPrefer;
    formData.append("preferFace", JSON.stringify(preferFace));

    const face: { [key: string]: number | string } = {};
    if (faceResult !== undefined) {
      for (const result of faceResult) {
        switch (result.className) {
          case "강아지":
            face["dog"] = result.probability;
          case "고양이":
            face["cat"] = result.probability;
          case "곰":
            face["bear"] = result.probability;
          case "공룡":
            face["dino"] = result.probability;
          case "여우":
            face["fox"] = result.probability;
          case "토끼":
            face["rabbit"] = result.probability;
        }
      }
    }
    formData.append("face", JSON.stringify(face));
    formData.append("file", profileImg);
    console.log(profileImg);
    console.log(face);

    goSignUp.mutate({ formData, tok: token });
  };

  const getInfo = useMutation((token: string) => getUserInfo(token), {
    onSuccess(data) {
      console.log(data);
      data.data === false ? navigate("/signup") : navigate("/");
    },
  });

  const goSignUp = useMutation(
    (inp: { formData: any; tok: string }) => signUp(inp.formData, inp.tok),
    {
      onSuccess() {
        getInfo.mutate(token);
      },
    }
  );

  return <div className="pt-24 flex justify-center w-full">{stepPage()}</div>;
}
