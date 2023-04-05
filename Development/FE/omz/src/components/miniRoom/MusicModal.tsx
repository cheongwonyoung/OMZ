import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import MusicModalToPick from "./MusicModalToPick";
import MusicModalRecommend from "./MusicModalRecommend";
type Props = {
  closeMusic(): void;
  message: string;
};
export default function MusicModal({ closeMusic, message }: Props) {
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
          />
        );
    }
  };

  return (
    <div className="w-[80vw] h-full flex flex-col items-center pt-8">
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute right-4 top-4"
        onClick={closeMusic}
      />
      <p className="text-2xl text-purple-500">추천 BGM</p>
      <div className="w-full p-4"></div>
      {step()}
    </div>
  );
  // <div className="relative w-full h-full flex flex-col items-center pt-8">

  {
    /* </div> */
  }
}
