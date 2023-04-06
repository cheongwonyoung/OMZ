import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import MusicModalToPick from "./MusicModalToPick";
import MusicModalRecommend from "./MusicModalRecommend";
import { images } from "../../assets/images";
type Props = {
  closeMusic(): void;
  message: string;
  bgmRefetch(): void;
};
export default function MusicModal({ closeMusic, message, bgmRefetch }: Props) {
  const [page, setPage] = useState(0);
  const plusPage = () => {
    setPage((prev) => prev + 1);
  };

  const [musicSelected, setMusicSelected] = useState<string[]>([]);
  const selectMusic = (name: string) => {
    if (musicSelected.includes(name)) {
      setMusicSelected(musicSelected.filter((item) => item != name));
    } else {
      setMusicSelected([...musicSelected, name]);
    }
  };

  const step = () => {
    switch (page) {
      case 0:
        return (
          <MusicModalToPick
            plusPage={plusPage}
            musicSelected={musicSelected}
            selectMusic={selectMusic}
          />
        );
      case 1:
        return (
          <MusicModalRecommend
            musicSelected={musicSelected}
            message={message}
            closeMusic={closeMusic}
            bgmRefetch={bgmRefetch}
          />
        );
    }
  };

  return (
    <div className="w-[80vw] h-full flex flex-col items-center pt-8">
      <div className="flex items-center justify-between w-10/12">
        <div className="flex items-top gap-2">
        <img src={images.mini_room_img} alt="" className="w-10"/>
        <p className="text-xl font-bold pt-0.5">오늘의 추천 BGM</p>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          size="lg"
          className="hover:text-red-500 cursor-pointer"
          onClick={closeMusic}
        />
      </div>
      {step()}
    </div>
  );
}
