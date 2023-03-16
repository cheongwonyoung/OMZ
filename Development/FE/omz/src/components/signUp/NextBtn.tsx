type Props = {
  comment: string;
  icon?: any;
  logic(): void;
};

export default function NextBtn({ comment, icon, logic }: Props) {
  return (
    <div
      onClick={logic}
      className="flex justify-center items-center px-6 py-2 font-bold shadow-xl text-purple-500 rounded-md bg-white opacity-90 cursor-pointer"
    >
      <p>{comment}</p>
      <p className="ml-2">{icon}</p>
    </div>
  );
}
