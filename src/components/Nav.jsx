/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import styles from '../styles/scss/Nav.module.scss';

export default function Nav() {
  const [navBar, setNavBar] = useState(false);

  const navBarTransition = () => {
    if (window.scrollY > 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', navBarTransition);
    return () => { window.removeEventListener('scroll', navBarTransition); };
  }, []);

  const navBarColor = [styles.navContent, navBar ? styles.navBackgroundColor : null];
  console.log(navBarColor);

  return (
    <div className={navBarColor.join(' ')}>
      <img
        className={styles.logo}
        src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
        alt=""
      />
      <img
        className={styles.userIcon}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
  );
}
