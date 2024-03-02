"use client";

import Image from "next/image";
import React, { useState } from 'react';
import NiceButton from "./Nicebutton";

type MessageType = {
  key: number;
  text: string;
};

const Message: React.FC<MessageType> = ({ text }) => <div className="message mt-[10px] mb-[10px]">{text}</div>;

export default function Home() {

  // Create a state variable to store the value of the input
  const [inputValue, setInputValue] = useState('');
  const [pythonResult, setPythonResult] = useState<string | null>(null);

  // Event handler to update the state when the input value changes
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleClick = () => {
    // Generate a unique key for each message
    var key = messages.length;
    var key2 = messages.length + 1;
    console.log(key);
    console.log(key2);
    setMessages([...messages, { key : key, text: inputValue}]);
    messages.push({ key : key, text: inputValue });
    //setInputValue('');
    fetch(`http://localhost:3000/run-script?arg=${encodeURIComponent(inputValue)}`)
    .then(response => response.text())
    .then(message => {
      setMessages([...messages, { key : key2, text: message.toString() }]);
    })
  };
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex h-[60px] bg-gray-300">

      </div>
      <div className="flex flex-1 flex-row">
        <div className="flex flex-1 bg-red-300">
        </div>
        <div className="flex flex-1 bg-white">
          <div>
            Upload your file here
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 justify-center items-center flex-col">
            <div className="h-[50px]">
              AI Conversation
            </div>
            <div className="flex-1 w-full bg-white">
              <div className = "h-[80%] overflow-auto">
              {messages.map((message) => (
          <       Message key={message.key} text={message.text} />
              ))}
              </div>
              <div className = "flex flex-row h-[20%]  items-center justify-between">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
                className = "w-[60%]"
              />
              <NiceButton label="Click me" onClick={handleClick} />
              </div>
            </div>
          </div>
          <div className="flex flex-1">
          </div>
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