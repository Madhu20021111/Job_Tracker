import React from 'react';
import { Search, Upload, MessageCircle, FileText, Briefcase } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import './LandingPage.css';

const LandingPage = ({ onLogin, onSignup }) => (
  <div className="landing-page">
    <div className="landing-container">
      <div className="landing-hero">
        <div className="landing-brand">
          <div className="landing-logo">
            <Briefcase size={48} />
          </div>
          <h1 className="landing-title">JobTracker</h1>
        </div>
        <p className="landing-tagline">
          Find jobs. Fix resumes. Practice interviews.
        </p>
        <p className="landing-description">
          Your complete career companion designed specifically for Sri Lankan job seekers. 
          Get personalized job matches, resume analysis, and interview practice all in one platform.
        </p>
        <div className="landing-buttons">
          <Button size="lg" onClick={onSignup}>
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" onClick={onLogin}>
            Login
          </Button>
        </div>
      </div>
      
      <div className="landing-features">
        {[
          { icon: Search, title: 'Smart Job Search', desc: 'Advanced job matching with natural language search' },
          { icon: FileText, title: 'Resume Analyzer', desc: 'Get instant feedback and improvement suggestions' },
          { icon: MessageCircle, title: 'Mock Interviews', desc: 'Practice with generated questions and feedback' },
          { icon: Upload, title: 'Cover Letter Generator', desc: 'Create personalized cover letters in minutes' }
        ].map((feature, i) => (
          <Card key={i} className="feature-card" hover>
            <div className="feature-icon">
              <feature.icon size={32} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default LandingPage;