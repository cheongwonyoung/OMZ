import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import NextBtn from "./NextBtn";
import { faPen, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
export default function StepEnd() {
  const memberId = useRecoilValue(userStatus).id;
  const navigate = useNavigate();
  const goMiniRoom = () => {
    navigate(`/miniroom/${memberId}`);
  };

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center pt-32">
      <p className="text-3xl font-bold mb-8 text-purple-500">회원가입 완료!</p>
      <div className="flex flex-col items-center mb-12 text-lg font-semibold">
        <p>상태 메시지를 설정하면</p>
        <p>프로필 뮤직을 추천 받을 수 있어요</p>
      </div>
      <div className="flex flex-col gap-4">
        <NextBtn
          comment="상태 메시지 쓰러가기"
          logic={goMiniRoom}
          icon={<FontAwesomeIcon icon={faPen} />}
        />
        <NextBtn
          comment="홈으로 이동"
          logic={goHome}
          icon={<FontAwesomeIcon icon={faHouse} />}
        />
      </div>
    </div>
  );
}
