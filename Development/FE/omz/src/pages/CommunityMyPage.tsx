import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityMyPageBanner from "../components/communityPage/CommunityMyPageBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";

export default function CommunityMyPage() {
  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <CommunityMyPageBanner />
      <CommunityNavbar />
    </div>
  );
}
