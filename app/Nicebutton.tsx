import React from 'react';
import './NiceButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const NiceButton = ({ label, onClick } : any) => {
  return (
    <button onClick={onClick} className = "mr-[10px]">
        <FontAwesomeIcon icon={faArrowUp} />    
    </button>
  );
};

export default NiceButton;