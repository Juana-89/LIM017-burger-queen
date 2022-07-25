import * as React from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const signInWithEmailAndPassword = (auth = {}, email, password) =>
  Promise.resolve({ user: { email: email, password: password } });

export const useAuth = function() {
  return {
    login: () => {
      return Promise.resolve();
    }
  };
};
export const navigate = function({ useNavigate }) {
  return <>{useNavigate}</>;
};

export function AuthProvider({ children }) {
  const login = (email, password) => {
    console.log(email, password,'funcionaaaaaaa')
    if(email==="juatha88@gmail.com" && password==="burgerqueen"){
      return Promise.resolve({
        user: {
          email: "correo@juatha88.com",
          password: "burgerqueen"
        }
      });

    }else{
      return Promise.reject()
    }

  };
  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
