import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CommunityBanner() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center w-full h-[100px] p-2.5">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <img
          src={images.community_img}
          className="flex-grow-0 flex-shrink-0 w-11 h-11"
        />
        <p className="flex-grow-0 flex-shrink-0 text-xl text-left">Community</p>
      </div>
      {!(location.pathname == "/community") ? (
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[10px] bg-black">
          <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
        </div>
      ) : null}
    </div>
  );
}
