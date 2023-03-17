import { images } from "../../assets/images";
import BackBtn from "../common/BackBtn";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ChattingInfoBar() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex w-full justify-between items-center p-2.5 border-t-0 border-r-0 border-b border-l-0 border-black">
      <div className="flex items-center">
        <img
          src={images.my_page_img}
          alt=""
          className="h-12 aspect-square mr-4"
        />
        <div className="flex flex-col justify-evenly items-start">
          <p className="font-bold">상대 닉네임</p>
          {/* TODO: 친구 아닐 때는 나오게 아니면 안나오게 하기  */}
          <div className="flex justify-center items-center relative rounded-[10px] bg-[#030303]">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-[3px]">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-white">
                친구 추가
              </p>
            </div>
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </div>
        </div>
      </div>
      <div className="w-10 h-10 flex content-center">
        <BackBtn goBack={goBack} />
      </div>
    </div>
  );
}
