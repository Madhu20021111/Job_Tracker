import React from 'react';
import './Card.css';

const Card = ({ children, className = '', hover = false, onClick }) => (
  <div 
    className={`card ${hover ? 'card-hover' : ''} ${className}`} 
    onClick={onClick} 
    style={{ cursor: onClick ? 'pointer' : 'default' }}
  >
    {children}
  </div>
);

export default Card;
