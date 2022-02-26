import React, { useState, useEffect } from 'react';
import styles from '../styles/scss/Plans.module.scss';
import db from '../firebase';

export default function Plans() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      {/* An array will contain arrays of the products. The map
          function takes each array with the first element as productID
          and the second as the product data */}
      {Object.entries(products).map(([productId, productData]) => (
        <div key={productId} className={styles.plan}>
          <div className={styles.productDescription}>
            <p>{productData.name}</p>
            <p>{productData.description}</p>
          </div>
          <div className={styles.suscribeButton}>
            <button type="button">Subscribe</button>
          </div>

        </div>
      ))}

    </>

  );
}
