import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

type Props = {
  member: {
    [key: string]: any;
  };
  isOwner: boolean;
};

export default function MyPageBasicInformation({ member, isOwner }: Props) {
  const animalList = ["강아지", "고양이", "곰", "여우", "토끼", "공룡"];
  const navigate = useNavigate();

  const goToUpdate = () => {
    navigate("/mypage/update");
  };

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

  return (
    <div className="flex flex-col w-full max-w-lg gap-[27px] px-8 items-center justify-center">
      <div className="w-full flex justify-between items-end">
        <div className="w-flex flex-col items-start justify-center gap-1 ml-2">
          <p className="text-2xl font-bold">
            {member?.nickname}
          </p>
          <p className="text-2xl title text-blue-300">{member?.mbti}</p>
        </div>
        {isOwner && (
          <button
            onClick={goToUpdate}
            className="text-sm font-medium text-center text-black rounded-[10px] bg-white/50 border border-black hover:bg-black/20 px-5 py-2.5"
          >
            정보 수정
          </button>
        )}
      </div>
      {/* <div
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-2.5 rounded-[10px] bg-white/50 border border-black hover:bg-black/20"
          onClick={goToUpdate}
        >
          <button
            onClick={goToUpdate}
            className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-black"
          >
            기본 정보 수정
          </button>
        </div> */}
      <div className="flex flex-col gap-2 w-full">
        {animalList.map((item) => (
          <div className="flex gap-4 items-center" key={uuidv4()}>
            <div className="w-[20%] flex flex-col h-full items-center">
              <img
                src={images[imgsrc(item)]}
                alt=""
                className="w-full rounded-fullobject-cover aspect-square"
              />
              <p>{item}</p>
            </div>
            <input
              className="w-full bg-white accent-black"
              id={animalEng[item]}
              value={member?.face[animalEng[item]]}
              type="range"
              min={0}
              max={1}
              step={0.1}
              readOnly
            />
            <p className="text-end">
              {Math.floor(member?.face[animalEng[item]] * 100)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
