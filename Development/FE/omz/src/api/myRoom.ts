import { djInstance, instance } from ".";

export const getMusicToPick = () => {
  return djInstance.get("/music_choice");
};

export const getMusicRecommended = async (data: {}) => {
  return await djInstance.post("music_choice/recommendation", {}, { data });
};

export const changeStateMessage = (memberId: number, stateMessage: string) => {
  return instance.put(
    `/miniroom?memberId=${memberId}&stateMessage=${stateMessage}`
  );
};
