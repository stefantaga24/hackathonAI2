"use client";

import Image from "next/image";

export default function Home(){
  return (
      <main className="flex min-h-screen flex-col " style = {{backgroundImage: "url('BackgroundImage.png')"}}>
    <div className="flex w-full h-[120px] justify-center mt-[30px] opacity-100 ">
        <div className = "flex w-[80%] h-[83px] bg-[#D9D9D9] rounded-[40px] opacity-70">
        <div className = "flex flex-1 items-center opacity-100">
        <div className = "opacity-100 flex flex-row">
        <Image 
          
          className = "ml-[50px] opacity-100"
          src={'/Logo.png'}
          alt="Our logo" 
          width={57}
          height={59}
          >
        </Image> 
        <div className = "flex flex-1 font-bold ml-[5px] text-[30px] justify-center items-center">
        TAsk AI
        </div>
        </div> 
          </div>
          
          <div className = "flex flex-1 items-center justify-end">
              <Link key={""}
        href={"loginPage"} className = "font-bold text-[30px] mr-[30px]">
                Log in 
              </Link>
              <div className = "font-bold text-[30px] mr-[30px]">
                Demo
              </div>
          </div>
        </div> 
    </div>
    <div className="flex flex-1 flex-col justify-center items-center mb-[100px]">
        <div className = "w-full flex justify-center text-[80px] font-bold">
        The&nbsp;<span className="text-[#65204A]">TA</span>&nbsp;to&nbsp;<span className="text-[#65204A]">ask</span>
        </div>
        <div className = "w-full flex justify-center text-[100px] font-bold">
          when&nbsp;you&nbsp;do&nbsp;your&nbsp;<span className="text-[#65204A]">task</span>.
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
import Link from "next/link";

const db = getFirestore(app);

function sendMessage(message: string) {
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