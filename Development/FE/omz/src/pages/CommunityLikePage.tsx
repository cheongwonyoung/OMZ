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

type Article = {
  [key: string]: any;
};

export default function CommunityLikePage() {
  const memberId = useRecoilValue(userStatus).id;
  const membernickname = useRecoilValue(userStatus).nickName;
  // 좋아요한 게시물 가져오기
  const { data, isLoading, isError, refetch } = useQuery("articlelike", () =>
    likeArticles(memberId)
  );

  if (isLoading) return <Loading />;
  if (isError) return <h3>Error...</h3>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <div className="mb-5"></div>
      <div className="w-11/12 mb-5">
        <div className="flex justify-start items-center">
          <div>
            <p className="font-bold text-2xl text-">{membernickname}</p>
            <p className="font-bold text-2xl">님이 좋아하는 게시물</p>
          </div>

          <img src={images.heart_img} alt="" className="" />
        </div>
      </div>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
