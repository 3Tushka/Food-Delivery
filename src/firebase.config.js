import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBiZdZMdvD9UX-2YEJNBSXcBycBDA7qfVE",
    authDomain: "food-delivery-db382.firebaseapp.com",
    databaseURL: "https://food-delivery-db382-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "food-delivery-db382",
    storageBucket: "food-delivery-db382.appspot.com",
    messagingSenderId: "687104419157",
    appId: "1:687104419157:web:d8f888202df41618637bdc"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };