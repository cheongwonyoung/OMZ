import { instance } from ".";

// 유저 정보 GET
export const getMemberInfo = (access_token: string) => {
  return instance.get(`/member/info`, {
    headers: {
      access_token: access_token,
    },
  });
};
