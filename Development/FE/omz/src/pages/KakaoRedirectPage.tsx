import { useMutation, useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getKakaoToken, getServerToken, getUserInfo } from "../api/kakaoLogin";
import { useRecoilState } from "recoil";
import { userStatus, userToken, kakaoToken } from "../recoil/userAtom";
import Loading from "../components/common/Loading";
export default function KakaoRedirectPage() {
  const [token, setToken] = useRecoilState(userToken);
  const AUTH_CODE = useLocation().search.split("code=")[1];

  const navigate = useNavigate();
  const [userState, setUserState] = useRecoilState(userStatus);
  const getInfo = useMutation((token: string) => getUserInfo(token), {
    onSuccess(data) {
      console.log(data);
      if (data.data === false) {
        navigate("/signup");
      } else {
        setUserState({
          ...userState,
          id: data.data.memberId,
          nickname: data.data.nickname,
          profile_img: data.data.file,
        });
        navigate("/");
      }
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

  const [userKakao, setUserKakao] = useRecoilState(kakaoToken);

  useQuery("kakao_token", () => getKakaoToken(AUTH_CODE), {
    retry: false,
    onSuccess(data) {
      console.log(data);
      setUserKakao({ access_token: data.data.access_token });
      getTokken.mutate(data?.data.access_token);
    },
  });
  return (
    <div>
      <Loading />
    </div>
  );
}
