import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
type Props = {
  openGuestBook(): void;
};
export default function BottomBar({ openGuestBook }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-5">
      <div className="flex items-center cursor-pointer hover:scale-105" onClick={openGuestBook}>
        <img src={images.foot_print_img} alt="" className="w-10 mr-2" />
        <p>방명록</p>
      </div>
      <div
        className="flex items-center cursor-pointer hover:scale-105"
        onClick={() => navigate("/miniroom/update")}
      >
        <img src={images.mini_room_img} alt="" className="w-10 h-10 mr-2" />
        <p>꾸미기</p>
      </div>
    </div>
  );
}
