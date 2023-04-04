import NextBtn from "./NextBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useState } from "react";
import { div } from "@tensorflow/tfjs";

interface AnimalPrefer {
  [key: string]: number;
}

type Props = {
  changePrefer(e: any): void;
  animalPrefer: AnimalPrefer;
  signUpSubmit(): void;
};

export default function StepLikeAnimal({
  changePrefer,
  animalPrefer,
  signUpSubmit,
}: Props) {
  const animalList = ["강아지", "고양이", "곰", "여우", "토끼", "공룡"];

  const animalEng: { [key: string]: string } = {
    강아지: "dog",
    고양이: "cat",
    곰: "bear",
    여우: "fox",
    토끼: "rabbit",
    공룡: "dino",
  };

  const imgsrc = (i: string): string => {
    switch (i) {
      case "강아지":
        return "dog_img";
      case "고양이":
        return "cat_img";
      case "여우":
        return "fox_img";
      case "토끼":
        return "rabbit_img";
      case "공룡":
        return "dino_img";
      case "곰":
        return "bear_img";
      default:
        return "";
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const lodingBtn = () => {
    if (isLoading)
      return (
        <div className="flex gap-8 flex-col items-center">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 mr-2 text-gray-300 animate-spin dark:text-gray-600 fill-black"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <p className="text-xl font-bold">
            쉿, 회원가입 중<FontAwesomeIcon icon={faHeart} />
          </p>
        </div>
      );
    else
      return (
        <NextBtn
          comment="다음 스텝으로"
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          logic={() => {
            signUpSubmit();
            setIsLoading(true);
          }}
        />
      );
  };

  return (
    <div className="max-w-3xl flex flex-col justify-center items-center w-11/12 gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-bold">좋아하는 동물상</p>
        <p className="text-base">
          내가 좋아하는 동물상을 퍼센트로 표현해주세요
        </p>
      </div>
      <div className="flex flex-col w-11/12 gap-2">
        {animalList.map((item) => (
          <div className="flex gap-4 items-center" key={item}>
            <div className="w-[30%] flex flex-col h-full items-center">
              <img
                src={images[imgsrc(item)]}
                alt=""
                className="w-full rounded-full object-cover aspect-square"
              />
              <p className="text-lg">{item}</p>
            </div>
            <input
              className="w-full bg-white accent-black"
              id={animalEng[item]}
              value={animalPrefer[animalEng[item]]}
              type="range"
              min={0}
              max={1}
              step={0.1}
              onChange={(e) => changePrefer(e)}
            />
            <p className="min-w-[30px] text-xl font-bold text-center">
              {animalPrefer[animalEng[item]] * 100}%
            </p>
          </div>
        ))}
      </div>
      {lodingBtn()}
    </div>
  );
}
