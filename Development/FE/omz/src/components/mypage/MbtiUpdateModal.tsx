import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import MbtiList from "../signUp/MbtiList";
type Props = {
  handlePickedMbti(i: any): void;
  pickedMbti: string;
  plusPage(): void;
};

export default function MbtiUpdateModal(
  props: any,
  { handlePickedMbti, pickedMbti, plusPage }: Props
) {
  // window.onkeydowm = function (event) {
  //   if (event.keyCode == 27) {
  //     props.onCancel();
  //   }
  // };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div
          id="배경"
          onClick={() => props.onCancel()}
          className="absolute opacity-25 w-full h-full inset-0 bg-black"
        ></div>
        <div className="relative w-auto mx-auto max-w-3xl">
          {/*content*/}
          <div className="p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            {/*header*/}
            <div className="flex justify-between items-center">
              <img src={images.my_page_img} alt="" className="w-10 h-10" />
              <p>MBTI</p>
              <button onClick={() => props.onCancel()}>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  className="hover:text-red-500"
                  onClick={() => props.onCancel()}
                />
              </button>
            </div>

            {/*body*/}
            {/* <div className="flex flex-col justify-end items-center"> */}
            <MbtiList
              handlePickedMbti={handlePickedMbti}
              pickedMbti={pickedMbti}
            />
            {/* </div> */}
            {/*footer*/}
            <div className="flex items-center justify-between p-6 gap-5">
              <button>저장</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
