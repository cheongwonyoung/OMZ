import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";

export default function MyFriendsPage() {
  return (
    <div className="flex flex-col items-center">
      <TitleBar goto="/" title="My Friends" icon={images.new_friends_img} />
    </div>
  );
}
