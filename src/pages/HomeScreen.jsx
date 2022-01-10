import React from 'react';
import styles from '../styles/scss/HomeScreen.module.scss';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

export default function HomeScreen() {
  return (
    <div className={styles.homeScreen}>
      <Nav />
      <Banner />
      {/* Movie Categories */}
    </div>
  );
}
