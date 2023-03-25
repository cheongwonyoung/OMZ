export default function FriendSearchItems() {
  const goBtn = (title: string, logic?: void) => (
    <button className="p-2 border border-black border-solid bg-slate-200 rounded-lg text-xs">
      {title}
    </button>
  );

  return (
    <div className="w-full">
      <div className="flex justify-between p-3 items-center">
        <p className="font-bold text-lg text-justify align-middle">최윾태</p>
        <div className="flex gap-2">
          {goBtn("친구신청")}
          {goBtn("마이페이지")}
        </div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
    </div>
  );
}
