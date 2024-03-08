import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_APP_PROJECT_ID_FIREBASE,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID_FIREBASE,
  appId: import.meta.env.VITE_APP_ID_FIREBASE,
};

const app = initializeApp(firebaseConfig);

export default app;
