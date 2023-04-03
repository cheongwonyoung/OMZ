import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextBtn from "./NextBtn";
import CameraAvatar from "../common/CameraAvatar";
import { Custom_rabbit } from "../../assets/3DAvatar/Custom_rabbit";
import { Custom_bear } from "../../assets/3DAvatar/Custom_bear";
import { Custom_fox } from "../../assets/3DAvatar/Custom_fox";
import { Custom_dino } from "../../assets/3DAvatar/Custom_dino";
import { Custom_cat } from "../../assets/3DAvatar/Custom_cat";
import { Custom_dog } from "../../assets/3DAvatar/Custom_dog";

type Props = {
  animal: string;
  getNickname(e: any): void;
  nickname: string;
  plusPage(): void;
  screenShot(): void;
};

export default function StepFaceResult({
  animal,
  getNickname,
  nickname,
  plusPage,
  screenShot,
}: Props) {
  const showAvatar = () => {
    switch (animal) {
      case "토끼":
        return (
          <CameraAvatar
            keepRender={true}
            Avatar={
              <Custom_rabbit
                position={[0, 0, 0]}
                itemStatus={{ hat: "0", glasses: "0", wing: "0" }}
              />
            }
          />
        );
      case "곰":
        return (
          <CameraAvatar
            keepRender={true}
            Avatar={
              <Custom_bear
                position={[0, 0.3, 0]}
                itemStatus={{ hat: "0", glasses: "0", wing: "0" }}
              />
            }
          />
        );
      case "여우":
        return (
          <CameraAvatar
            keepRender={true}
            Avatar={
              <Custom_fox
                position={[0, 0.3, 0]}
                itemStatus={{ hat: "0", glasses: "0", wing: "0" }}
              />
            }
          />
        );
      case "공룡":
        return (
          <CameraAvatar
            keepRender={true}
            Avatar={
              <Custom_dino
                position={[0, 0.3, 0]}
                itemStatus={{ hat: "0", glasses: "0", wing: "0" }}
              />
            }
          />
        );
      case "고양이":
        return (
          <CameraAvatar
            keepRender={true}
            Avatar={
              <Custom_cat
                position={[0, 0.3, 0]}
                itemStatus={{ hat: "0", glasses: "0", wing: "0" }}
              />
            }
          />
        );
      case "강아지":
        return (
          <CameraAvatar
            keepRender={true}
            Avatar={
              <Custom_dog
                position={[0, 0.3, 0]}
                itemStatus={{ hat: "0", glasses: "0", wing: "0" }}
              />
            }
          />
        );
    }
  };

  const content = () => {
    switch (animal) {
      case "토끼":
        return "상큼발랄한 매력의 토끼!";
      case "곰":
        return "듬직한 매력의 곰!";
      case "여우":
        return "남을 홀리는 매력의 여우!";
      case "공룡":
        return "카리스마 넘치는 매력의 공룡!";
      case "고양이":
        return "앙큼상큼한 매력의 고양이!";
      case "강아지":
        return "올망졸망한 매력의 강아지!";
    }
  };

  setTimeout(() => {
    screenShot();
  }, 500);

  return (
    <div className="flex justify-center items-center flex-col w-11/12 gap-10">
      <div className="flex flex-col text-center gap-2">
        <p className="text-xl font-bold">나와 닮은 동물은</p>
        <p className="text-2xl font-bold text-blue-900">{content()}</p>
      </div>
      <div id="capture" className="min-h-2/4 max-h-2/4 aspect-square">
        {showAvatar()}
      </div>
      <p className="font-bold text-xl">닉네임 (최대10자)</p>
      <input
        type="text"
        value={nickname}
        onChange={(e) => getNickname(e)}
        maxLength={10}
        className="bg-transparent border-b border-solid border-black outline-none text-xl text-center focus:border-b-blue-900 focus:border-b-2"
      />
      {nickname.length > 0 && (
        <NextBtn
          comment={"다음 스텝으로"}
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          logic={plusPage}
        />
      )}
      {/* <button onClick={screenShot}>gogogogo</button> */}
    </div>
  );
}
