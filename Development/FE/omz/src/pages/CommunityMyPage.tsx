import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityMyPageBanner from "../components/communityPage/CommunityMyPageBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import { getMemberArticle } from "../api/community";
import { useQuery } from "react-query";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import { v4 as uuidv4 } from "uuid";

type Article = {
  [key: string]: any;
};
// memberId 를 prop으로 받기
export default function CommunityMyPage() {
  const memberId = 1;
  const { data, isLoading, isError, error, refetch } = useQuery(
    "articlemy",
    () => getMemberArticle(memberId)
  );

  if (isLoading) return <h3>Loading..</h3>;
  if (isError) return <h3>Error...</h3>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <CommunityMyPageBanner />
      {data?.data.content.map((article: Article) => (
        <CommunityArticleItem key={uuidv4()} item={article} />
      ))}
      <CommunityNavbar />
    </div>
  );
}
