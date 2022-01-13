import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-atyHB0i6MdoN85Lnkag2zvt2PwDKb-E',
  authDomain: 'netflix-clone-fe5ad.firebaseapp.com',
  projectId: 'netflix-clone-fe5ad',
  storageBucket: 'netflix-clone-fe5ad.appspot.com',
  messagingSenderId: '260571828051',
  appId: '1:260571828051:web:b046d701516273a7d39ba6',
  measurementId: 'G-XMY5DXVVNZ',
};

// Initialize netflix-clone app on firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// Connect to db
const db = firebaseApp.firestore();

export default db;
