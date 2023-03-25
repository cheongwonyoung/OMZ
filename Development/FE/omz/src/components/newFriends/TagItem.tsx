type Props = {
  text: string;
};
export default function TagItem({ text }: Props) {
  return (
    <div className="flex w-auto p-2 h-10 bg-white border border-solid border-neutral-500 rounded-lg justify-center items-center font-bold">
      <p># {text}</p>
    </div>
  );
}
