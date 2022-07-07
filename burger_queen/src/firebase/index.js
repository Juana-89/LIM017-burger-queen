import { getAuth, signInWithEmailAndPassword, signOut } from  'firebase/auth';
import { addDoc, collection, getDocs, query, where, doc, updateDoc } from  'firebase/firestore';
import { db } from './config';

const auth = getAuth();

// Inicio sesión de mesero y jefe de cocina
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential)
    .catch((error) => error)
};

// Cierre sesión de mesero y jefe de cocina
export const logout = () => {
    return signOut(auth)
    .then(() => {})
    .catch((error) => error)
};

// Creación de colección de pedidos en firestore
export const addOrder = (order) => {
    return addDoc(collection(db, 'orders'), order);
}