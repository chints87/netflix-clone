import React, { useState, useEffect } from 'react';
import styles from '../styles/scss/Banner.module.scss';
import movieDBInstance from '../movieDB';
import getMovieLists from '../fetchMovies';

// Displays a single movie banner by fetching data from
// an api and using that data to display a poster and description

export default function Banner() {
  // State to show movie in the banner
  const [movie, setMovie] = useState();
  // Fetch movie from the database upon mounting
  useEffect(() => {
    const fetchMovie = async () => {
      const request = await movieDBInstance.get(getMovieLists[3].path);
      // Update state upon receiving data
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    };
    fetchMovie();
  }, []);
  // Function limits description to n letters
  const truncate = (string, n) => {
    if (string) {
      if (string.length > n) {
        return `${string.substr(0, n - 1)}...`;
      }
      return string;
    }
    return null;
  };
  return (
    movie
      ? (
        <header
          className={styles.banner}
          style={{
            backgroundPosition: 'top center',
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
            backgroundSize: 'cover',
          }}
        >
          <div className={styles.bannerContents}>
            <h1 className={styles.movieTitle}>
              {movie.title || movie.name || movie.original_name}

            </h1>
            <div className={styles.bannerButtons}>
              <button type="button">Play</button>
              <button type="button">My List</button>
            </div>
            <h1 className={styles.movieDescription}>
              {truncate(movie.overview, 300)}
            </h1>
          </div>
          <div className={styles.bannerFade} />
        </header>
      )
      : null
  );
}
