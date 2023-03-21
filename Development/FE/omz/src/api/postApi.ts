export{}
// import { instance } from '.';
// import { IPostResponse, IPostsResponse } from './types';

// TODO: api 나오면 맞게 바꿔야 함 !!  
// Community 관련 api 

// export const getAllCommunityPosts = () => {
//   return instance.get<IPostsResponse>('/community') 
// }  

// export const getCommunityPost = (id: string) => {
//   return instance.get<IPostResponse>(`/community/${id}`) 
// } 

// export const createCommunity = (formData: FormData) => {
//   const response = {
//     headers: {
//       'Content-Type': 'multipart/form-data', 
//     },
//   };
//   return instance.post<IPostResponse>('/community', formData, response) 
// } 

// export const updateCommunity = ({id, formData} : {id: string; formData: FormData;}) => {
//   const response = {
//     headers: {
//       'Content-Type': 'multipart/form-data', 
//     },
//   }; 
//   return instance.patch<IPostResponse>(`community/${id}`, formData, response) 
// } 

// export const deleteCommunity = (id: string) => {
//   return instance.delete<GenericResponse>(`posts/${id}`);
// }
