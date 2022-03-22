/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
// import { startLoading, stopLoading } from '../features/loadingSlice';

import db from '../firebase';
import { selectUser } from '../features/userSlice';
import PlansItem from './PlansItem';

// Retrieve customer subscription, if any, and display
// product plans and pricing

export default function Plans() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  const [subscription, setSubscription] = useState(null);

  // Check for customer details in customers collection and then in subscriptions collection
  // get info about the subscription, start and end period
  useEffect(() => {
    db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscrb) => {
          setSubscription({
            role: subscrb.data().role,
            currentStartPeriod: subscrb.data().current_period_start.seconds,
            currentEndPeriod: subscrb.data().current_period_end.seconds,
          });
        });
      });
  }, [user.uid]);

  // Obtain price details for all products
  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        // Create an object of the products with its details
        // and then refer to price collection, and for each of
        // prices/price add details
        const productsDB = {};
        querySnapshot.forEach(async (prodDoc) => {
          productsDB[prodDoc.id] = prodDoc.data();
          const priceSnap = await prodDoc.ref.collection('prices').get();
          priceSnap.docs.forEach((priceDoc) => {
            productsDB[prodDoc.id].prices = {
              priceId: priceDoc.id,
              priceData: priceDoc.data(),
            };
          });
        });
        setProducts(productsDB);
      });
  }, []);

  // const checkoutHandler = async (priceId) => {
  //   dispatch(startLoading());
  //   const docRef = await db
  //     .collection('customers')
  //     .doc(user.uid)
  //     .collection('checkout_sessions')
  //     .add({
  //       price: priceId,
  //       success_url: window.location.origin,
  //       cancel_url: window.location.origin,
  //     });
  //   dispatch(stopLoading());

  //   // Wait for the CheckoutSession to get attached by the extension
  //   docRef.onSnapshot((snap) => {
  //     const { error, url } = snap.data();
  //     if (error) {
  //       // Show an error to your customer and
  //       // inspect your Cloud Function logs in the Firebase console.
  //       alert(`An error occured: ${error.message}`);
  //     }
  //     if (url) {
  //       // Take user to Stripe checkout url
  //       window.location.assign(url);
  //     }
  //   });
  // };

  // console.log(subscription);
  // renewalDate = new Date(subscription.currentEndPeriod * 1000).toLocaleDateString('en-IN');

  return (
    <>
      {subscription ? (
        <p style={{
          textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', margin: '1.5rem',
        }}
        >
          Renewal Date :
          {'   '}
          {new Date(subscription.currentEndPeriod * 1000).toLocaleDateString('en-IN')}
        </p>
      )
        : null }

      {/* An array will contain arrays of the products. The map
          function takes each array with the first element as productID
          and the second as the product data */}
      {Object.entries(products).map(([productId, productData]) => (
        <PlansItem
          key={productId}
          productData={productData}
          subscription={subscription}
          user={user}
        />
      ))}

    </>

  );
}
