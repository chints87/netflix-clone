// Find key in .env.local in the root folder
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

// Object containing api paths to fetch different movie genres
// isLarge is added to give an option to choose either a poster or
// or backdrop images available in the api
const getMovieLists = [
  {
    title: 'NETFLIX ORIGINALS',
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: true,
  },
  {
    title: 'Trending',
    path: `/trending/all/week?api_key=${API_KEY}`,
    isLarge: false,
  },
  {
    title: 'Top Rated',
    path: `/discover/movie?api_key=${API_KEY}`,
    isLarge: false,
  },
  {
    title: 'Action',
    path: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
    isLarge: false,
  },
  {
    title: 'Comedy',
    path: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    title: 'Horror',
    path: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    isLarge: false,
  },
  {
    title: 'Romance',
    path: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
  },
  {
    title: 'Documentaries',
    path: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
];

export default getMovieLists;
