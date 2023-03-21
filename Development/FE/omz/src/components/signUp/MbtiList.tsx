import MbtiItem from "./MbtiItem";

type Props = {
  handlePickedMbti(i: any): void;
  pickedMbti: string;
};

export default function MbtiList({ handlePickedMbti, pickedMbti }: Props) {
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
    <div className="w-full grid grid-cols-4 gap-2">
      {mbtiList.map((item) => (
        <MbtiItem
          mbti={item}
          key={item}
          handlePickedMbti={handlePickedMbti}
          pickedMbti={pickedMbti}
        />
      ))}
    </div>
  );
}
