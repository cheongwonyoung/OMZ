import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function StateMessage() {
  return (
    <div className="relative flex justify-between w-full items-center bg-white h-12 rounded-lg shadow-xl">
      <input type="text" className="w-10/12 h-11/12 outline-none ml-2" />
      <button className="absolute right-4 text-[15px] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px]">
        <FontAwesomeIcon icon={faPen} />
      </button>
    </div>
  );
}
