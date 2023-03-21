import CommunityArticleItem from "./CommunityArticleItem";
import { v4 as uuidv4 } from "uuid";

type Article = {
  Content: string;
  file: string;
  memberId: number;
};

const CommunityArticles: React.FC<{ items: Article[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <CommunityArticleItem key={uuidv4()} content={item.Content} />
      ))}
    </ul>
  );
};

export default CommunityArticles;
