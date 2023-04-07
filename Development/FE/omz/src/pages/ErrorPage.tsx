import { Link } from "react-router-dom";
import { images } from "../assets/images";

export default function ErrorPage() {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center gap-2">
      <img src={images.cat_move} alt="" />
      <p className="text-center text-3xl font-bold">Page not found</p>
      <p className="pb-10"></p>
      <Link
        to="/main"
        className=" border-black border-2 rounded-xl px-6 py-3 hover:bg-black/20"
      >
        BACK TO HOME
      </Link>
    </div>
  );
}
