import axios from "axios";
// export const people = [
//   { id: 1, name: "parsh", age: 27, gender: "female" },
//   { id: 2, name: "kimjk", age: 27, gender: "female" },
//   { id: 3, name: "Songsm", age: 24, gender: "female" },
//   { id: 4, name: "Hwangsh", age: 23, gender: "female" },
//   { id: 5, name: "Yjw", age: 29, gender: "female" },
//   { id: 6, name: "kimmj", age: 23, gender: "female" },
// ];

// export let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The new one",
//     score: 0.1,
//   },
//   {
//     id: 1,
//     name: "Avengers - The new one",
//     score: 8,
//   },
//   {
//     id: 2,
//     name: "The GodFather",
//     score: 99,
//   },
//   {
//     id: 3,
//     name: "EXIT",
//     score: 2,
//   },
// ];
// https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=9
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DEATAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
console.log("hihi", MOVIE_DEATAILS_URL);
export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });

  return movies;
};
export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DEATAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};
export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
// export const getById = (id) => {
//   const filteredMovies = movies.filter((movie) => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleandMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.length > cleandMovies.length) {
//     movies = cleandMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: movies.length + 1,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };

// console.log("delete", deleteMovie(2));
// console.log("movies", movies);
// console.log("이거냐? ", movies.length);
