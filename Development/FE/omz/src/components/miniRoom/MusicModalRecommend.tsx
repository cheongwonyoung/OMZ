import { useMutation, useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getMusicRecommended } from "../../api/miniRoom";
import MusicModalItem from "./MusicModalItem";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { userStatus } from "../../recoil/userAtom";
import { updateBGM } from "../../api/miniRoom";
import { getVideoId } from "../../api/youtube";

type Props = {
  musicSelected: string[];
  closeMusic(): void;
  message: string;
  bgmRefetch(): void;
};

type music = {
  Title: string;
  Genre: string;
  Artist: string;
};

type bgm = {
  title: string;
  singer: string;
};

export default function MusicModalRecommend({
  musicSelected,
  message,
  closeMusic,
  bgmRefetch,
}: Props) {
  const memberId = useParams().id;

  // BGM을 DB에 저장
  const handleClick = (bgm: any) => {
    const info = { title: bgm.Title, singer: bgm.Artist };
    changeBGM.mutate(info);
  };
  const [bgm, setBgm] = useState({ Artist: "", Title: "" });


  const q = bgm.Title +  " " + bgm.Artist + " official";
  const part = "snippet";
  const key = import.meta.env.VITE_YOUTUBE_API_KEY;
  const type = "video";
  const maxResult = 1;
  const regionCode = "KR";
  const getMusicKey = useMutation(()=> getVideoId(q, part, key, type, maxResult, regionCode),{
    onSuccess(data) {
      const videoId = data?.data.items[0].id.videoId
      const info = { title: videoId, singer: bgm.Artist }
      changeBGM.mutate(info)
    },
  })

  const handleClick2 = () => {
    getMusicKey.mutate()
  };

  const changeBGM = useMutation(
    (body: { title: string; singer: string }) =>
      updateBGM(Number(memberId), body),
    {
      onSuccess() {
        closeMusic();
        bgmRefetch();
      },
    }
  );

  // 음악 추천
  const { data } = useQuery(
    "musicRecommend",
    () => getMusicRecommended({ message, songs: musicSelected }),
    { staleTime: 0 }
  );

  const selectBgm = (item: {
    Title: string;
    Artist: string;
    Genre?: string;
  }) => {
    setBgm({ ...bgm, Title: item.Title, Artist: item.Artist });
  };
  return (
    <div className="flex flex-col w-full items-center gap-5 mt-5">
      <div className="flex flex-col gap-2 items-center w-full mt-4">
        {data?.data.map((music: music) => (
          <MusicModalItem
            music={music}
            key={uuidv4()}
            selectBgm={selectBgm}
            bgm={bgm}
          />
        ))}
      </div>
      <button
        className="w-[60%] max-w-sm flex justify-center items-center px-6 py-2 border border-black font-bold rounded-md bg-white/50 cursor-pointer hover:bg-black/20"
        onClick={
          handleClick2}
      >
        선택 완료
      </button>
    </div>
  );
}
