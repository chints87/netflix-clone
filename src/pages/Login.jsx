import React from 'react';
import styles from '../styles/scss/Login.module.scss';

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.backgroundGradient} />
      <img
        className={styles.logo}
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="netlfix logo"
      />
      <button type="button" className={styles.signIn}>
        Sign In
      </button>
      <div className={styles.loginBody}>
        <h1>Unlimited films, TV programmes and more.</h1>
        <h4>Watch anywhere. Cancel at any time.</h4>
        <p>
          Ready to watch? Enter your email
          to create or restart your memberhship.
        </p>
        <div className={styles.emailInput}>
          <form>
            <input type="email" placeholder="Enter email address" />
            <button type="submit">GET STARTED</button>
          </form>
        </div>
      </div>
    </div>

  );
}
