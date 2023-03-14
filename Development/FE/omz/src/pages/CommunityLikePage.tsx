import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import DeleteModal from "../components/common/DeleteModal";
export default function CommunityLikePage() {
  return (
    <div>
      <CommunityBanner />
      {/* TODO: 좋아하는 게시물 받아와서 map 돌려서 CommunityArticleItem 삭  */}
      <DeleteModal />
      <CommunityNavbar />
    </div>
  );
}
