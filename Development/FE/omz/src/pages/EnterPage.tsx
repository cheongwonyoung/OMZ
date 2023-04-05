import { images } from "../assets/images";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function EnterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/main");
    }, 5700);
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-[#228186]">
      <img
        className="w-full h-screen animate-fadeInOut"
        src={images.main_page}
        alt=""
      />
    </div>
  );
}
