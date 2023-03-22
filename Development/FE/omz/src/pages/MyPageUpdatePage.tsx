import MyPageUpdateForm from "../components/mypage/MyPageUpdateForm";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
export default function MyPageUpdatePage() {
  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/mypage" title="My Page" icon={images.my_page_img} />

      <MyPageUpdateForm />
    </div>
  );
}
