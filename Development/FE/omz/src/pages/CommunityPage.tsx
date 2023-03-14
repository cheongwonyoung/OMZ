import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticles from "../components/communityPage/communityArticles";
import Article from "../api/types";

export default function CommunityPage() {
  const articles = [new Article("hihihihi"), new Article("하이룽뤀")];
  return (
    <div>
      <CommunityBanner />
      {/* TODO: 나중에 api에서 가져온 데이터들 삭 가져오기  */}
      <CommunityArticles items={articles} />
      <CommunityNavbar />
    </div>
  );
}
