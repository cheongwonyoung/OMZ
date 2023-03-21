import { images } from "../../assets/images";

export default function CommunityComment() {
  return (
    <div className="flex flex-col justify-start items-end py-[5px] border-t-0 border-r-0 border-b border-l-0 border-white">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 py-[5px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[390px]">
          <div className="flex justify-start items-center flex-grow relative gap-2.5 p-3 bg-transparent">
            <img src={images.mini_room_img} alt="" className="w-10 h-10" />
            <div className="flex flex-col justify-start items-start flex-grow gap-1">
              <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#555a64]">
                  Author
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#555a64]">
                  Timestamp
                </p>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow w-[308px] text-sm text-left text-[#555a64]">
                  Body text goes here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 본인이 쓴 댓글인 경우에만  */}
      {/* <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-3 pb-3">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-[3px] rounded-[5px]">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
            삭제
          </p>
        </div>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-[3px] rounded-[5px]">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
            수정
          </p>
        </div>
      </div> */}
    </div>
  );
}
