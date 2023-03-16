import { images } from "../../assets/images";

export default function Heart() {
  return (
    <div className="flex items-center">
      <div>
        <img
          src={images.heart_img}
          alt=""
          className="h-12 w-12 first-letter cursor-pointer"
        />
      </div>
      <p className="font-bold ml-2 text-xl text-purple-400">125</p>
    </div>
  );
}
