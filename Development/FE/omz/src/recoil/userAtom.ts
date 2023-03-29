import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// TODO 나중에 유저정보 추가해야함
// 유저정보를 새로운 atom에다가 할지 기존 atom에 입력할지
export const userToken = atom({
  key: "userToken",
  default: {
    access_token: "",
    refresh_token: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const userStatus = atom({
  key: "userStatus",
  default: {
    id: 2,
    nickname: "",
    profile_img: "",
  },
  effects_UNSTABLE: [persistAtom],
});
