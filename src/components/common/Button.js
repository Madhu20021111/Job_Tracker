import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  className = '' 
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;