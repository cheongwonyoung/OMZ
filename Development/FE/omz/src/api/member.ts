import { instance } from ".";

// 게시글 상세 GET (O) 
export const getMemberInfo = (memberId: number) => {
  return instance.get(`/member/info/${memberId}`)  
}; 
