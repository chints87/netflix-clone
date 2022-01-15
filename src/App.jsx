import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css';
import { firebaseApp } from './firebase';

function App() {
  /* Getting the user property from the user object from the state object */
  const user = useSelector(selectUser);
  /* Function to dispatch an action to change state with a payload */
  const dispatch = useDispatch();
  /* Over here firebase auth onStatechange listens to
    change in auth state for a browser instance. */
  useEffect(() => {
    /* auth module from the firebase and specific to the firebase app */
    const auth = getAuth(firebaseApp);
    /* Listener that tracks auth state change */
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    });
    /* Unsuscribe on unmount to prevent memory leaks */
    return (() => unsuscribe);
  }, [dispatch]);
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={user ? <HomeScreen /> : <Login />} />
        <Route path="/login" element={user ? <Profile /> : <Login />} />
      </Routes>

    </div>
  );
}

export default App;
