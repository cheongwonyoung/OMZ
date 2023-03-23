import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import { likeArticles } from "../api/community";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
type Article = {
  [key: string]: any;
};

export default function CommunityLikePage() {
  const memberId = 1;

  const { data, isLoading, isError, error, refetch } = useQuery(
    "articlelike",
    () => likeArticles(memberId)
  );
  console.log(data);
  if (isLoading) return <h3>Loading..</h3>;
  if (isError) return <h3>Error...</h3>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      {data?.data.map((article: Article) => (
        <CommunityArticleItem key={uuidv4()} item={article} refetch={refetch} />
      ))}
      <CommunityNavbar />
    </div>
  );
}
