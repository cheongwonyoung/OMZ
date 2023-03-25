import { images } from "../../assets/images";
export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div>
        <img src={images.animate_star} alt="" className="" />
      </div>
      <div>
        <p className="text-lg font-bold">Loading...</p>
      </div>
    </div>
  );
}
