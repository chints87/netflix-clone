import React from 'react';
import styles from '../styles/scss/HomeScreen.module.scss';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';
import getMovieLists from '../fetchMovies';

export default function HomeScreen() {
  // Array of api paths
  return (
    <div className={styles.homeScreen}>
      <Nav />
      <Banner />
      { getMovieLists.map((category) => {
        console.log(category.path);
        return (
          <MovieRow
            categoryTitle={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}
