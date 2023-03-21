import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import CommunityBanner from "../components/communityPage/CommunityBanner";
import CommunityCommentInput from "../components/communityPage/CommunityCommentInput";
import CommunityComment from "../components/communityPage/CommunityComment";
import { getArticle } from "../api/community";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import CommunityNavbar from "../components/communityPage/CommunityNavbar";

type Board = {
  [key: string]: any;
};

export default function CommunityDetailPage() {
  const param = Number(useParams().board_id);
  const memberId = 1;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticle(param, memberId);
      setData(result.data);
    };
    fetchData();
  }, [param, memberId]);

  return (
    <div>
      <CommunityBanner />
      <CommunityArticleItem key={uuidv4()} item={data} />
      <CommunityCommentInput />
      <CommunityComment />
      {/* <CommunityNavbar /> */}
    </div>
  );
}
