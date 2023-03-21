import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";

export default function BottomBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center">
        <img src={images.foot_print_img} alt="" className="w-10 h-10 mr-2" />
        <p>방명록</p>
      </div>
      <div className="flex items-center" onClick={() => navigate("update")}>
        <img src={images.mini_room_img} alt="" className="w-10 h-10 mr-2" />
        <p>꾸미기</p>
      </div>
    </div>
  );
}
