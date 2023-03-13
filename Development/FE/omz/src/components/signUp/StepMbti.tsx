import MbtiList from "./MbtiList";
import NextBtn from "./NextBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
    <div className="flex justify-center items-center flex-col pt-32">
      <h1 className="mb-10 text-2xl font-bold">MBTI를 선택해주세요</h1>
      <MbtiList handlePickedMbti={handlePickedMbti} />

      {pickedMbti && (
        <div onClick={plusPage} className="cursor-pointer">
          <NextBtn
            comment={"다음 스텝으로"}
            icon={<FontAwesomeIcon icon={faArrowRight} />}
          />
        </div>
      )}
    </div>
  );
}
