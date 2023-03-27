import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import { getArticles } from "../api/community";
import { useMutation, useQuery, useInfiniteQuery } from "react-query";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import CommunityCreateSmall from "../components/communityPage/CommunityCreateSmall";
import { createArticle } from "../api/community";
import Loading from "../components/common/Loading";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";

// import InfiniteScroll from "react-infinite-scroller";

type Article = {
  boardId: number;
  [key: string]: any;
};

export default function CommunityPage() {
  const memberId = useRecoilValue(userStatus).id;
  let page = 0;
  const sort = "registeredTime,DESC";
  // 모든 게시글 리스트 불러오기(GET)
  const { data, isLoading, isError, refetch } = useQuery(
    ["articles", memberId, page, sort],
    () => getArticles(memberId, page, 100, sort)
  );

  // 게시글 만들기(POST)
  const addArticle = useMutation(
    (board: { content: string; file: File; memberId: number }) =>
      createArticle(board),
    {
      onSuccess: () => {
        refetch();
        alert("게시글 생성 완료");
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
