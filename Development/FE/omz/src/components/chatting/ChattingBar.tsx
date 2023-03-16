import { images } from "../../assets/images";

export default function ChattingBar() {
  return (
    <div className="flex w-full justify-between items-center p-2.5 border-t-0 border-r-0 border-b border-l-0 border-black">
      <div className="flex items-center ">
        <img
          src={images.chatting_img}
          alt=""
          className="h-12 aspect-square mr-4"
        />
        <p className="font-bold">Chatting</p>
      </div>
    </div>
  );
}
