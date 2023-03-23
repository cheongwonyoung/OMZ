type Props = {
  music: {
    Title: string;
    Genre: string;
    Artist: string;
  };
  selectMusic?(name: string | undefined): void;
  musicSelected?: string[];
  selectBgm?(item: { Title: string; Artist: string }): void;
  bgm?: { Title: string; Artist: string };
};

export default function MusicModalItem({
  music,
  selectMusic,
  musicSelected,
  bgm,
  selectBgm,
}: Props) {
  const notPicked = "w-3 h-3 rounded-full";
  const picked = "bg-purple-400 w-3 h-3 rounded-full";

  const clickRadio = () => {
    if (selectMusic && musicSelected)
      musicSelected.length === 3 && !musicSelected.includes(music.Title)
        ? alert("최대 3개까지 선택해주세요.")
        : selectMusic(music.Title);
    if (selectBgm) selectBgm(music);
  };

  const radioBtnStatus = () => {
    if (musicSelected)
      return musicSelected.includes(music.Title) ? picked : notPicked;
    if (bgm) return bgm.Title === music.Title ? picked : notPicked;
  };

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="w-10/12 flex">
          <p className="truncate w-3/4 whitespace-nowrap">{music.Title}</p>
          <p className="w-1/4 truncate whitespace-nowrap">{music.Artist}</p>
        </div>
        <div
          className="w-4 h-4 rounded-full border border-solid border-violet-300 flex justify-center items-center cursor-pointer"
          onClick={clickRadio}
        >
          <div className={radioBtnStatus()}></div>
        </div>
      </div>
      <div className="w-full bg-violet-500 h-px"></div>
    </div>
  );
}
