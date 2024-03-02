import React from 'react';
import './NiceButton.css';

const NiceButton = ({ label, onClick } : any) => {
  return (
    <button className="nice-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default NiceButton;