import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userStatus, userToken } from "../recoil/userAtom";

type Props = {
  component: ReactElement;
};
export default function CheckIsLoginPage({ component }: Props) {
  const noLogin = useRecoilValue(userToken).access_token === "";
  const noSignup = useRecoilValue(userStatus).nickname === "";
  const navigate = useNavigate();
  console.log(noLogin);
  useEffect(() => {
    if (noLogin) {
      navigate("/login");
    } else if (noSignup) {
      navigate("/signup");
    }
  });
  return <>{noLogin === false && noSignup === false && component}</>;
}
