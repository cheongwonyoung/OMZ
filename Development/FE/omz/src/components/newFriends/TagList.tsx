import TagItem from "./TagItem";
import { v4 as uuidv4 } from "uuid";
type Props = {
  tags: string[];
};

export default function TagList({ tags }: Props) {
  return (
    <div className="w-full flex flex-row-reverse gap-1 flex-wrap-reverse justify-center">
      {tags.map((tag) => (
        <TagItem text={tag} key={uuidv4()} />
      ))}
    </div>
  );
}
