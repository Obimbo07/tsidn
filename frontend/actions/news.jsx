// 'use server';

// export default async function getNews() {
//     const res = await fetch( `${process.env.REACT_APP_DATABASE_API}/api/selectPodcasts`);
  
//     if (!res.ok) {
//       throw new Error('Failed to fetch News');
//     }
  
//     const result = await res.json();
//     return result.data;
// }