import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import Input from '../common/Input';
import './LoginPage.css';

const LoginPage = ({ onLogin, onSignup }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page">
      <Card className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <User size={32} />
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to your JobTracker account</p>
        </div>
        
        <div className="auth-form">
          <Input type="email" placeholder="Enter your email" icon={Mail} />
          <div className="password-input">
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password" 
              icon={Lock}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <Button className="w-full" onClick={onLogin}>
            Sign In
          </Button>
        </div>
        
        <div className="auth-footer">
          <p className="auth-link-text">
            Don't have an account?{' '}
            <button 
              className="auth-link"
              onClick={onSignup}
            >
              Sign up here
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;