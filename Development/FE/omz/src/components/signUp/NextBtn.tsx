type Props = {
  comment: string;
  icon?: any;
  logic(): void;
};

export default function NextBtn({ comment, icon, logic }: Props) {
  return (
    <div
      onClick={logic}
      className="flex justify-center items-center px-6 py-2 border-solid border border-black rounded-md bg-orange-200 opacity-90 cursor-pointer"
    >
      <p className="text-black">
        {comment}
        {icon}
      </p>
    </div>
  );
}
