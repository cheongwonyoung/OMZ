import { Model } from "../../assets/3DAvatar/Rabbit";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextBtn from "./NextBtn";
import CameraAvatar from "../common/CameraAvatar";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import { blob } from "stream/consumers";
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
        return <CameraAvatar Avatar={<Model position={[0, 0, 0]} />} />;
    }
  };

  const content = () => {
    switch (animal) {
      case "토끼":
        return "상큼발랄한 매력의 토끼!";
    }
  };

  setTimeout(() => screenShot(), 100);

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
