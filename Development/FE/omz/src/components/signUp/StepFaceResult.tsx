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
  screenShot?(): void;
};

export default function StepFaceResult({
  animal,
  getNickname,
  nickname,
  plusPage,
  screenShot,
}: Props) {
  useEffect(() => {
    // screenShot();
  }, []);

  const showAvatar = () => {
    switch (animal) {
      case "토끼":
        return <CameraAvatar Avatar={<Model position={[0, 0, 0]} />} />;
    }
  };

  const content = () => {
    switch (animal) {
      case "토끼":
        return "상큼발랄한 매력의 토끼상";
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div>
        <p className="text-lg font-bold">나는....</p>
        <p className="text-lg text-violet-500 font-bold">{content()}</p>
      </div>
      <div id="capture" className="h-2/4 aspect-square ">
        {showAvatar()}
      </div>
      <p className="font-bold mb-8">나만의 닉네임을 입력하세요(최대10자)</p>
      <input
        type="text"
        value={nickname}
        onChange={(e) => getNickname(e)}
        maxLength={10}
        className="bg-transparent border-b border-solid border-black outline-none mb-8"
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
