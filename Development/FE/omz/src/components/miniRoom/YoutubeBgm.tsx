import { useQuery } from "react-query";
import YouTube from "react-youtube";
import { getVideoId } from "../../api/youtube";
import { useEffect } from "react";

type Props = {
  title: string;
};

export default function YoutubeBgm({ title }: Props) {
  console.log(title);
  const q = title + " official";
  const part = "snippet";
  const key = import.meta.env.VITE_YOUTUBE_API_KEY;
  const type = "video";
  const maxResult = 1;
  const regionCode = "KR";
  const { data, refetch } = useQuery(
    ["video", q],
    () => getVideoId(q, part, key, type, maxResult, regionCode),
    {
      onError(err) {
        console.log(err);
      },
      retry: 0,
      enabled: false,
    }
  );
  useEffect(() => {
    refetch();
  }, [q]);
  const videoId = data?.data.items[0].id.videoId;
  return (
    <YouTube
      className=""
      videoId={videoId}
      opts={{
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          disablekb: 1,
          loop: 1,
          playlist: { videoId },
        },
      }}
    />
  );
}
