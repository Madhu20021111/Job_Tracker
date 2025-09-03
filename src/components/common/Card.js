import React from 'react';
import './Card.css';

const Card = ({ children, className = '', hover = false }) => (
  <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
    {children}
  </div>
);

export default Card;