import { imageUrl } from "../../api";

type Props = {
  name: string;
  content: string;
  imgsrc: string;
  bottom?: React.ReactElement;
};
export default function FriendsItem({ name, content, imgsrc, bottom }: Props) {
  return (
    <div className="flex w-full border-b-2 border-white py-4">
      <div className="pt-2 mr-4">
        <img
          src={imageUrl + imgsrc}
          alt=""
          className="w-[3rem] h-[3rem] object-cover rounded-full"
        />
      </div>
      <div className="w-full">
        <p className="font-semibold mb-2">{name}</p>
        <div className="bg-white border border-solid border-indigo-200 rounded-r-2xl rounded-bl-2xl p-2 text-sm font-semibold w-full">
          {content}
        </div>
        {bottom}
      </div>
    </div>
  );
}
