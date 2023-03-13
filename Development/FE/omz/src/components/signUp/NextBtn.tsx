type Props = {
  comment: string;
  icon?: any;
};

export default function NextBtn({ comment, icon }: Props) {
  return (
    <div className="flex justify-center items-center px-6 py-2 border-solid border border-black rounded-md bg-orange-200 opacity-90">
      <p className="text-black">
        {comment}
        {icon}
      </p>
    </div>
  );
}
