import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWLF3vgwOQDO3kODl4RgR0PDklkD1P_T8",
  authDomain: "fb-clone-ahad.firebaseapp.com",
  projectId: "fb-clone-ahad",
  storageBucket: "fb-clone-ahad.appspot.com",
  messagingSenderId: "475203285403",
  appId: "1:475203285403:web:f839962be510df1bec313e"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
