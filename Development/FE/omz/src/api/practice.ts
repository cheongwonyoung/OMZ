import { instance } from ".";

export const getArticles = () => {
  return instance.get("/articles");
};

// function createNewSpot(data) {
//   const config = {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   };
//   return instance.post('/api/travel-place', data, config);
// }
