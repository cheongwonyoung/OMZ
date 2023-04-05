import { useNavigate } from "react-router-dom";
import BackBtn from "../common/BackBtn";

type Props = {
  icon: string;
  title: string;
  goto?: string;
};

export default function TitleBar({ icon, title, goto }: Props) {
  const navigate = useNavigate();
  const goBack = () => {
    if (goto) navigate(goto);
  };

  return (
    <div className="flex w-11/12 justify-between items-center p-2.5 mt-2 ">
      <div className="flex items-center">
        <img src={icon} alt="" className="h-12 aspect-square mr-4" />
        <p className="title text-xl">{title}</p>
      </div>
      <div className="w-10 h-10 flex content-center">
        <BackBtn goBack={goBack} />
      </div>
    </div>
  );
}
