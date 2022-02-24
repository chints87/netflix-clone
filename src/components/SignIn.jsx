import React, { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../firebase';
import styles from '../styles/scss/SignIn.module.scss';

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // Use firebase auth functionality
  const auth = getAuth(firebaseApp);
  // Function runs when users wants to sign up
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
    // .then((userAuth) => console.log(userAuth))
    // .catch((error) => console.log(error.message));
  };
  // Function runs when users wants to sign in
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
    // .then((userAuth) => console.log(userAuth))
    // .catch((error) => console.log(error.message));
  };
  return (
    /* Create form that takes in user email and password to sign in or register */
    <div className={styles.signUp}>
      <h2>Sign In</h2>
      <form>
        <input ref={emailRef} type="email" placeholder="Enter email or phone number" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button
          type="submit"
          onClick={(e) => signIn(e)}
          onKeyUp={(e) => signIn(e)}
          tabIndex={0}
        >
          Sign In
        </button>
      </form>
      {/*  <div className={styles.signInOptions}>
        <label className={styles.rememberMe} htmlFor="rememberMe">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <span>Remember me</span>
        </label>
        <p>Need help?</p>
      </div> */}
      <div className={styles.signUpText}>
        <span>New to Netflix ?</span>
        <div
          className={styles.signUpLink}
          onClick={(e) => register(e)}
          onKeyUp={(e) => register(e)}
          role="button"
          tabIndex={0}
        >
          {' '}
          Sign up now

        </div>
      </div>
    </div>
  );
}
