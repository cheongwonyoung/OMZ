import { useQuery } from "react-query";
import { getMusicToPick } from "../../api/miniRoom";
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
    <div className="flex flex-col w-full items-center gap-5">
      <p className="mt-5">좋아하는 음악을 선택해주세요! (최대 3개)</p>
      <div className="flex flex-col items-center gap-2 w-full ">
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
        className="w-[60%] max-w-sm flex justify-center items-center px-6 py-2 border border-black font-bold rounded-md bg-white/50 cursor-pointer hover:bg-black/20"
        onClick={plusPage}
      >
        선택 완료
      </button>
    </div>
  );
}
