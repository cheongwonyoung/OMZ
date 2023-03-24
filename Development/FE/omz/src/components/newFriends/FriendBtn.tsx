type Props = {
  icon: any;
  text: string;
  logic(): void;
};
export default function FriendBtn({ icon, text, logic }: Props) {
  return (
    <button
      // className="w-28 h-12 bg-black rounded-xl p-1 text-sm"
      className="w-28 h-12 bg-white shadow-2xl rounded-xl p-1 text-sm"
      onClick={logic}
    >
      <span className="text-rose-500 mr-2">{icon}</span>
      <span className="text-purple-800 font-bold">{text}</span>
    </button>
  );
}
