import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { WaiterMainView } from './components/WaiterView/WaiterMainView';
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
      <Route path="/waiter" element={<WaiterMainView/>}/>
    </Routes>
    </AuthProvider>

    </div>
    </div>
  );
}

export default App;
