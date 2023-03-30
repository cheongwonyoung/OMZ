import { instance } from ".";

// 마이페이지 전체 정보 받아오기
export const getMyPageInfos = (memberId: number) => {
  return instance.get(`/mypage/${memberId}`);
};

// 마이페이지 커스텀 수정할때 정보 받아오기
export const getMyCustomInfo = (memberId: number) => {
  return instance.get(`/mypage/custom/${memberId}`);
};

// 마이페이지 커스텀 수정
export const updateCustom = (
  memberId: number,
  data: { name: string; state: number }[]
) => {
  return instance.put(`/mypage/custom/${memberId}`, data);
};

// 마이페이지 정보 수정할때 정보 받아오기
export const getMyUserInfo = (memberId: number) => {
  return instance.get(`/mypage/modify/${memberId}`);
};

// 마이페이지 닉네임 변경
export const updateMyName = (memberId: number, nickname: string) => {
  return instance.put(`/mypage/modify/nickname/${memberId}/${nickname}`);
};

// 마이페이지 MBTI 변경
export const updateMyMbti = (memberId: number, mbti: string) => {
  return instance.put(`/mypage/modify/mbti/${memberId}/${mbti}`);
};

// 마이페이지 선호 동물상 변경
export const updateMyPreference = (
  memberId: number,
  faceInfo: { [key: string]: number }
) => {
  return instance.put(`/mypage/modify/face/${memberId}`, faceInfo);
};

export const changeProfileImg = (data: any, token: string) => {
  const config = {
    headers: { access_token: token, "Content-Type": "multipart/form-data" },
  };
  return instance.patch("/member/image", data, config);
};
