import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function DeleteModal(props: any) {
  // esc 누르면 모달 사라지게 하기
  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        {/* 백드롭 선택하면 꺼지게 하기  */}
        <div
          id="배경"
          onClick={() => props.onCancel()}
          className="absolute opacity-25 w-full h-full inset-0 bg-black"
        ></div>
        <div className="relative w-auto mx-auto max-w-3xl">
          <div className="p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            {/* 버튼 클릭하면 꺼지게 하기 */}
            <button onClick={() => props.onCancel()}>
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
