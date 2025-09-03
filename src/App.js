import React, { useState } from 'react';
import './styles/index.css';
import './App.css';

// Import Pages
import LandingPage from './components/pages/LandingPage.js';
import LoginPage from './components/pages/LoginPage.js';
import SignUpPage from './components/pages/SignUpPage.js';
import Dashboard from './components/pages/Dashboard.js';
import CoverLetter from './components/pages/CoverLetterPage.js';
// Import other pages as needed...

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      switch (currentPage) {
        case 'login':
          return <LoginPage onLogin={handleLogin} onSignup={() => setCurrentPage('signup')} />;
        case 'signup':
          return <SignUpPage onSignUp={handleSignUp} onLogin={() => setCurrentPage('login')} />;
        default:
          return <LandingPage onLogin={() => setCurrentPage('login')} onSignup={() => setCurrentPage('signup')} />;
      }
    }

    switch (currentPage) {
      // Add other authenticated pages here...
      default:
        return <Dashboard onNavigate={handleNavigation} onDashboard={() => setCurrentPage('dashboard')} onLogout={handleLogout} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;