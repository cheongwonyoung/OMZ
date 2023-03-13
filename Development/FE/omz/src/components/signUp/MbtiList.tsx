import MbtiItems from "./MbtiItem";

type Props = {
  handlePickedMbti(i: any): void;
};

export default function MbtiList({ handlePickedMbti }: Props) {
  const mbtiList = [
    "INFP",
    "INFJ",
    "INTP",
    "INTJ",
    "ISFP",
    "ISFJ",
    "ISTP",
    "ISTJ",
    "ENFP",
    "ENFJ",
    "ENTP",
    "ENTJ",
    "ESFP",
    "ESFJ",
    "ESTP",
    "ESTJ",
  ];

  return (
    <div className="w-10/12 grid grid-cols-4 gap-2 mb-4">
      {mbtiList.map((item) => (
        <MbtiItems mbti={item} key={item} handlePickedMbti={handlePickedMbti} />
      ))}
    </div>
  );
}
