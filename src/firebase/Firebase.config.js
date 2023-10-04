// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqLd9vKqdeoc09nDPQ-CTguzpUa_Z1Agg",
  authDomain: "fir-dragon-news-b113e.firebaseapp.com",
  projectId: "fir-dragon-news-b113e",
  storageBucket: "fir-dragon-news-b113e.appspot.com",
  messagingSenderId: "478344545849",
  appId: "1:478344545849:web:46f467bc5642400736afe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;