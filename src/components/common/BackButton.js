import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from './Button';
import './BackButton.css';

const BackButton = ({ onClick, text = "Back" }) => {
  return (
    <Button variant="outline" onClick={onClick} className="back-button">
      <ArrowLeft size={18} />
      {text}
    </Button>
  );
};

export default BackButton;