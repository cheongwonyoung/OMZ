import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import CommunityCommentInput from "../components/communityPage/CommunityCommentInput";
import CommunityComment from "../components/communityPage/CommunityComment";
import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
// import CommunityNavbar from "../components/communityPage/CommunityNavbar";

export default function CommunityDetailPage() {
  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />

      <CommunityArticleItem content="하이롱이요 ㅋㅋㅋ" />
      <CommunityCommentInput />
      <CommunityComment />
      {/* <CommunityNavbar /> */}
    </div>
  );
}
