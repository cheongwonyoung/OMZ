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
  boardId: number;
  [key: string]: any;
};

export default function CommunityPage() {
  // 모든 게시글 리스트 불러오기(GET)
  const { data, isLoading, isError, error, refetch } = useQuery(
    "articles",
    getArticles
  );
  // TODO: 나중에 고치기
  const memberId = 1;

  console.log(data);
  // 게시글 만들기 (Create)
  const addArticle = useMutation(
    (board: { content: string; file: File; memberId: number }) =>
      createArticle(board),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  const handleArticleSubmit = (article: string, image: File) => {
    addArticle.mutate({
      content: article,
      file: image,
      memberId: memberId,
    });
  };
  console.log(data?.data.content);
  // TODO: 나중에 에러 페이지 로딩 페이지 만들기
  if (isLoading) return <h3>isLoading...</h3>;
  if (isError) return <h3>isError...</h3>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/" title="Community" icon={images.community_img} />
      <div className="m-3"></div>
      <CommunityCreateSmall onArticleSubmit={handleArticleSubmit} />
      <div className="m-3"></div>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.data.content.map((article: Article) => (
          <CommunityArticleItem
            key={article.boardId}
            item={article}
            refetch={refetch}
          />
        ))}
      </div>
      <CommunityNavbar />
    </div>
  );
}
