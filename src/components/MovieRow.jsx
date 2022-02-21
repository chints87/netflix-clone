import React, { useState, useEffect } from 'react';
import movieDBInstance from '../movieDB';
import styles from '../styles/scss/MovieRow.module.scss';

// eslint-disable-next-line react/prop-types
export default function MovieRow({ categoryTitle, path, isLarge }) {
  /* The state for movieList will be populated after making an API call */
  const [movieList, setMovieList] = useState([]);
  /* This is the subdomain from where we can find images */
  const imageURL = 'https://image.tmdb.org/t/p/original';
  /* On Mounting, the API call is fired to get movie lists and on receiving we update movie state */
  useEffect(() => {
    /* Define function to call API and set movie state */
    const movieDetails = async () => {
      const fetchMovieDetails = await movieDBInstance.get(path);
      const { results } = fetchMovieDetails.data;
      setMovieList(results);
    };
    /* Call movieDetails function */
    movieDetails();
  }, [path]);

  /* This is a constant that adds an additional class style if condition is met */
  const moviePoster = [styles.moviePoster, isLarge ? styles.moviePosterHeight : null];

  console.log(movieList);

  return (
    movieList
      ? (
        <div className={styles.categoryRow}>
          <h1>{categoryTitle}</h1>
          <div className={styles.movies}>
            {/* This condition does not output an image if a link is empty or broken */}
            {movieList.map((movie) => (
              (isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path))
            && (
              <div className={styles.movieDetails}>
                <img
                  className={moviePoster.join(' ')}
                  src={`${imageURL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.name}
                />
                <p>{movie.name}</p>
              </div>
            ))}

          </div>
        </div>
      )
      : null
  );
}
