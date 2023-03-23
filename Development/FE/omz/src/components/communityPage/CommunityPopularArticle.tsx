import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export default function CommunityPopularArticle() {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("/community/1");
  };
  return (
    <div className="w-full flex justify-center" onClick={handleClick}>
      <div className="w-10/12 flex justify-center items-center flex-grow-0 flex-shrink-0 bg-white/70">
        <img className="w-2/12 p-1" src={images.my_page_img} alt="" />
        <div className="w-full px-2 flex flex-col justify-start items-start">
          <p className="font-bold">닉네임</p>
          <p>내용</p>
        </div>
      </div>
    </div>
  );
}
