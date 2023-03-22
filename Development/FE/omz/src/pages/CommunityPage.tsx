import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticles from "../components/communityPage/CommunityArticles";
import CommunityPopularArticle from "../components/communityPage/CommunityPopularArticle";
import { getArticles } from "../api/community";
import { useQuery } from "react-query";

// type Article = {
//   Content: string;
//   file: string;
//   memberId: number;
// };

export default function CommunityPage() {
  const { data } = useQuery("articles", getArticles);
  console.log(data);
  return (
    <div>
      <CommunityBanner />
      <div>
        <p className="p-2">실시간 인기글</p>
        <CommunityPopularArticle />
        <p className="p-2">최신글</p>
        <div>
          {/* {data?.content.map((article: Article) => (
            <p>{article.Content}</p>
          ))} */}
        </div>

        {/* <CommunityArticles items={articles} /> */}
      </div>
      <CommunityNavbar />
    </div>
  );
}
