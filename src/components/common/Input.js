import React from 'react';
import './Input.css';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon: Icon, 
  className = '' 
}) => (
  <div className="input-container">
    {Icon && (
      <div className="input-icon">
        <Icon size={20} />
      </div>
    )}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${Icon ? 'input-with-icon' : ''} ${className}`}
    />
  </div>
);

export default Input;