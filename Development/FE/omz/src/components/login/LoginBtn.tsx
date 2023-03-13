export default function LoginBtn() {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const goLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <button className="bg-red-100" onClick={goLogin}>
      카카오
    </button>
  );
}
