import axios from "axios";

// youtube video id 불러오는 api
const YoutubeInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search?",
  headers: { "Content-Type": "application/json" },
});

export const getVideoId = (q: string, part: string, key: string, type: string, maxResult: number, regionCode: string) => {
  return YoutubeInstance.get("/", {
    params: {
      q: q,
      part : part,
      key : key,
      type : type,
      maxResult : maxResult,
      regionCode : regionCode
    }
  });
};
