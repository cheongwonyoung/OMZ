import MyPageUpdateForm from "../components/mypage/MyPageUpdateForm";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
export default function MyPageUpdatePage() {
  const memberId = useRecoilValue(userStatus).id;
  return (
    <div className="flex flex-col items-center">
      <TitleBar
        goto={`/mypage/${memberId}`}
        title="My Page"
        icon={images.my_page_img}
      />

      <MyPageUpdateForm />
    </div>
  );
}
