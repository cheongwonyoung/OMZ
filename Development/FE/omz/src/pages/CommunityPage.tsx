import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticles from "../components/communityPage/CommunityArticles";
import CommunityPopularArticle from "../components/communityPage/CommunityPopularArticle";
import { getArticles } from "../api/community";
import { useQuery } from "react-query";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";

// type Article = {
//   Content: string;
//   file: string;
//   memberId: number;
// };

export default function CommunityPage() {
  const { data } = useQuery("articles", getArticles);
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/" title="Community" icon={images.community_img} />
      <div className="w-full">
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
