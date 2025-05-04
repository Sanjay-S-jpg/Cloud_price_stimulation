import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,              // add_your_api_keys_from_firebase
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,      //either add directly here or create a '.env' file in frontend folder and add the credentials
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};



const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue };
