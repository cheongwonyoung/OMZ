import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import { getArticles } from "../api/community";
import { useMutation, useQuery, useInfiniteQuery } from "react-query";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import CommunityCreateSmall from "../components/communityPage/CommunityCreateSmall";
import { createArticle } from "../api/community";
import Loading from "../components/common/Loading";
import InfiniteScroll from "react-infinite-scroller";

type Article = {
  boardId: number;
  [key: string]: any;
};

export default function CommunityPage() {
  // 모든 게시글 리스트 불러오기(GET)
  const memberId = 1;
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["articles", memberId],
    () => getArticles(memberId)
  );
  console.log(data);
  // TODO: 나중에 고치기

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

  // TODO: 나중에 에러 페이지 로딩 페이지 만들기
  if (isLoading) return <Loading />;
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
      <div className="pb-20"></div>
      <CommunityNavbar />
    </div>
  );
}
