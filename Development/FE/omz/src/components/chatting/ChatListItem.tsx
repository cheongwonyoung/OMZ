// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faCircle } from "@fortawesome/free-solid-svg-icons";
// import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import moment from "moment";
type Chat = {
  [key: string]: any;
};

type Props = {
  item: Chat;
};

export default function ChatListItem({ item }: Props) {
  const navigate = useNavigate();

  const handleClick = (roomid: number) => {
    navigate(`${roomid}`, {
      state: { roomid },
    });
  };

  // 지금 시각과 제일 최근에 보낸 채팅의 시각의 차이 를 구함
  const createdTime = item?.recentMessageCreatedTime;
  const now = new Date();
  const chatTime = moment(createdTime);
  const nowTime = moment(now);

  const timeGapMinute = Math.trunc(
    moment.duration(nowTime.diff(chatTime)).asMinutes()
  );

  const timeGapHour = Math.trunc(
    moment.duration(nowTime.diff(chatTime)).asHours()
  );

  //
  return (
    <>
      <div
        onClick={() => handleClick(item?.roomId)}
        className="flex flex-col justify-start items-start w-full h-2/12 gap-2.5 px-5 py-[5px] border-t-0 border-r-0 border-b border-l-0 border-white"
      >
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 py-2.5">
          {/* <img
          className="flex-grow-0 flex-shrink-0 h-full w-2/12"
          src={images.new_friends_img}
        /> */}
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-8/12 gap-[7px]">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#3d3d3d]">
                  {item?.chatOtherInfo.nickName}
                </p>
              </div>
              {/* <div className="flex justify-center items-center relative rounded-[10px] bg-black">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-[3px]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-white">
                    친구 추가
                  </p>
                </div>
                <FontAwesomeIcon icon={faPlus} className="text-white" />
              </div> */}
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#636363]">
                {item?.recentMessage}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left">
              {timeGapMinute > 60
                ? timeGapHour + "시간 전"
                : timeGapMinute + "분 전"}
            </p>
            {/* <FontAwesomeIcon icon={faCircle} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
