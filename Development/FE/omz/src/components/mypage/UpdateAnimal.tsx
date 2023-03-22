import { images } from "../../assets/images";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function UpdateAnimal() {
  const animalList = ["강아지", "고양이", "곰", "여우", "토끼", "공룡"];

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
    <div>
      {animalList.map((item) => (
        <div key={uuidv4()} className="grid grid-cols-4 gap-4 items-center">
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
              id={item}
              value={animalPrefer[item]}
              type="range"
              min={0}
              max={100}
              step={5}
              onChange={(e) => changePrefer(e)}
            />
          </div>
          <div className="h-1/2">
            <p className="text-end ">{animalPrefer[item]}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}
