"use client";

import NiceButton from "../Nicebutton";
import React, { useState } from 'react';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLink } from '@fortawesome/free-solid-svg-icons'

type MessageType = {
  key: number;
  text: string;
  emitter: string;
};

const Message: React.FC<MessageType> = ({ text, emitter }) => {
  if (emitter === "AI") {
    return (
      <div className="flex flex-row">
        <div className="flex-2 h-[45px] w-[45px] text-black">
          <Image
            src="/AI_Icon.png"
            width={45}
            height={45}
            alt="TAsk"
          />
        </div>
        <div className="flex-1 message mt-[10px] mb-[10px] p-2 text-black font-semibold">
          {text}
        </div>
      </div>
    );
  }
  else
    if (emitter === "user") {
      return (
        <div className="flex flex-row justify-end">
          <div className="flex-1 message mt-[10px] mb-[10px] p-2 text-black font-semibold">
            {text}
          </div>
          <div className="flex-2 h-[45px] w-[45px] text-black">
            <Image
              src="/UserIcon.png"
              width={45}
              height={45}
              alt="TAsk"
            />
          </div>
        </div>
      );
    }
}

function SideButton(props: any) {
  return (
    <div className="flex flex-row">
      <FontAwesomeIcon icon={faHouse} />
      <div className="leading-none flex justify-end">
        {props.label}
      </div>
    </div>
  );
}

export default function Home() {


  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    // Access the file input using the ref and trigger the click event
    fileInputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    // Handle the selected file here
    const selectedFile = event.target.files[0];

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch(`http://localhost:3000/highlight-errors`, {
      method: 'POST',
      body: formData,
    })
      .then(response => {console.log(response);}) //return response.json()})
     /* .then(data => {
        setFileText(data.text);
      })
      .catch(error => {
        console.error('Error:', error);
      });*/
    };







  // Create a state variable to store the value of the input
  const [inputValue, setInputValue] = useState('');
  const [pythonResult, setPythonResult] = useState<string | null>(null);

  // Event handler to update the state when the input value changes
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [fileText, setFileText] = useState<String> ('');
  const myDivRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when the component is mounted
    myDivRef.current.scrollTop = myDivRef.current.scrollHeight;
  }, []);

  const handleClick = () => {
    // Generate a unique key for each message
    var key = messages.length;
    var key2 = messages.length + 1;
    console.log(key);
    console.log(key2);
    setMessages([...messages, { key: key, text: inputValue, emitter: "user" }]);
    messages.push({ key: key, text: inputValue, emitter: "user" });
    myDivRef.current.scrollTop = myDivRef.current.scrollHeight;
    //setInputValue('');
    fetch(`http://localhost:3000/run-script?arg=${encodeURIComponent(inputValue)}`)
      .then(response => response.text())
      .then(message => {
        setMessages([...messages, { key: key2, text: message.toString(), emitter: "AI" }]);
      })
    myDivRef.current.scrollTop = myDivRef.current.scrollHeight;
  };
  return (
    <main className="flex min-h-screen flex-row" style={{ backgroundImage: "url('BackgroundImage.png')" }}>
      <div className="flex flex-1 flex-row">
        <div className="flex flex-col" style={{ flex: 1 }}>
          <div className="flex flex-row w-[80%] h-[59px]">
            <Image

              className="ml-[50px] opacity-100"
              src={'/Logo.png'}
              alt="Our logo"
              width={57}
              height={59}
            >
            </Image>
            <div className="flex flex-1 font-bold ml-[5px] text-[30px] items-end align-bottom leading-none" >
              TAsk AI
            </div>
          </div>
          <div className="flex flex-col">
            <SideButton label="Home"></SideButton>
            <SideButton label="Old tasks" ></SideButton>
            <SideButton label="Contact tutor"> </SideButton>
          </div>
        </div>
        <div className="flex flex-row rounded-[40px]  " style={{ flex: 2, backgroundColor: "rgba(13, 13, 13, 0.34)" }}>
          <div className="flex flex-1">
            <div className="flex flex-1 justify-center items-center flex-col">
              <div className="flex flex-1 w-full min-h-screen max-h-screen flex-col">
                <div className="h-[80%] overflow-auto mt-[25px] ml-[45px]" style={{ scrollbarWidth: 'none' }}>
                  <div>
                    {fileText}
                  </div>
                </div>
                <div className="flex flex-row h-[20%]  items-center justify-between">
                  <div className = " ml-[30px] flex justify-center items-center w-[300px] , h-[30px] bg-black text-white rounded-[40px] text-center">
                    Add your code as text or a file 
                  </div>
                  
                  
                  <div>
                    <input
                      type="file"
                      accept=".pdf, .doc, .docx"
                      style={{ display: 'none' }}
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    <button onClick={handleFileUpload}>
                      <FontAwesomeIcon icon={faLink} style = {{width: 30,height: 30}}/>
                    </button>
                  </div>
                  <div className = "mr-[10px]">
                    <Image 
                      src = "/UserIcon.png"
                      width = {50}
                      height = {50}
                      alt = "User Icon">
                    </Image>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col bg-[#C9E7E4] rounded-l-[40px]">
            <div className="flex flex-1 justify-center items-center flex-col">

              <div className="flex flex-1 w-full min-h-screen max-h-screen flex-col">
                <div ref={myDivRef} className="h-[80%] overflow-auto mt-[25px] ml-[45px]" style={{ scrollbarWidth: 'none' }}>
                  {messages.map((message) => (
                    <       Message key={message.key} text={message.text} emitter={message.emitter} />
                  ))}
                </div>
                <div className="flex flex-row h-[20%]  items-center justify-between">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                    className="w-[60%] ml-[15px] bg-transparent border-b-2 border-black text-black font-semibold"
                  />
                  <NiceButton label="Click me" onClick={handleClick} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

