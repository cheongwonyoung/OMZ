import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function CommunitySearchBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex justify-around">
        <select name="검색" className="w-[20%] relative">
          <option value="">제목</option>
          <option value="">내용</option>
          <option value="">닉네임</option>
        </select>
        <div className="w-[60%] relative flex my-5">
          <button className="absolute right-0 text-[15px] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="제목, 내용, 닉네임을 검색해보세요."
            className="w-full h-[40px] border text-[14px] border-slate-500 rounded-xl pl-4 focus:outline-none focus:ring focus:ring-E2EDFF"
          />
        </div>
      </div>
    </div>
  );
}
