// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// // Your Firebase configuration
// // Replace these values with your actual Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "your-api-key",
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "your-project-id",
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
//   appId: process.env.REACT_APP_FIREBASE_APP_ID || "your-app-id"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// export const db = getFirestore(app);
// export const auth = getAuth(app);

// export default app;


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDU-JG_IgoWeQxNgc1OUqK-PSr59UXWSLc",
//   authDomain: "registration-app-364fb.firebaseapp.com",
//   projectId: "registration-app-364fb",
//   storageBucket: "registration-app-364fb.firebasestorage.app",
//   messagingSenderId: "147539600671",
//   appId: "1:147539600671:web:d355677365ac8da7b8fc2a",
//   measurementId: "G-XNZF4RX6JW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
// const analytics = getAnalytics(app);
// export { analytics };
// src/firebase/config.js

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// // import { getAnalytics } from 'firebase/analytics'; // Optional

// const firebaseConfig = {
//   apiKey: "AIzaSyDU-JG_IgoWeQxNgc1OUqK-PSr59UXWSLc",
//   authDomain: "registration-app-364fb.firebaseapp.com",
//   projectId: "registration-app-364fb",
//   storageBucket: "registration-app-364fb.appspot.com", // ✅ corrected domain
//   messagingSenderId: "147539600671",
//   appId: "1:147539600671:web:d355677365ac8da7b8fc2a",
//   measurementId: "G-XNZF4RX6JW"
// };

// const app = initializeApp(firebaseConfig);

// // Core Firebase services
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// // Optional: Analytics (only if you plan to use it)
// // const analytics = getAnalytics(app);
// // export { analytics };

// export default app;
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDU-JG_IgoWeQxNgc1OUqK-PSr59UXWSLc",
  authDomain: "registration-app-364fb.firebaseapp.com",
  projectId: "registration-app-364fb",
  storageBucket: "registration-app-364fb.appspot.com",
  messagingSenderId: "147539600671",
  appId: "1:147539600671:web:d355677365ac8da7b8fc2a",
  measurementId: "G-XNZF4RX6JW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;