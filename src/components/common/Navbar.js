import React from 'react';
import { Briefcase } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

const Navbar = ({ onDashboard, onLogout }) => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-brand" onClick={onDashboard}>
          <div className="navbar-logo">
            <Briefcase size={24} />
          </div>
          <span className="navbar-title">JobTracker</span>
        </div>
        <div className="navbar-actions">
          <span className="navbar-welcome">Welcome back!</span>
          <Button variant="secondary" size="sm" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;