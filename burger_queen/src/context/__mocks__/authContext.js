import * as React from 'react';
export const signInWithEmailAndPassword = 
(auth = {}, email, password) => 
Promise.resolve({ user: { email: email, password: password } });

export const useAuth = function () {
    return { login: () => Promise.resolve(), }
};
export const navigate = function ({ useNavigate }) {
    return <>{useNavigate}</>;
  };

export function AuthProvider({ children }) {
    return <>{ children }</>
}

export const login = (email, password) =>
  Promise.resolve({
    user: {
      email: "correo@juatha88.com",
      password: "burgerqueen",
    },
  });