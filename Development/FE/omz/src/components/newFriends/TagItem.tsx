type Props = {
  text: string;
};
export default function TagItem({ text }: Props) {
  return (
    <div
      className="flex w-auto p-2 h-10 bg-white border border-solid border-neutral-500 rounded-lg justify-center items-center font-bold
    bg-gradient-to-b from-[#7bdfff]/[0.88] to-[#fffee5]/0"
    >
      <p># {text}</p>
    </div>
  );
}
