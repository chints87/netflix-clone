import React from 'react';
import styles from '../styles/scss/HomeScreen.module.scss';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';
import getMovieLists from '../fetchMovies';

// The home screen displays the Nav bar component
// and multiple movie row components

export default function HomeScreen() {
  return (
    <div className={styles.homeScreen}>
      <Nav />
      <Banner />
      {/* getMovieList is an array that contains different categories and their api path */}
      { getMovieLists.map((category) => (
        <MovieRow
          key={category.path}
          categoryTitle={category.title}
          path={category.path}
          isLarge={category.isLarge}
        />
      ))}
    </div>
  );
}
