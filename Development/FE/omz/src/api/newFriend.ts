import { djInstance, instance } from ".";

// 친구 신청
interface Friend {
  [key: string]: string | number;
}
export const friendProposal = (friend: Friend) => {
  return instance.post("/friend", friend);
};

export const searchFriend = (memberId: number, word: string) => {
  return instance.get(`/friend/${memberId}/${word}`);
};

export const getFriendRecommend = (memberId: number) => {
  return djInstance.get(`/reco_friend/?memberId=${memberId}`);
};
