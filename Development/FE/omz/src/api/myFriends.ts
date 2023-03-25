import { instance } from ".";

// 친구 목록 리스트 얻기
export const getMyFriendsList = (memberId: number) => {
  return instance.get(`/friend/${memberId}`);
};

// TODO 여기 아래로 아직 적용 안함 컹스
// 친구 삭제
export const removeFriend = (toMemberId: number, fromMemberId: number) => {
  return instance.post(`/friend/${toMemberId}/${fromMemberId}`);
};

// 친구 신청에 대한 수락
export const acceptProposal = (friendId: number) => {
  return instance.put(`/friend/accept/${friendId}`);
};

// 친구 신청에 대한 거절
export const rejectProposal = (friendId: number) => {
  return instance.delete(`/friend/reject/${friendId}`);
};

// 나에게로 친구 신청 리스트
export const getProposalList = async (memberId: number) => {
  return instance.get(`/friend/waiting/${memberId}`);
};
