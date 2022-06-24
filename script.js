//const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ea2b9f6ad8fc9053a1441fec10b6db8b&page=1';
//const IMGPATH = "https://wallpaperaccess.com/sukuna-4k"
//const SEARCHAPI ="https://api.themoviedb.org/3/movie/550?api_key=ea2b9f6ad8fc9053a1441fec10b6db8b"
const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=ea2b9f6ad8fc9053a1441fec10b6db8b';
const main = document.querySelector('main');
const search = document.querySelector('search');
const form = document.querySelector('form');
searchBtn=document.querySelector("button");
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data));
  