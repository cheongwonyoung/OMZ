import { useQuery } from "react-query";
import YouTube from "react-youtube";
import { getVideoId } from "../../api/youtube";

type Props = {
  videoId: string;
};

export default function YoutubeBgm({ videoId }: Props) {

  return (
    <YouTube
      className=""
      videoId={videoId}
      opts={{
        width: "246",
        height: "120",
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
