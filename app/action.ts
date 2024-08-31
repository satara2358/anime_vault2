"use server"
// Todo lo que se ejecute en este script se ejecutará como una server action

export const fetchAnime = async (page: number) => {
  //const response = await  fetch("https://shikimori.one/api/animes");
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`);

  const data = await response.json();

  console.log(data)

  return data;
}