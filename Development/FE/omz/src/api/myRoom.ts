import axios from "axios";

// 음악추천 api Django Url
const djInstance = axios.create({
  // baseURL: "http://localhosst:8000",
  baseURL: "http://127.0.0.1:8000",
  headers: { "Content-Type": "application/json" },
});

export const getMusicToPick = () => {
  return djInstance.get("/music_choice");
};

export const getMusicRecommended = async (data: {}) => {
  return await djInstance.post("music_choice/recommendation", {}, { data });
};
