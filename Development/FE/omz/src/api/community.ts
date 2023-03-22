import { instance } from '.'; 

// 게시글 GET 
export const getArticles = () => {
  return instance.get('/api/board');
}; 

// 게시글 POST 
export const createArticle = (formData: FormData) => {
  const response = {
    headers: {
      'Content-Type': 'multipart/form-data', 
    }, 
  }; 
  return instance.post('/api/board', formData, response)  
}

// 게시글 UPDATE
export const updateArticle = ({id, formData}: {id: number; formData:FormData;}) => {
  const response = {
    headers: {
      'Content-Type': 'multipart/form-data', 
    },
  };
  return instance.patch(`/api/board/${id}`, formData, response)
}


// 게시글 DELETE 
export const deleteArticle = (id: number) => {
  return instance.delete(`/api/board/delete/${id}`)
}
