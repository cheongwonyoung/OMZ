import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { images } from "../assets/images";
import LoginBtn from "../components/login/LoginBtn";
import { userStatus } from "../recoil/userAtom";

export default function LoginPage() {
  const isLogin = useRecoilValue(userStatus).id !== null;
  const navigate = useNavigate();
  useEffect(() => {
    isLogin && navigate("/");
  });
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="animate-bounce">
        <img src={images.main_logo} alt="" className="w-52" />
        <img src={images.sub_logo} alt="" className="w-56" />
      </div>
      <LoginBtn />
    </div>
  );
}
