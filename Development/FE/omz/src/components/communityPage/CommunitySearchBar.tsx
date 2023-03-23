import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchArticles } from "../../api/community";
import { v4 as uuidv4 } from "uuid";
import CommunityArticleItem from "./CommunityArticleItem";
type Search = {
  memberId: number;
  key: string;
  word: string;
};

type Article = {
  [key: string]: any;
};
export default function CommunitySearchBar() {
  const [key, setKey] = useState("");
  const [word, setWord] = useState("");
  const memberId = 1;

  const { data, isLoading, isError, error, refetch } = useQuery("search", () =>
    searchArticles(memberId, key, word)
  );

  const handleClick = () => {
    refetch();
  };

  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex justify-around items-center">
          <select
            name="검색"
            className="w-[20%] relative h-[30px] m-2"
            onChange={(e) => setKey(e.target.value)}
          >
            <option value="content">내용</option>
            <option value="nickname">닉네임</option>
          </select>
          <div className="w-[60%] relative flex my-5">
            <button
              className="absolute right-0 text-[15px] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px]"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="내용, 닉네임을 검색해보세요."
              className="w-full h-[40px] border text-[14px] border-slate-500 rounded-xl pl-4 focus:outline-none focus:ring focus:ring-E2EDFF"
              onChange={(e) => setWord(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {isLoading && <div>isLoading...</div>}
        {isError && <div>isError...</div>}
        {data?.data.map((article: Article) => (
          <CommunityArticleItem
            key={uuidv4()}
            item={article}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
}
