import React from 'react';
import { Navigate } from 'react-router-dom';

// Archivo para que los componentes waiter, kitchen y orders sean privadas a menos que estés logueado
let auth;
auth= true;
auth=null;

const PrivateRoute = ({ component: Component }) => {
    return auth ? <Component /> : <Navigate to="/login" />;
 };

export default PrivateRoute;