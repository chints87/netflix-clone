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

  console.log(products);
  return (
    <div className={styles.plan}>
      {Object.entries(products).map(([productId, productData]) => (
        <div key={productId}>
          <p>{productData.name}</p>
          <p>{productData.description}</p>
          <button type="button">Subscribe</button>
        </div>
      ))}

    </div>

  );
}
