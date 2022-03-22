/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/scss/Nav.module.scss';

// The nav bar with menu items at the top of the page

export default function Nav() {
  const [navBar, setNavBar] = useState(false);
  const navigate = useNavigate();

  // On scroll, change nav bar appearance
  const navBarTransition = () => {
    if (window.scrollY > 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  // Add listener for scroll event and trigger navBarTransition when viewport crosses 100vh
  useEffect(() => {
    window.addEventListener('scroll', navBarTransition);
    // Remove listener on unmounting
    return () => { window.removeEventListener('scroll', navBarTransition); };
  }, []);

  // CSS class for nav bar to add style based on navBarTransition state
  const navBarColor = [styles.navContent, navBar ? styles.navBackgroundColor : null];

  return (
    <div className={navBarColor.join(' ')}>
      <Link to="/">
        <img
          className={styles.logo}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="NetFlix Logo"
        />
      </Link>

      <img
        className={styles.userIcon}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        onClick={() => navigate('/login')}
        onKeyUp={() => navigate('/login')}
        role="presentation"
      />
    </div>
  );
}
