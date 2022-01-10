import React from 'react';
import styles from '../styles/scss/Banner.module.scss';

export default function Banner() {
  // Function to limit description to n letters
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
    <header
      className={styles.banner}
      style={{
        backgroundPosition: 'center center',
        backgroundImage: 'url("https://i.imgur.com/e1hLQ2m.png")',
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.bannerContents}>
        <h1 className={styles.movieTitle}>Movie Name</h1>
        <div className={styles.bannerButtons}>
          <button type="button">Play</button>
          <button type="button">My List</button>
        </div>
        <h1 className={styles.movieDescription}>
          {truncate(
            'Commodo ipsum id cupidatat sit do magna excepteur tempor sint fugiat ea. Ea sint duis deserunt laboris tempor sint fugiat ea. Ea sint duis deserunt laboris',
            10,
          )}
        </h1>
      </div>
      <div className={styles.bannerFade} />
    </header>
  );
}
