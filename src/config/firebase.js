// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCD6xGEJlFabECg-ZrOQhJ_VcGzGKV2IaM",
        authDomain: "chatapp-55894.firebaseapp.com",
        projectId: "chatapp-55894",
        storageBucket: "chatapp-55894.appspot.com",
        messagingSenderId: "893859672069",
        appId: "1:893859672069:web:a870719675b9a072d7ac6c"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      console.log(app)
      export const auth = getAuth() 
      export const database = getFirestore();



