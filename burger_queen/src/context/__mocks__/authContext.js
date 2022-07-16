import * as React from 'react';
export const signInWithEmailAndPassword = 
(auth = {}, email, password) => 
Promise.resolve({ user: { email: email, password: password } });

export const useAuth = function () {
    return { login: () => Promise.resolve(), }
};

export function AuthProvider({ children }) {
    return <>{ children }</>
}