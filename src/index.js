// import axios here
const axios = require('axios');
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  const forMovies = axios.get(url)
      .then((response) => {
        return response;
      });
  return forMovies;
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  const oneMovie = axios.get(url)
    .then((response) => {
      return response;
    })
    .then((result) => {
      return result.data;
    });
  return oneMovie;
}

const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  const idFailure = axios.get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response.status;
    })
  return idFailure
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}