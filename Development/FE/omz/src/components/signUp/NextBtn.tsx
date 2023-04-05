type Props = {
  comment: string;
  icon?: any;
  logic(): void;
};

export default function NextBtn({ comment, icon, logic }: Props) {
  return (
    <div
      onClick={logic}
      className="w-[60%] max-w-sm flex justify-center items-center px-6 py-2 border border-black font-bold rounded-md bg-white bg-opacity-70 cursor-pointer"
    >
      <p>{comment}</p>
      {icon && <p className="ml-2">{icon}</p>}
    </div>
  );
}
