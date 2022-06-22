import React from 'react';
import './App.css';
import '../src/stylesheets/Welcome.css';
import '../src/stylesheets/Login.css';
import '../src/stylesheets/Food.css'
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { Food } from './components/Food';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
    <div className="container-main">
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Food" element={<Food/>}/>
    </Routes>
    </AuthProvider>
    </div>
    </div>
  );
}

export default App;
