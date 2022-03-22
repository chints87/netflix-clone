import React, { useState } from 'react';
import styles from '../styles/scss/Login.module.scss';
import SignIn from '../components/SignIn';

// Ask user to login or sign up or get started
// Get started is another path to get the user started
// and provide free trial
export default function Login() {
  const [signIn, setSignIn] = useState(null);
  return (
    <div className={styles.login}>
      <div className={styles.backgroundGradient} />
      <img
        className={styles.logo}
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="netlfix logo"
      />
      <button onClick={() => setSignIn(true)} type="button" className={styles.signIn}>
        Sign In
      </button>
      <div className={styles.loginBody}>
        { signIn ? (<SignIn />) : (
          <>
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
          </>
        )}
      </div>

    </div>

  );
}
