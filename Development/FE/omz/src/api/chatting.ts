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
export const getChattingList = (roomId: number, memberId: number, chatPagingDto : {cursor: string, memberId: number, message: string, nickname: string} | null) => {
  return instance.post(`/chatting/${roomId}?memberId=${memberId}`, chatPagingDto) 
}  


//채팅 상대방 친구 추가
export const addFriends = (chatMembersInfo: {
  chatOtherInfo: {
    file: string, 
    friendState: number, 
    memberId: number, 
    nickname: string
  }, 
  memberId: number
}) => {
  return instance.post(`/chatting/addFriend`, chatMembersInfo) 
}

// 친구에게 말 걸기 
export const talkToFriends = (memberId: number, friendMemberId: number) => {
  return instance.get(`/chatting/${memberId}/${friendMemberId}`)      
}; 
