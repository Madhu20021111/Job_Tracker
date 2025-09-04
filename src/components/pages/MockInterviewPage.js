import React, { useState } from 'react';
import { Mic, MicOff, Play, Square, Download } from 'lucide-react';
import Navbar from '../common/Navbar';
import Button from '../common/Button';
import Card from '../common/Card';
import './MockInterviewPage.css';

const MockInterviewPage = ({ onDashboard, onLogout }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "Tell me about yourself and your background.",
    "What interests you about this position?",
    "Describe a challenging project you worked on and how you handled it.",
    "How do you stay updated with the latest technologies?",
    "Where do you see yourself in 5 years?"
  ];

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestion(0);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="mock-interview-page">
      <Navbar onDashboard={onDashboard} onLogout={onLogout} />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Mock Interview Practice</h1>
          <p className="page-subtitle">Practice with AI-generated questions and get feedback</p>
        </div>
        
        <div className="interview-content">
          <Card className="interview-card">
            <h3 className="section-title">Interview Session</h3>
            
            {!interviewStarted ? (
              <div className="setup-section">
                <div className="interview-options">
                  <div className="option-group">
                    <label className="option-label">Interview Type</label>
                    <select className="option-select">
                      <option>Technical Interview</option>
                      <option>Behavioral Interview</option>
                      <option>HR Interview</option>
                      <option>Mixed Questions</option>
                    </select>
                  </div>
                  
                  <div className="option-group">
                    <label className="option-label">Difficulty Level</label>
                    <select className="option-select">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  
                  <div className="option-group">
                    <label className="option-label">Duration</label>
                    <select className="option-select">
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option>45 minutes</option>
                      <option>60 minutes</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full" onClick={startInterview}>
                  <Play size={20} />
                  Start Interview
                </Button>
              </div>
            ) : (
              <div className="interview-session">
                <div className="question-display">
                  <div className="question-counter">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                  <div className="current-question">
                    {questions[currentQuestion]}
                  </div>
                </div>
                
                <div className="recording-controls">
                  <Button 
                    variant={isRecording ? 'secondary' : 'primary'} 
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    {isRecording ? (
                      <>
                        <Square size={20} />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Mic size={20} />
                        Start Recording
                      </>
                    )}
                  </Button>
                  
                  {isRecording && (
                    <div className="recording-indicator">
                      <div className="recording-dot"></div>
                      Recording...
                    </div>
                  )}
                </div>
                
                <div className="question-navigation">
                  <Button 
                    variant="outline" 
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                  >
                    Previous Question
                  </Button>
                  <Button 
                    onClick={nextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                  >
                    Next Question
                  </Button>
                </div>
                
                <div className="interview-feedback">
                  <h4 className="feedback-title">Feedback will appear here after recording</h4>
                  <p className="feedback-placeholder">
                    Speak clearly and concisely. Focus on providing specific examples from your experience.
                    Your responses will be analyzed for content, clarity, and communication skills.
                  </p>
                </div>
                
                <Button variant="success" className="w-full">
                  <Download size={20} />
                  Download Feedback Report
                </Button>
              </div>
            )}
          </Card>
          
          <Card className="tips-card">
            <h3 className="section-title">Interview Tips</h3>
            <div className="tips-list">
              <div className="tip-item">
                <h4 className="tip-title">Prepare Your Stories</h4>
                <p className="tip-content">
                  Have 2-3 specific examples ready that demonstrate your skills and achievements.
                  Use the STAR method (Situation, Task, Action, Result) to structure your answers.
                </p>
              </div>
              
              <div className="tip-item">
                <h4 className="tip-title">Research the Company</h4>
                <p className="tip-content">
                  Understand the company's products, services, culture, and recent news.
                  This shows genuine interest and helps you tailor your responses.
                </p>
              </div>
              
              <div className="tip-item">
                <h4 className="tip-title">Practice Active Listening</h4>
                <p className="tip-content">
                  Listen carefully to the question and make sure you understand what's being asked.
                  It's okay to take a moment to think before answering.
                </p>
              </div>
              
              <div className="tip-item">
                <h4 className="tip-title">Ask Insightful Questions</h4>
                <p className="tip-content">
                  Prepare thoughtful questions to ask the interviewer about the role, team, or company.
                  This demonstrates your interest and engagement.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MockInterviewPage;