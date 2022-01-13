import React from 'react';
import { Routes, Route } from 'react-router-dom';
/* import { Counter } from './features/counter/Counter'; */
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import './App.css';

function App() {
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
