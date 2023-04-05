import { useState, useCallback, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmitForm = (props: any) => {
  const [ms, setMs] = useState("");
  const { sendMessage } = props;

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      onClick();
    }
  };

  const onClick = () => {
    if (ms.trim().length < 1) {
      toast.error("공백은 입력이 불가합니다.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else {
      sendMessage(ms);
      setMs("");
    }
  };
  const onChange = useCallback((e: any) => {
    setMs(e.target.value);
  }, []);

  return (
    <div className="max-w-3xl w-full flex justify-center bottom-0 fixed my-5">
      <ToastContainer />
      <button
        type={"button"}
        onClick={onClick}
        className="absolute right-0 text-[15px] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] border-black border-2"
        id="btn"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
      <input
        value={ms}
        onChange={onChange}
        onKeyDown={onKeyDown}
        name={"ms"}
        placeholder="메세지를 입력해주세요"
        className="w-full h-[40px] border text-sm text-left text-[#3d3d3d] border-slate-500 rounded-full pl-4 focus:outline-none focus:ring focus:ring-E2EDFF"
      />
    </div>
  );
};

export default SubmitForm;
