import axios from 'axios';

// The URL for the API of the movie database
const movieDBInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default movieDBInstance;
