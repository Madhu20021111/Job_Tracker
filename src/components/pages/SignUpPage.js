import React from 'react';
import { User, Mail, Lock } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import Input from '../common/Input';
import './LoginPage.css'; // Reuse the same styles

const SignUpPage = ({ onSignUp, onLogin }) => (
  <div className="auth-page">
    <Card className="auth-card">
      <div className="auth-header">
        <div className="auth-icon">
          <User size={32} />
        </div>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join JobTracker and boost your career</p>
      </div>
      
      <div className="auth-form">
        <Input type="text" placeholder="Full Name" icon={User} />
        <Input type="email" placeholder="Email Address" icon={Mail} />
        <Input type="password" placeholder="Password" icon={Lock} />
        <Input type="password" placeholder="Confirm Password" icon={Lock} />
        <Button className="w-full" onClick={onSignUp}>
          Create Account
        </Button>
      </div>
      
      <div className="auth-footer">
        <p className="auth-link-text">
          Already have an account?{' '}
          <button 
            className="auth-link"
            onClick={onLogin}
          >
            Sign in here
          </button>
        </p>
      </div>
    </Card>
  </div>
);

export default SignUpPage;