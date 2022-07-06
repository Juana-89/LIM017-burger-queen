import { addDoc, collection } from  'firebase/firestore';
import { db } from './config';

export const addOrder = (order) => {
    return addDoc(collection(db, 'orders'), order);
}