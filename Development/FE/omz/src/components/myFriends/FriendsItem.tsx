import { imageUrl } from "../../api";

type Props = {
  name: string;
  content: string;
  imgsrc: string;
  bottom?: React.ReactElement;
};
export default function FriendsItem({ name, content, imgsrc, bottom }: Props) {
  return (
    <div className="flex max-h-32 w-full justify-between border-b-2 border-white py-4">
      <div className="pt-2">
        <img
          src={imageUrl + imgsrc}
          alt=""
          className="max-h-24 object-cover rounded-full border"
        />
      </div>
      <div className="ml-2 w-[90%] flex flex-col justify-between">
        <p className="font-semibold mb-2">{name}</p>
        <div className="bg-white border border-solid bg-opacity-50 border-indigo-200 rounded-r-2xl rounded-bl-2xl p-2 text-sm font-semibold w-full">
          {content}
        </div>
        {bottom}
      </div>
    </div>
  );
}
