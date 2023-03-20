import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export default function MyPageBasicInformation() {
  const animalList = ["강아지", "고양이", "곰", "여우", "토끼", "공룡"];
  const navigate = useNavigate();

  const goToUpdate = () => {
    navigate("/mypage/1");
  };
  const animalPrefer: { [key: string]: number } = {
    강아지: 20,
    고양이: 30,
    곰: 0,
    여우: 50,
    토끼: 30,
    공룡: 20,
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

  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[27px]">
      <div className="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0">
        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-[15px]">
          <p className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-left text-black">
            닉네임
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">
            MBTI
          </p>
        </div>
        <div
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-2.5 rounded-[10px] bg-white/50 border border-black hover:bg-black/20"
          onClick={goToUpdate}
        >
          <button
            onClick={goToUpdate}
            className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-black"
          >
            기본 정보 수정
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {animalList.map((item) => (
          <div className="grid grid-cols-4 gap-4 items-center">
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
              />
            </div>
            <div className="h-1/2">
              <p className="text-end ">{animalPrefer[item]}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
