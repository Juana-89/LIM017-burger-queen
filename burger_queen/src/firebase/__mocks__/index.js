export const initializeApp = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
export const addDoc = jest.fn((doc, value) => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({email, password}));
export const signOut = jest.fn(() => Promise.resolve({}));