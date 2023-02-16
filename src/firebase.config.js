import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhsHXmz1Pxam2PIVv5ghDZPhYB2p8fSjg',
  authDomain: 'house-marketplace-app-6b0e2.firebaseapp.com',
  projectId: 'house-marketplace-app-6b0e2',
  storageBucket: 'house-marketplace-app-6b0e2.appspot.com',
  messagingSenderId: '649859286976',
  appId: '1:649859286976:web:37330a11ee43a5ff81aa25',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
