import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getKakaoToken, getServerToken, getUserInfo } from "../api/kakaoLogin";
import { useRecoilState } from "recoil";
import { userToken } from "../recoil/userAtom";
export default function KakaoRedirectPage() {
  const [token, setToken] = useRecoilState(userToken);
  const AUTH_CODE = useLocation().search.split("code=")[1];

  const getInfo = useMutation((token: string) => getUserInfo(token), {
    onSuccess(data, variables, context) {
      console.log(data);
    },
  });

  const getTokken = useMutation(
    (access_token: string) => getServerToken(access_token),
    {
      onSuccess(data) {
        setToken({
          ...token,
          access_token: data.data.accessToken,
          refresh_token: data.data.refreshToken,
        });
        console.log(token);
        getInfo.mutate(data.data.accessToken);
      },
    }
  );

  //TODO UseQuery 바로 사용
  useQuery("kakao_token", () => getKakaoToken(AUTH_CODE), {
    retry: false,
    onSuccess(data) {
      console.log(data);
      getTokken.mutate(data?.data.access_token);
    },
  });
  return (
    <div>
      리다이렉트 여기서 로직
      <button onClick={() => console.log(token)}>sdfa</button>
    </div>
  );
}
