import React, {createContext, useContext } from 'react'
//import ReactDOM from 'react-dom'
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase/config';
// Archivo que permite saber a las otras páginas que el usuario se ha logueado

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext)
  if(!context) throw new Error('There is not auth provider')
  return context
};

export function AuthProvider({ children }) {
  const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

  return (
  <authContext.Provider value = {{ login }}>{children}
  </authContext.Provider>
  )}


