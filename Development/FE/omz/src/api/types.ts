// export interface IPostRequest {
//   content: string; 
//   image: string;
//   user: string; 
// }

// export interface IPostResponse {
//   id: string;
//   content: string;
//   image: string;
//   // user: IUser;
//   user: string; 
//   created_at: string;
//   updated_at: string; 
// }

// export interface IPostsResponse {
//   status: string;
//   data: {
//     posts: IPostResponse[]; 
//   }; 
// }

// export interface CommunityArticle {
//   id?: string; 
//   content?: string; 
//   // image: string; 
// }

class Article {
  id: string; 
  content: string; 
  constructor(articleText: string) {
    this.content = articleText; 
    this.id = new Date().toISOString();
  }
}

export default Article; 