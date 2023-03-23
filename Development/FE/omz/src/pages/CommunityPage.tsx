import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import { getArticles } from "../api/community";
import { useMutation, useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import CommunityCreateSmall from "../components/communityPage/CommunityCreateSmall";
import { createArticle } from "../api/community";
type Article = {
  [key: string]: any;
};

export default function CommunityPage() {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "articles",
    getArticles
  );
  const boardId = 21;
  const memberId = 1;
  console.log(data);
  const addArticle = useMutation(
    (board: { boardId: number; content: string; memberId: number }) =>
      createArticle(board),
    {
      onSuccess: () => {
        console.log("추가완!");
        refetch();
      },
    }
  );

  if (isLoading) return <h3>isLoading...</h3>;
  if (isError) return <h3>isError...</h3>;

  // TODO: Article 추가인데 boardId 어케 들어감요?
  const handleArticleSubmit = (article: string) => {
    addArticle.mutate({ boardId, content: article, memberId });
  };

  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/" title="Community" icon={images.community_img} />
      <CommunityCreateSmall onArticleSubmit={handleArticleSubmit} />
      <p className="p-2">최신글</p>
      <div>
        {data?.data.content.map((article: Article[]) => (
          <CommunityArticleItem key={uuidv4()} item={article} />
        ))}
      </div>
      <CommunityNavbar />
    </div>
  );
}
