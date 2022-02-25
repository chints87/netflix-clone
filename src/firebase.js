import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-atyHB0i6MdoN85Lnkag2zvt2PwDKb-E',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: 'netflix-clone-fe5ad',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: process.env.REACT_APP_FIRBASE_MEASUREMENT_ID,
};

// Initialize netflix-clone app on firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// Connect to db
const db = firebaseApp.firestore();

// // Create a user in the firestore db
// export const createUser = async (userAuth) => {
//   // If the user is logged out then don't do anything
//   if (!userAuth) {
//     return null;
//   }

//   // Check if user exists in the database
//   const userRef = db.doc(`users/${userAuth.uid}`);

//   // Make a call to get user from the db
//   const snapShot = await userRef.get();

//   // If the user does not exist in the db,
//   // then create a user
//   if (!snapShot.exists) {
//     const { email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await userRef.set({
//         email,
//         createdAt,
//       });
//     } catch (error) {
//       console.log('error', error);
//     }
//   }

//   return userRef;
// };

export default db;
