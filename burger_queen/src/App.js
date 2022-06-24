import React from 'react';
import './App.css';
import '../src/stylesheets/Welcome.css';
import '../src/stylesheets/Login.css';
import '../src/stylesheets/Food.css'
import '../src/stylesheets/Breakfast.css'
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { Food } from './components/Food';
import { Breakfast } from './components/Breakfast';
import { Launch } from './components/Launch';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
    <div className="container-main">
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/food" element={<Food/>}/>
      <Route path="/breakfast" element={<Breakfast/>}/>
      <Route path="/launch" element={<Launch/>}/>
    </Routes>
    </AuthProvider>
    </div>
    </div>
  );
}

export default App;
