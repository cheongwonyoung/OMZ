import { instance } from '.'; 

// 게시글 GET 
export const getArticles = () => {
  return instance.get('/board');
}; 

// 게시글 상세 GET
export const getArticle = (boardId: number, memberId: number) => {
  return instance.get(`/board/${memberId}/${boardId}`)  
}; 

// 게시글 POST 
export const createArticle = (board: { boardId: number; content: string; memberId: number }) => {
  return instance.post('/board', board)  
}

// 게시글 UPDATE
export const updateArticle = (formData: FormData) => {
  const response = {
    headers: {
      'Content-Type': 'multipart/form-data', 
    },
  };
  return instance.put(`/board/`, formData, response)
}


// 게시글 DELETE 
export const deleteArticle = (boardId: number) => {
  return instance.put(`/board/delete/${boardId}`)
}

// 사용자가 쓴 글 목록 GET
export const getMemberArticle = (memberId: number) => {
  return instance.get(`/board/${memberId}`)  
}; 

// 글 좋아요
export const likeArticle = (boardId: number, memberId: number) => {
  return instance.post(`/board/${memberId}/${boardId}`,{},{})   
} 

// 글 좋아요 취소
export const dislikeArticle = (boardId: number, memberId: number) => {
  return instance.put(`/board/${memberId}/${boardId}`,{},{})   
} 

// 내가 좋아요한 글 목록 불러오기
export const likeArticles = (memberId: number) => {
  return instance.get(`/board/likes/${memberId}`)  
}; 
 
 
// 글 검색
export const searchArticles = () => {
  return instance.get('/board/search')  
}; 
  

// 댓글 작성
export const createReply = (reply: { boardId: number; content: string; memberId: number }) => {
  return instance.post('/reply', reply)  
}
  
// 댓글 수정
export const updateReply = (formData: FormData) => {
  const response = {
    headers: {
      'Content-Type': 'multipart/form-data', 
    }, 
  }; 
  return instance.put('/reply/', formData, response)  
}  

// 댓글 삭제
export const deleteReply = (replyId: number) => {
  return instance.put(`/reply/delete/${replyId}`)
}
 