type Props = {
  mbti: string;
  handlePickedMbti(i: any): void;
};

// 여기서 mbti 카드 디자인
export default function MbtiItem({ mbti, handlePickedMbti }: Props) {
  return (
    <div
      id={mbti}
      className=" flex justify-center items-center border-solid border-2 rounded-lg h-12 cursor-pointer hover:bg-slate-400"
      onClick={(e) => handlePickedMbti(e)}
    >
      {mbti}
    </div>
  );
}
