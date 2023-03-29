import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import { likeArticles } from "../api/community";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import Loading from "../components/common/Loading";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
import { useEffect } from "react";

type Article = {
  [key: string]: any;
};

export default function CommunityLikePage() {
  const memberId = useRecoilValue(userStatus).id;
  const membernickname = useRecoilValue(userStatus).nickname;
  // 좋아요한 게시물 가져오기
  const { data, isLoading, isError, refetch } = useQuery("articlelike", () =>
  likeArticles(memberId),{
    staleTime:0
  }
  );
  if (isLoading) return <Loading />;
  if (isError) return <p className="title">Error...</p>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <div className="w-11/12 flex flex-col justify-start p-5">
        <p className="font-bold text-2xl text-">{membernickname} 님이 </p>
        <div className="flex gap-3">
          <p className="font-bold text-2xl">좋아하는 게시물</p>
          <img src={images.heart_img} alt="" className="" />
        </div>
      </div>
      <div className="w-11/12 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data.map((article: Article) => (
          <CommunityArticleItem
            key={uuidv4()}
            item={article}
            refetch={refetch}
          />
        ))}
      </div>
      <div className="pb-20"></div>
      <CommunityNavbar />
    </div>
  );
}
