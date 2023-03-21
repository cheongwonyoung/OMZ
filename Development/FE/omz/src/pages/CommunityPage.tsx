import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
// import CommunityPopularArticle from "../components/communityPage/CommunityPopularArticle";
import { getArticles } from "../api/community";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";

type Article = {
  [key: string]: any;
};

export default function CommunityPage() {
  const { data } = useQuery("articles", getArticles);

  return (
    <div>
      <CommunityBanner />
      <div>
        {/* <p className="p-2">실시간 인기글</p>
        <CommunityPopularArticle /> */}
        <p className="p-2">최신글</p>
        <div>
          {data?.data.content.map((article: Article[]) => (
            //<p>{article.content} </p>
            <CommunityArticleItem key={uuidv4()} item={article} />
          ))}
        </div>
      </div>
      <CommunityNavbar />
    </div>
  );
}
