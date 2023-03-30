import MbtiList from "./MbtiList";
import NextBtn from "./NextBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
type Props = {
  handlePickedMbti(i: any): void;
  pickedMbti: string;
  plusPage(): void;
};

export default function StepMbti({
  handlePickedMbti,
  pickedMbti,
  plusPage,
}: Props) {
  return (
    <div className="flex justify-center items-center flex-col w-11/12 gap-16">
      <h1 className="text-2xl font-bold">MBTI를 선택해주세요</h1>
      <MbtiList handlePickedMbti={handlePickedMbti} pickedMbti={pickedMbti} />
      {pickedMbti && (
        <NextBtn
          comment={"다음 스텝으로"}
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          logic={plusPage}
        />
      )}
      <div className="flex flex-col items-center bottom-0 pt-20 gap-2">
        <p className="text-base">내 MBTI를 모른다면?</p>
        <a
          href="https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC"
          target={"_blank"}
        >
          <p className="text-lg">
            MBTI 알아보러 가기&nbsp;
            <FontAwesomeIcon icon={faLink} />
          </p>
        </a>
      </div>
    </div>
  );
}
