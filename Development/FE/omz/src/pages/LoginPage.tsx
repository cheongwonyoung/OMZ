import { images } from "../assets/images";
import LoginBtn from "../components/login/LoginBtn";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img src={images.main_logo} alt="" className="w-52" />
      <img src={images.sub_logo} alt="" className="w-56" />
      <LoginBtn />
    </div>
  );
}
