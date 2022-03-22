import React from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../firebase';
import styles from '../styles/scss/Profile.module.scss';
import Nav from '../components/Nav';
import Plans from '../components/Plans';

import { selectUser } from '../features/userSlice';

// User Profile with plan details, if subscribed
// then provide renewal data, and sign out function

export default function Profile() {
  const user = useSelector(selectUser);
  const auth = getAuth(firebaseApp);
  return (
    <>
      <Nav />
      <div className={styles.profile}>
        <h2>Edit Profile</h2>
        <div className={styles.profileBody}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className={styles.profileIcon}
          />
          <div className={styles.profileDetails}>
            <h3>{user.email}</h3>
            <div className={styles.profilePlans}>
              <h3>Plans</h3>
              <Plans />
              <button className={styles.signOut} type="button" onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>

        </div>
      </div>
    </>

  );
}
