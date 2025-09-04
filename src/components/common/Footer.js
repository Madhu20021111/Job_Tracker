import React from 'react';
import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <Briefcase size={24} />
              </div>
              <span className="footer-title">JobTracker</span>
            </div>
            <p className="footer-description">
              Your complete career companion designed specifically for job seekers. 
              Find jobs, improve your resume, practice interviews, and create cover letters.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Job Search</a></li>
              <li><a href="#">Resume Analyzer</a></li>
              <li><a href="#">Mock Interview</a></li>
              <li><a href="#">Cover Letter</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Career Tips</a></li>
              <li><a href="#">Resume Templates</a></li>
              <li><a href="#">Interview Questions</a></li>
              <li><a href="#">Cover Letter Examples</a></li>
              <li><a href="#">Job Search Guide</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>support@jobtracker.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+94 11 234 5678</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 JobTracker. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;