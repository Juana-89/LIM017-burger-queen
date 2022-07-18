import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WaiterMainView } from './components/WaiterView/WaiterMainView';
import { Welcome } from './components/Welcome/Welcome';
import { Login } from './components/Login/Login';
import  Kitchen  from './components/KitchenView/Kitchen';
import OrdersReady from './components/WaiterView/OrdersReady'
import { AuthProvider } from './context/authContext';
import "./App.css";

function App() {
  return (
      <div className="App">
      <div className="container-main">
      <AuthProvider>
      <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/waiter" element={<WaiterMainView />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/orders" element={<OrdersReady />} />
      </Routes>
      </AuthProvider>
      </div>
      </div>
  );
}

export default App;
