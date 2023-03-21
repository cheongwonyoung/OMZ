import Article from "../../api/types";
import CommunityArticleItem from "./CommunityArticleItem";

const CommunityArticles: React.FC<{ items: Article[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <CommunityArticleItem key={item.id} content={item.content} />
      ))}
    </ul>
  );
};

export default CommunityArticles;
