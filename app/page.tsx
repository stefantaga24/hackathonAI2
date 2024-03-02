import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
       <div className= "flex h-[60px] bg-gray-300">
        
       </div>
       <div className="flex flex-1 flex-row">
          <div className="flex flex-1 bg-red-300">
          </div>
          <div className="flex flex-1 bg-white">
          </div>
          <div className= "flex flex-1 bg-black">
          </div>
       </div>
    </main>
  );
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXBXvul04id3EIVM5aeFDFbESq9RNnRvM",
  authDomain: "aichatbot-9033d.firebaseapp.com",
  projectId: "aichatbot-9033d",
  storageBucket: "aichatbot-9033d.appspot.com",
  messagingSenderId: "7683997740",
  appId: "1:7683997740:web:9a801e35d94ed49b1d9189",
  measurementId: "G-DYRBCKCN73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

function sendMessage(message : string) {
  // adds a new document with a generated id.
  addDoc(collection(db, "chatlogs"), {
    message: message,
    timestamp: new Date().toISOString()
  })
  .then(docRef => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(error => {
    console.error("Error adding document: ", error);
  });
}