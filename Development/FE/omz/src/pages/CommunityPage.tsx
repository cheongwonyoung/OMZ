import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticles from "../components/communityPage/CommunityArticles";
import CommunityPopularArticle from "../components/communityPage/CommunityPopularArticle";
import Article from "../api/types";

export default function CommunityPage() {
  const articles = [new Article("hihihihi"), new Article("하이룽뤀")];
  return (
    <div>
      <CommunityBanner />
      <div>
        <p className="p-2">실시간 인기글</p>
        <CommunityPopularArticle />
        <p className="p-2">최신글</p>
        {/* TODO: 나중에 api에서 가져온 데이터들 삭 가져오기  */}
        <CommunityArticles items={articles} />
      </div>
      <CommunityNavbar />
    </div>
  );
}
