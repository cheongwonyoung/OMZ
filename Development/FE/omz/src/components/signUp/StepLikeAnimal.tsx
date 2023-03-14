import { useState } from "react";
import NextBtn from "./NextBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
type Props = {
  plusPage(): void;
};

export default function StepLikeAnimal({ plusPage }: Props) {
  const animalList = ["강아지", "고양이", "곰", "여우", "토끼", "공룡"];
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

  return (
    <div className="flex flex-col justify-center items-center">
      동물상 좋아하는 정도
      <div className="flex flex-col  w-full">
        {animalList.map((item) => (
          <div className="flex justify-between">
            <p>{item}</p>
            <input
              id={item}
              value={animalPrefer[item]}
              type="range"
              min={0}
              max={100}
              step={5}
              onChange={(e) => changePrefer(e)}
            />
            <p>{animalPrefer[item]}%</p>
          </div>
        ))}
      </div>
      <NextBtn
        comment="다음 스텝으로"
        icon={<FontAwesomeIcon icon={faArrowRight} />}
        logic={plusPage}
      />
    </div>
  );
}
