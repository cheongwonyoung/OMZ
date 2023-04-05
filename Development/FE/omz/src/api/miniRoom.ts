import { djInstance, instance } from ".";

export const getMusicToPick = () => {
  return djInstance.get("/music_choice/");
};

export const getMusicRecommended = (data: {}) => {
  return djInstance.post("/music_choice/recommendation", {}, { data });
};

// BGM 조회
export const getBGM = (miniRoomId: number) => {
  return instance.get(`/miniroom/music?miniRoomId=${miniRoomId}`);
};

// BGM 업데이트
export const updateBGM = (
  miniRoomId: number,
  info: { singer: string; title: string }[]
) => {
  return instance.post(`/miniroom/music?miniRoomId=${miniRoomId}`, info);
};

// 상태 메세지 조회
export const getStateMessage = (id: string) => {
  return instance.get(`/miniroom/?memberId=${id}`);
};

// 상태 메시지 수정
export const changeStateMessage = (memberId: number, stateMessage: string) => {
  return instance.put(
    `/miniroom?memberId=${memberId}&stateMessage=${stateMessage}`
  );
};

// 미니룸 불러오기
export const getMiniRoom = (memberId: number) => {
  return instance.get(`/miniroom/3d/?memberId=${memberId}`);
};

// 미니룸 커스텀
export const updateMiniRoom = (
  memberId: number,
  info: { name: string; state: number }[]
) => {
  return instance.put(`/miniroom/3d/${memberId}`, info);
};

// // 좋아요 수 조회
export const getLikes = (friendId: number, myId: number) => {
  return instance.get(`/miniroom/like/?friendId=${friendId}&myId=${myId}`);
};

// 좋아요 클릭
export const likeMiniroom = (
  isLiked: boolean,
  friendId: number,
  myId: number
) => {
  return instance.put(
    `/miniroom/like/?isLiked=${isLiked}&friendId=${friendId}&myId=${myId}`
  );
};

// 방명록 조회
export const getGuestBooks = (friendId: number) => {
  return instance.get(`/guestbook/?memberId=${friendId}`);
};

// 방명록 작성
export const writeGuestBook = (guestBook: {
  content: string;
  friendId: number;
  memberId: number;
}) => {
  return instance.post(`/guestbook`, guestBook);
};

// 방명록 삭제
export const deleteGuestBook = (guestBookId: number) => {
  return instance.put(`/guestbook/?guestBookId=${guestBookId}`);
};
