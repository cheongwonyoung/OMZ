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
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";

type Comment = {
  [key: string]: any;
};

export default function CommunityDetailPage() {
  // CommunityPage 에서 boardId, memberId state로 넘겨줌 그거 useLocation으로 받아오기
  const location = useLocation();
  const boardId = location.state.boardId;
  const memberId = useRecoilValue(userStatus).id;

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
  // 처음에 들어올 때 refetch 해줌
  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <p className="title">Error...</p>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <CommunityDetailItem
        key={data?.data.boardId}
        item={data?.data}
        refetch={refetch}
      />
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
