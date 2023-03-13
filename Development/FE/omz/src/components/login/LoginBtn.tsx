import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function LoginBtn() {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const goLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    // <button className="bg-red-100" onClick={goLogin}>
    //   카카오
    // </button>

    <button
      className="bg-[#F7E600] w-[250px] h-[50px] rounded-[7px] flex justify-center items-center gap-4 hover:scale-105 mt-12"
      onClick={goLogin}
    >
      <FontAwesomeIcon icon={faComment} size="lg" className="text-[#3A1D1D]" />
      <p className="font-bold">카카오로 시작하기</p>
    </button>
  );
}
