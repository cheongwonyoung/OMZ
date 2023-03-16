import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircle } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";

export default function ChatListItem() {
  return (
    <div className="flex flex-col justify-start items-start w-full h-2/12 gap-2.5 px-5 py-[5px] border-t-0 border-r-0 border-b border-l-0 border-white">
      <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 py-2.5">
        <img
          className="flex-grow-0 flex-shrink-0 h-full w-2/12"
          src={images.new_friends_img}
        />
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-8/12 gap-[7px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#3d3d3d]">
                닉네임
              </p>
            </div>
            <div className="flex justify-center items-center relative rounded-[10px] bg-black">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-[3px]">
                <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-white">
                  친구 추가
                </p>
              </div>
              <FontAwesomeIcon icon={faPlus} className="text-white" />
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#636363]">
              내용내용내용내용
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 relative gap-4">
          <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left">
            10 min
          </p>
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
}
