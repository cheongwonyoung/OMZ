import CommunityCommentInput from "../components/communityPage/CommunityCommentInput";
import CommunityComment from "../components/communityPage/CommunityComment";
import { getArticle } from "../api/community";
import { v4 as uuidv4 } from "uuid";
import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityDetailItem from "../components/communityPage/CommunityDetailItem";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import { useLocation } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { createReply } from "../api/community";
import Loading from "../components/common/Loading";
import { useEffect } from "react";

type Comment = {
  [key: string]: any;
};

export default function CommunityDetailPage() {
  // CommunityPage 에서 boardId, memberId state로 넘겨줌 그거 useLocation으로 받아오기
  const location = useLocation();
  const boardId = location.state.boardId;
  const memberId = location.state.memberId;

  // article 상세 정보 받아오기
  const { data, isLoading, isError, refetch } = useQuery("article", () =>
    getArticle(boardId, memberId)
  );

  // 댓글 Create
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
  useEffect(() => {
    refetch();
  }, []);
  if (isLoading) return <Loading />;
  if (isError) return <h3>Error...</h3>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <CommunityDetailItem key={uuidv4()} item={data?.data} refetch={refetch} />
      <CommunityCommentInput onCommentSubmit={handleCommentSubmit} />
      {data?.data.replies.map((comment: Comment) => (
        <CommunityComment
          key={uuidv4()}
          item={comment}
          refetch={refetch}
          boardIdNum={boardId}
        />
      ))}
      <div className="pb-20"></div>
      <CommunityNavbar />
    </div>
  );
}
