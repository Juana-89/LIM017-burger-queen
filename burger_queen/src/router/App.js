import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { WaiterMainView } from '../components/WaiterView/WaiterMainView';
import { Welcome } from '../components/Welcome/Welcome';
import { Login } from '../components/Login/Login';
import  Kitchen  from '../components/KitchenView/Kitchen';
import OrdersReady from '../components/WaiterView/OrdersReady'
import { AuthProvider } from '../context/authContext';
import "./App.css";

export const LocationDisplay = () => {
  const location = useLocation()
  return <div data-testid="location-display">{location.pathname}</div>
}

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
      {/* <Route exact path="/waiter" element={<PrivateRoute component= {<WaiterMainView />} />} />
      <Route exact path="/kitchen" element={<PrivateRoute component= {<Kitchen />} />} />
      <Route exact path="/orders" element={<PrivateRoute component= {<OrdersReady />} />} /> */}
      </Routes>
      </AuthProvider>
      </div>
      </div>
  );
}

export default App;
