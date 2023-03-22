import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
// import CommunityPopularArticle from "../components/communityPage/CommunityPopularArticle";
import { getArticles } from "../api/community";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";


type Article = {
  [key: string]: any;
};

export default function CommunityPage() {
  const { data } = useQuery("articles", getArticles);

  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/" title="Community" icon={images.community_img} />
        <p className="p-2">최신글</p>
        <div>
          {data?.data.content.map((article: Article[]) => (
            //<p>{article.content} </p>
            <CommunityArticleItem key={uuidv4()} item={article} />
          ))}
        </div>
      <CommunityNavbar />
    </div>
  );
}
