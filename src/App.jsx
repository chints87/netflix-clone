import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';
/* import { Counter } from './features/counter/Counter'; */
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import './App.css';
import { firebaseApp } from './firebase';

function App() {
  /* Over here firebase auth onStatechange listens to
    change in auth state for a browser instance. */
  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        alert('logged in');
        console.log(userAuth);
      } else {
        alert('logged out');
      }
    });
    return (() => unsuscribe);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
