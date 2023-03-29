import { instance } from '.';

// 채팅방 목록 조회 
export const getChatting = (memberId: number) => {
  return instance.get('/chatting', {
    params: {
      memberId: memberId, 
    }
  }); 
}

// 채팅방 대화 내역 불러오기
export const getChattingList = (roomId: number, chatPagingDto : {cursor: string, memberId: number, message: string, nickname: string}) => {
  return instance.post(`/chatting/${roomId}`, chatPagingDto) 
}  

