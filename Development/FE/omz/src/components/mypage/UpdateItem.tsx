type Props = {
  tag: any;
  logic?(): void;
};
export default function UpdateItem({ tag, logic }: Props) {
  return (
    <div className="pb-2 flex flex-col   w-full mb-10">
      <div className="w-full flex justify-between">
        <div className="w-[80%] font-bold text-lg mx-1">{tag}</div>
        <button className="text-xl font-bold" onClick={logic}>
          수정
        </button>
      </div>
      <div className="w-full bg-black h-0.5 mt-1"></div>
    </div>
  );
}
