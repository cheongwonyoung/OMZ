import { useMutation, useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getMusicRecommended } from "../../api/miniRoom";
import MusicModalItem from "./MusicModalItem";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { userStatus } from "../../recoil/userAtom";
import { updateBGM } from "../../api/miniRoom";

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
  const changeBGM = useMutation(
    (body: { title: string; singer: string }) =>
      updateBGM(Number(memberId), body),
    {
      onSuccess() {
        console.log("bgm update 성공");
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

  const [bgm, setBgm] = useState({ Artist: "", Title: "" });
  const selectBgm = (item: {
    Title: string;
    Artist: string;
    Genre?: string;
  }) => {
    setBgm({ ...bgm, Title: item.Title, Artist: item.Artist });
  };
  return (
    <div className="flex flex-col w-full items-center">
      <p>배경음악을 선택해주세요</p>
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
        className="h-12 w-3/5 shadow shadow-pink-400 rounded-xl mt-4 font-bold text-xl"
        onClick={() => {
          handleClick(bgm);
        }}
      >
        선택 완료
      </button>
    </div>
  );
}
