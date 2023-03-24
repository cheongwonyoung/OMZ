import { instance } from '.'; 

// 게시글 GET (O) 
export const getArticles = () => {
  return instance.get('/board');
}; 

// 게시글 상세 GET (O) 
export const getArticle = (boardId: number, memberId: number) => {
  return instance.get(`/board/${memberId}/${boardId}`)  
}; 

// 게시글 POST  
export const createArticle = (board: { content: string; file: File; memberId: number }) => {
  const formData = new FormData();
  const boardInfo = {
    content: board.content,
    memberId: board.memberId, 
  }
  formData.append('dto', JSON.stringify(boardInfo)) 
  formData.append('file', board.file) 
 
  return instance.post('/board', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', 
    }
  })  
}

// 게시글 UPDATE
export const updateArticle = (board: { boardId: number, content: string; file: File; memberId: number }) => {
  const formData = new FormData();
  const boardInfo = {
    content: board.content, 
    memberId: board.memberId, 
  }
  formData.append('dto', JSON.stringify(boardInfo))
  formData.append('file', board.file)

  return instance.put(`/board/${board.boardId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data' 
    }
  })
}


// 게시글 DELETE (O)
export const deleteArticle = (boardId: number) => {
  return instance.delete(`/board/${boardId}`)
}

// 사용자가 쓴 글 목록 GET (O) 
export const getMemberArticle = (memberId: number) => {
  return instance.get(`/board/${memberId}`)  
}; 

// 글 좋아요
export const likeArticle = (boardId: number, memberId: number) => {
  return instance.post(`/board/${memberId}/${boardId}`)   
} 

// 글 좋아요 취소
export const dislikeArticle = (boardId: number, memberId: number) => {
  return instance.put(`/board/${memberId}/${boardId}`)   
} 

// 내가 좋아요한 글 목록 불러오기 (O) 
export const likeArticles = (memberId: number) => {
  return instance.get(`/board/likes/${memberId}`)  
}; 
 
 
// 글 검색 (O)
export const searchArticles = (memberId: number, key: string, word: string) => {
  return instance.get(`/board/search/${memberId}/${key}/${word}`)  
}; 
  

// 댓글 작성 (O) 
export const createReply = (reply: { boardId: number; content: string; memberId: number }) => {
  return instance.post('/reply', reply)  
}
  
// 댓글 수정 (O)
export const updateReply = (replyId: number, reply: { boardId: number; content: string; memberId: number }) => {
  return instance.put(`/reply/${replyId}`, reply)   
}  

// 댓글 삭제 (O) 
export const deleteReply = (replyId: number) => {
  return instance.delete(`/reply/${replyId}`)
}
 