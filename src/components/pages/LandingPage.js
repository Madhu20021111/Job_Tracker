import React from 'react';
import { Search, Upload, MessageCircle, FileText, Briefcase, Users, TrendingUp, Award } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import Footer from '../common/Footer';
import './LandingPage.css';

const LandingPage = ({ onLogin, onSignup }) => (
  <div className="landing-page">
    {/* Hero Section with Background Image */}
    <div className="landing-hero">
      <div className="hero-background">
        {/* Placeholder for hero background image */}
        <div className="image-placeholder hero-image">
          <span>Hero Background Image (1200x600)</span>
        </div>
      </div>
      <div className="hero-overlay">
        <div className="landing-container">
          <div className="hero-content animate-fade-in">
            <div className="landing-brand">
              <div className="landing-logo animate-pulse">
                <Briefcase size={48} />
              </div>
              <h1 className="landing-title text-gradient">JobTracker</h1>
            </div>
            <p className="landing-tagline">
              Find jobs. Fix resumes. Practice interviews.
            </p>
            <p className="landing-description">
              Your complete career companion designed specifically for Sri Lankan job seekers. 
              Get personalized job matches, resume analysis, and interview practice all in one platform.
            </p>
            <div className="landing-buttons">
              <Button size="lg" onClick={onSignup} className="animate-glow">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" onClick={onLogin}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Stats Section */}
    <div className="stats-section">
      <div className="landing-container">
        <div className="stats-grid">
          <div className="stat-item animate-slide-in">
            <div className="stat-icon">
              <Users size={32} />
            </div>
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Happy Users</div>
          </div>
          <div className="stat-item animate-slide-in">
            <div className="stat-icon">
              <Briefcase size={32} />
            </div>
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Jobs Posted</div>
          </div>
          <div className="stat-item animate-slide-in">
            <div className="stat-icon">
              <TrendingUp size={32} />
            </div>
            <div className="stat-number">85%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-item animate-slide-in">
            <div className="stat-icon">
              <Award size={32} />
            </div>
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">User Rating</div>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="features-section">
      <div className="landing-container">
        <div className="section-header">
          <h2 className="section-title">Powerful Tools for Your Career Success</h2>
          <p className="section-subtitle">Everything you need to land your dream job in one platform</p>
        </div>
        
        <div className="landing-features">
          {[
            { 
              icon: Search, 
              title: 'Smart Job Search', 
              desc: 'Advanced job matching with natural language search',
              image: 'job-search-feature.jpg',
              color: '#3b82f6'
            },
            { 
              icon: FileText, 
              title: 'Resume Analyzer', 
              desc: 'Get instant feedback and improvement suggestions',
              image: 'resume-analyzer.jpg',
              color: '#10b981'
            },
            { 
              icon: MessageCircle, 
              title: 'Mock Interviews', 
              desc: 'Practice with generated questions and feedback',
              image: 'interview-practice.jpg',
              color: '#8b5cf6'
            },
            { 
              icon: Upload, 
              title: 'Cover Letter Generator', 
              desc: 'Create personalized cover letters in minutes',
              image: 'cover-letter.jpg',
              color: '#f59e0b'
            }
          ].map((feature, i) => (
            <Card key={i} className="feature-card card-interactive" hover>
              <div className="feature-image">
                {/* Placeholder for feature image */}
                <div className="image-placeholder" style={{ backgroundColor: feature.color }}>
                  <feature.icon size={48} color="white" />
                  <div className="image-text">{feature.image}</div>
                </div>
              </div>
              <div className="feature-content">
                <div className="feature-icon-small" style={{ backgroundColor: feature.color }}>
                  <feature.icon size={24} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="cta-section">
      <div className="landing-container">
        <Card className="cta-card card-featured">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Career Journey?</h3>
            <p className="cta-description">
              Join thousands of successful job seekers who found their dream jobs with JobTracker
            </p>
            <Button size="lg" onClick={onSignup} className="cta-button">
              Start Free Today
            </Button>
          </div>
          <div className="cta-image">
            <div className="image-placeholder">
              <span>Success Stories Image (400x300)</span>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <Footer />
  </div>
);

export default LandingPage;