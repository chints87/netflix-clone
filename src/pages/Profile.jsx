import React from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../firebase';
import styles from '../styles/scss/Profile.module.scss';
import Nav from '../components/Nav';

import { selectUser } from '../features/userSlice';

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
              <h4>Renewal</h4>
              <div className={styles.plans}>
                <div className={styles.planDescription}>
                  <p>Netflix Basic</p>
                  <p>480p</p>
                </div>
                <button type="button" className={styles.suscribeButton}>Subscribe</button>
              </div>
              <div className={styles.plans}>
                <div className={styles.planDescription}>
                  <p>Netflix Standard</p>
                  <p>1000p</p>
                </div>
                <button type="button" className={styles.suscribeButton}>Subscribe</button>
              </div>
              <div className={styles.plans}>
                <div className={styles.planDescription}>
                  <p>NetFlix Premium</p>
                  <p>4k</p>
                </div>
                <button type="button" className={styles.suscribeButton}>Subscribe</button>
              </div>

              <button type="button" onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>

        </div>
      </div>
    </>

  );
}
