import Loading from "../components/common/Loading";
import { useSetRecoilState } from "recoil";
import { kakaoToken, userStatus, userToken } from "../recoil/userAtom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LogoutRedirectPage() {
  const setUserInfo = useSetRecoilState(userStatus);
  const setUserToken = useSetRecoilState(userToken);
  const setKToken = useSetRecoilState(kakaoToken);

  const navigate = useNavigate();

  useEffect(() => {
    setUserInfo({ id: null, nickname: "", profile_img: "" });
    setUserToken({
      access_token: "",
      refresh_token: "",
    });
    setKToken({ access_token: "" });
    navigate("/");
  });
  return (
    <div>
      <Loading />
    </div>
  );
}
