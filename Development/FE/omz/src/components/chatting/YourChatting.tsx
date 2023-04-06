import moment from "moment";

type Props = {
  item: string | undefined;
  time: string | undefined;
};

export default function YourChatting({ item, time }: Props) {
  // 일단 채팅 시간은 시간 / 분으로만 표시해놓음
  const chatTime = moment(time, "HH:mm").format("HH:mm");
  return (
    <div className="flex justify-start items-end relative gap-[5px] ml-4 m-5">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 rounded-tr-[15px] rounded-bl-[15px] rounded-br-[15px] bg-white">
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left capitalize text-black">
          {item}
        </p>
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left capitalize text-[#6d6d6d]">
        {chatTime}
      </p>
    </div>
  );
}
