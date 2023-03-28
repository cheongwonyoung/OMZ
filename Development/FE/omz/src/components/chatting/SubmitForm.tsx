import { useState, useCallback, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SubmitForm = (props: any) => {
  const [ms, setMs] = useState("");
  // const {sendMessage, ms, setMs} = props;
  const { sendMessage } = props;

  // const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key == "Enter") {
  //     onClick();
  //   }
  // };

  const onClick = () => {
    if (ms.trim().length < 1) {
      alert("공백은 입력이 안된다구요~");
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
    <>
      <div className="w-full flex justify-center bottom-0 fixed">
        <div className="w-full flex justify-center">
          <div className="w-[80%] relative flex my-5">
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
              // onKeyDown={onKeyDown}
              name={"ms"}
              placeholder="메세지를 입력해주세요"
              className="w-full h-[40px] border text-sm text-left text-[#3d3d3d] border-slate-500 rounded-xl pl-4 focus:outline-none focus:ring focus:ring-E2EDFF"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitForm;
