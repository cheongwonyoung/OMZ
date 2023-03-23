import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import CommunityCommentInput from "../components/communityPage/CommunityCommentInput";
import CommunityComment from "../components/communityPage/CommunityComment";
import { getArticle } from "../api/community";
import { v4 as uuidv4 } from "uuid";
import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
// import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import { useLocation } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { createReply } from "../api/community";

type Comment = {
  [key: string]: any;
};

export default function CommunityDetailPage() {
  const location = useLocation();
  const boardId = location.state.boardId;
  const memberId = location.state.memberId;
  const { data, isLoading, isError, error, refetch } = useQuery("article", () =>
    getArticle(boardId, memberId)
  );

  const addComment = useMutation(
    (comment: { boardId: number; content: string; memberId: number }) =>
      createReply(comment),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleCommentSubmit = (comment: string) => {
    addComment.mutate({ boardId, content: comment, memberId });
  };

  if (isLoading) return <h3>Loading..</h3>;
  if (isError) return <h3>Error...</h3>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <CommunityArticleItem key={uuidv4()} item={data?.data} />
      <CommunityCommentInput onCommentSubmit={handleCommentSubmit} />

      {data?.data.replies.map((comment: Comment) => (
        <CommunityComment
          key={uuidv4()}
          item={comment}
          refetch={refetch}
          boardIdNum={boardId}
        />
      ))}
      {/* <CommunityNavbar /> */}
    </div>
  );
}
