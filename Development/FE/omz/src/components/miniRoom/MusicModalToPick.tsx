import { useQuery } from "react-query";
import { getMusicToPick } from "../../api/myRoom";
import MusicModalItem from "./MusicModalItem";
import { v4 as uuidv4 } from "uuid";

type Music = {
  [key: string]: string;
};
type Props = {
  plusPage(): void;
  musicSelected: string[];
  selectMusic(name: string): void;
};
export default function MusicModalToPick({
  plusPage,
  musicSelected,
  selectMusic,
}: Props) {
  const { data } = useQuery("musicsToPick", getMusicToPick, { staleTime: 0 });

  return (
    <div className="flex flex-col w-full items-center">
      <p>듣고싶은 음악을 선택해주세요</p>
      <p>최대 3개</p>
      <div className="flex flex-col gap-2 w-full mt-4">
        {/* {data?.data.map((music: music) => ( */}
        {data?.data.map((music: Music) => (
          <MusicModalItem
            music={music}
            key={uuidv4()}
            selectMusic={selectMusic}
            musicSelected={musicSelected}
          />
        ))}
      </div>
      <button
        className="h-12 w-3/5 shadow shadow-pink-400 rounded-xl mt-4 font-bold text-xl"
        onClick={plusPage}
      >
        선택 완료
      </button>
    </div>
  );
}
