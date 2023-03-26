import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchArticles } from "../../api/community";
import { v4 as uuidv4 } from "uuid";
import CommunityArticleItem from "./CommunityArticleItem";
import { KeyboardEvent } from "react";
import Loading from "../common/Loading";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
type Search = {
  memberId: number;
  key: string;
  word: string;
};

type Article = {
  [key: string]: any;
};
export default function CommunitySearchBar() {
  // key 는 내용 / 닉네임 중에 하나 (카테고리를 고르는 것)
  const [key, setKey] = useState("content");
  // word 는 사용자가 검색하는 단어
  const [word, setWord] = useState("");

  const memberId = useRecoilValue(userStatus).id;
  // 검색된 데이터 불러오기, 단 검색을 안했을 때 불러오는 걸 막기 위해 enabled: false 설정을 해줌
  const { data, isLoading, isError, refetch } = useQuery(
    "search",
    () => searchArticles(memberId, key, word),
    {
      enabled: false,
    }
  );
  // 검색을 하면 데이터를 불러옴
  const onClick = () => {
    refetch();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      onClick();
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <div className="w-11/12 flex justify-between items-center">
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
              onClick={onClick}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="내용, 닉네임을 검색해보세요."
              className="w-full h-[40px] border text-[14px] border-slate-500 rounded-xl pl-4 focus:outline-none focus:ring focus:ring-E2EDFF"
              onChange={(e) => setWord(e.target.value)}
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {isLoading && <Loading />}
        {isError && <div>isError...</div>}
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.data.map((article: Article) => (
            <CommunityArticleItem
              key={uuidv4()}
              item={article}
              refetch={refetch}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
