import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";

export default function CommunityLikePage() {
  return (
    <div className="flex flex-col items-center">
      {/* TODO: 좋아하는 게시물 받아와서 map 돌려서 CommunityArticleItem 삭  */}
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <CommunityNavbar />
    </div>
  );
}
