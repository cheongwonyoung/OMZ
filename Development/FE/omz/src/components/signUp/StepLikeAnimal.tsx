import { useState } from "react";
import NextBtn from "./NextBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getUserInfo } from "../../api/kakaoLogin";
import { useRecoilState, useRecoilValue } from "recoil";
import { userStatus, userToken } from "../../recoil/userAtom";

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

  const navigate = useNavigate();
  const [userState, setUserState] = useRecoilState(userStatus);
  const access_token = useRecoilValue(userToken).access_token;
  const retryGetUserInfo = useMutation((token: string) => getUserInfo(token), {
    onSuccess(data) {
      setUserState({
        ...userState,
        id: data.data.memberId,
        nickname: data.data.nickname,
        profile_img: data.data.file,
      });
      navigate("end");
    },
  });
  const getUserInfoRetry = () => {
    retryGetUserInfo.mutate(access_token);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p className="text-xl mb-8 font-bold">동물상 좋아하는 정도</p>
      <div className="flex flex-col  w-8/12 gap-2">
        {animalList.map((item) => (
          <div className="grid grid-cols-4 gap-4 items-center" key={item}>
            <div className="flex flex-col items-center">
              <img
                src={images[imgsrc(item)]}
                alt=""
                className="w-full rounded-full object-cover aspect-square"
              />
              <p>{item}</p>
            </div>
            <div className="col-span-2 h-1/2">
              <input
                className="w-full appearance-none h-1 shadow-md bg-purple-300"
                id={animalEng[item]}
                value={animalPrefer[animalEng[item]]}
                type="range"
                min={0}
                max={1}
                step={0.1}
                onChange={(e) => changePrefer(e)}
              />
            </div>
            <div className="h-1/2">
              <p className="text-end ">
                {animalPrefer[animalEng[item]] * 100}%
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <NextBtn
          comment="다음 스텝으로"
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          logic={() => {
            signUpSubmit();
            getUserInfoRetry();
          }}
        />
      </div>
    </div>
  );
}
