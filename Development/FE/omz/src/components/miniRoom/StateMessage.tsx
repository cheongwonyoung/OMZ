import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { changeStateMessage } from "../../api/myRoom";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";

type Props = {
  handleMessage(e: any): void;
  message: string;
};
export default function StateMessage({ handleMessage, message }: Props) {
  const [update, setUpdate] = useState(true);

  const changeReadOnly = () => {
    setUpdate((prev) => !prev);
    const inp = document.getElementById("message");
    inp?.focus();
  };

  const memberId = useRecoilValue(userStatus).id;
  const updateMessage = useMutation(
    () => changeStateMessage(memberId, message),
    {
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  const goupdate = () => {
    updateMessage.mutate();
  };

  const btn = update ? (
    <FontAwesomeIcon icon={faPen} />
  ) : (
    <p className="font-bold text-purple-600" onClick={goupdate}>
      작성
    </p>
  );
  return (
    <div className="relative flex justify-between w-full items-center bg-white h-12 rounded-lg shadow-xl">
      <input
        id="message"
        type="text"
        className="w-10/12 h-11/12 outline-none ml-2"
        value={message}
        onChange={(e) => handleMessage(e)}
        readOnly={update}
        maxLength={20}
        placeholder="상태메시지를 입력해주세요."
      />
      <button
        className="text-[15px] rounded-full w-[30px] h-[30px] mr-2"
        onClick={changeReadOnly}
      >
        {btn}
        {/* <FontAwesomeIcon icon={faPen} /> */}
        {/* 작성 */}
      </button>
      {/* <button>작성 완료</button> */}
    </div>
  );
}
