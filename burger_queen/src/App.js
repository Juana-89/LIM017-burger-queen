import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { WaiterMainView } from './components/WaiterView/WaiterMainView';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import  Main  from '../src/components/WaiterView1/Main';
import Cart from '../src/components/WaiterView1/Cart';
import { CartProvider } from 'react-use-cart'
function App() {
  return (
    <div className="App">
    <div className="container-main">
    <AuthProvider>
    <Routes>
    <CartProvider>
    <Main />
      <Cart />
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/waiter" element={<WaiterMainView/>}/>
      </CartProvider>
    </Routes>
    </AuthProvider>

    </div>
    </div>
  );
}


export default App;
