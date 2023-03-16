import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";

export default function CommunityLikePage() {
  return (
    <div>
      <CommunityBanner />
      {/* TODO: 좋아하는 게시물 받아와서 map 돌려서 CommunityArticleItem 삭  */}
      <CommunityNavbar />
    </div>
  );
}
