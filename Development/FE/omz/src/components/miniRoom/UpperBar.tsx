import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import BackBtn from "../common/BackBtn";

export default function UpperBar() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="flex w-full justify-between items-center p-2.5 border-t-0 border-r-0 border-b border-l-0 border-black">
      <div className="flex items-center ">
        <img
          src={images.mini_room_img}
          alt=""
          className="h-12 aspect-square mr-4"
        />
        <p className="font-bold">000님의 Mini Room</p>
      </div>
      <div className="w-10 h-10 flex content-center">
        <BackBtn goBack={goBack} />
      </div>
    </div>
  );
}
