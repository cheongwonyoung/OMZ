import { useQuery } from "react-query";
import YouTube from "react-youtube";
import { getVideoId } from "../../api/youtube";

type Props = {
  title: string;
};

export default function YoutubeBgm({ title }: Props) {
  const q = title + " official";
  const part = "snippet";
  const key = import.meta.env.VITE_YOUTUBE_API_KEY;
  const type = "video";
  const maxResult = 1;
  const regionCode = "KR";
  const { data } = useQuery(["video", q], () =>
    getVideoId(q, part, key, type, maxResult, regionCode)
  );
  const videoId = data?.data.items[0].id.videoId;
  // console.log(videoId);
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
