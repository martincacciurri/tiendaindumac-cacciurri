// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg2smAd1X7rWEcGvjL9N_bC-P1BuoDmkY",
  authDomain: "tienda-indumac.firebaseapp.com",
  projectId: "tienda-indumac",
  storageBucket: "tienda-indumac.appspot.com",
  messagingSenderId: "478201197209",
  appId: "1:478201197209:web:d735c7fa883741d7f77e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
