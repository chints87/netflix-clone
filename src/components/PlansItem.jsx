/* eslint-disable no-undef */
import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import db from '../firebase';
import styles from '../styles/scss/Plans.module.scss';

// For each plan item, if unsuscribed, on clicking takes the user
// to checkout

export default function PlansItem({ productData, subscription, user }) {
  const [loading, setLoading] = useState(false);
  const currentPackage = productData.name.toLowerCase().includes(
    subscription ? subscription.role : null,
  );

  const checkoutHandler = async (priceId) => {
    setLoading(true);
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        // eslint-disable-next-line no-undef
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    // Wait for the CheckoutSession to get attached by the extension
    docRef.onSnapshot((snap) => {
      const { error, url } = snap.data();
      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        // eslint-disable-next-line no-undef
        setLoading(false);
      }
      if (url) {
        // Take user to Stripe checkout url
        window.location.assign(url);
        setLoading(false);
      }
    });
  };
  return (
    <div className={styles.plan}>
      <div className={styles.productDescription}>
        <p>{productData.name}</p>
        <p>{productData.description}</p>
      </div>
      <div className={currentPackage ? styles.activeSubscription : styles.suscribeButton}>
        {/* This button will work only when the user is an unsuscribed user */}
        {loading
          ? (
            <div className={styles.loading}>
              <CircularProgress size="1.5rem" color="white" />
            </div>
          )
          : (
            <button type="button" onClick={() => !currentPackage && checkoutHandler(productData.prices.priceId)}>
              {currentPackage ? 'Current Package' : 'Suscribe'}
              {' '}
            </button>
          )}
      </div>
    </div>
  );
}
