import { djInstance } from ".";

export const getMusicToPick = () => {
  return djInstance.get("/music_choice");
};

export const getMusicRecommended = async (data: {}) => {
  return await djInstance.post("music_choice/recommendation", {}, { data });
};
