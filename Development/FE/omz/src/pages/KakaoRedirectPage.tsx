import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getKakaoToken, getServerToken } from "../api/kakaoLogin";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/userAtom";
export default function KakaoRedirectPage() {
  const [user, setUser] = useRecoilState(userState);
  const AUTH_CODE = useLocation().search.split("code=")[1];
  const getTokken = useMutation(
    (access_token: string) => getServerToken(access_token),
    {
      onSuccess(data) {
        setUser({
          ...user,
          access_token: data.data.accessToken,
          refresh_token: data.data.refreshToken,
        });
        console.log(user);
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
    // onSuccess: () => {
    //   console.log(data);
    //   getTokken.mutate(data?.data.access_token);
    // },
  });
  return (
    <div>
      리다이렉트 여기서 로직
      <button onClick={() => console.log(user)}>sdfa</button>
    </div>
  );
}
