import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getKakaoToken } from "../api/kakaoLogin";

export default function KakaoRedirectPage() {
  const AUTH_CODE = useLocation().search.split("code=")[1];
  console.log(AUTH_CODE);
  const { data } = useQuery("kakao_token", () => getKakaoToken(AUTH_CODE), {
    retry: false,
  });
  console.log(data);

  return <div>리다이렉트 여기서 로직</div>;
}
