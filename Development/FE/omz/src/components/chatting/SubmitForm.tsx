import { useState, useCallback } from "react";

const SubmitForm = (props: any) => {
  const [ms, setMs] = useState("");
  // const {sendMessage, ms, setMs} = props;
  const { sendMessage } = props;

  const _onChange = useCallback((e) => {
    setMs(e.target.value);
  }, []);

  return (
    <>
      <input value={ms} onChange={_onChange} name={"ms"} />
      <button
        type={"button"}
        onClick={() => {
          sendMessage(ms);
          setMs("");
        }}
      >
        전송
      </button>
    </>
  );
};
export default SubmitForm;
