import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default function DeleteModal() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="flex flex-col justify-center items-center gap-10 p-5 rounded-[20px] bg-white w-[80%]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      >
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[21px]">
          <FontAwesomeIcon icon={faTrashCan} />
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black">
            정말 삭제하시겠습니까?
          </p>
        </div>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-[15px] py-2.5 rounded-[10px] bg-transparent border border-[#555a64]">
            <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-black">
              예
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-[15px] py-2.5 rounded-[10px] bg-[#fabbca]">
            <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-white">
              아니오
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
