import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { changeStateMessage } from "../../api/miniRoom";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

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
  const miniRoomId = useParams().id;
  const updateMessage = useMutation(
    () => changeStateMessage(memberId, message),
    {
      onSuccess(data) {
        toast.success("상태메세지가 작성되었습니다.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT,
        });
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
    <div
      className={`relative flex w-full bg-white h-12 rounded-lg shadow-xl ${
        miniRoomId == memberId && "justify-between"
      }`}
    >
      <ToastContainer />
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
      {miniRoomId == memberId && (
        <button
          className="text-[15px] self-center justify-self-end rounded-full w-[30px] h-[30px] mr-2 cursor-pointer hover:scale-105"
          onClick={changeReadOnly}
        >
          {btn}
        </button>
      )}
    </div>
  );
}
