import { instance } from ".";

// 마이페이지 전체 정보 받아오기
export const getMyPageInfos = (memberId: number) => {
  return instance.get(`/mypage/${memberId}`);
};

// 마이페이지 커스텀 수정할때 정보 받아오기
export const getMyCustomInfo = (memberId: number) => {
  return instance.get(`/mypage/custom/${memberId}`);
};

// 마이페이지 정보 수정할때 정보 받아오기
export const getMyUserInfo = (memberId: number) => {
  return instance.get(`/mypage/modify/${memberId}`);
};
