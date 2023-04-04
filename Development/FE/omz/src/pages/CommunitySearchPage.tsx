import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunitySearchBar from "../components/communityPage/CommunitySearchBar";

export default function CommunitySearchPage() {
  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto={`/community`} />
      <CommunitySearchBar />
      <div className="pb-20"></div>
      <CommunityNavbar />
    </div>
  );
}
