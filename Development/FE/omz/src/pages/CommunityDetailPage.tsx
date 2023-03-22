import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityCommentInput from "../components/communityPage/CommunityCommentInput";
import CommunityComment from "../components/communityPage/CommunityComment";
// import CommunityNavbar from "../components/communityPage/CommunityNavbar";

export default function CommunityDetailPage() {
  return (
    <div>
      <CommunityBanner />
      <CommunityArticleItem content="하이롱이요 ㅋㅋㅋ" />
      <CommunityCommentInput />
      <CommunityComment />
      {/* <CommunityNavbar /> */}
    </div>
  );
}
