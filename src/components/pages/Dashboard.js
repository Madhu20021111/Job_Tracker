import React from 'react';
import { Search, Upload, MessageCircle, FileText, CheckCircle, TrendingUp, Users, Clock,Briefcase } from 'lucide-react';
import Navbar from '../common/Navbar';
import Card from '../common/Card';
import BackButton from '../common/BackButton';
import './Dashboard.css';


function Dashboard({ onNavigate, onDashboard, onLogout }) {
  return (
    <div className="dashboard-page">
      <Navbar onDashboard={onDashboard} onLogout={onLogout} />

      <div className="dashboard-container">
        {/* <BackButton onClick={() => onNavigate('landing')} text="Back to Home" /> */}

        {/* Welcome Section */}
        <div className="dashboard-welcome">
          <div className="welcome-content">
            <h1 className="dashboard-title animate-fade-in">Your Career Dashboard</h1>
            <p className="dashboard-subtitle">Choose a tool to get started with your job search journey</p>
          </div>
          <div className="welcome-image">
            
            <div className="image-placeholder dashboard-hero-img">
              <span>Dashboard Hero Image (400x200)</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="dashboard-stats">
          <Card className="stat-card card-stats">
            <div className="stat-content">
              <div className="stat-icon stat-blue">
                <Briefcase size={24} />
              </div>
              <div className="stat-info">
                <div className="stat-value">12</div>
                <div className="stat-label">Jobs Applied</div>
              </div>
            </div>
            <div className="stat-trend">
              <TrendingUp size={16} />
              <span>+3 this week</span>
            </div>
          </Card>

          <Card className="stat-card card-stats">
            <div className="stat-content">
              <div className="stat-icon stat-green">
                <CheckCircle size={24} />
              </div>
              <div className="stat-info">
                <div className="stat-value">8/10</div>
                <div className="stat-label">Resume Score</div>
              </div>
            </div>
            <div className="stat-trend">
              <TrendingUp size={16} />
              <span>Improved</span>
            </div>
          </Card>

          <Card className="stat-card card-stats">
            <div className="stat-content">
              <div className="stat-icon stat-purple">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <div className="stat-value">5</div>
                <div className="stat-label">Interviews</div>
              </div>
            </div>
            <div className="stat-trend">
              <Clock size={16} />
              <span>2 pending</span>
            </div>
          </Card>
        </div>

        {/* Tools Section */}
        <div className="dashboard-tools">
          <h2 className="tools-title">Career Tools</h2>
          <div className="tools-grid">
            {[
              {
                id: 'jobsearch',
                icon: Search,
                title: 'Smart Job Search',
                desc: 'Find jobs using natural language search',
                color: '#3b82f6',
                image: 'job-search-tool.jpg'
              },
              {
                id: 'resume',
                icon: FileText,
                title: 'Resume Analyzer',
                desc: 'Get feedback on your resume',
                color: '#10b981',
                image: 'resume-tool.jpg'
              },
              {
                id: 'interview',
                icon: MessageCircle,
                title: 'Mock Interview',
                desc: 'Practice with generated questions',
                color: '#8b5cf6',
                image: 'interview-tool.jpg'
              },
              {
                id: 'coverletter',
                icon: Upload,
                title: 'Cover Letter Generator',
                desc: 'Create personalized cover letters',
                color: '#f59e0b',
                image: 'cover-letter-tool.jpg'
              }
            ].map((tool, index) => (
              <Card key={tool.id} className="tool-card card-interactive" hover onClick={() => onNavigate(tool.id)}>
                <div className="tool-image">
                  <div className="image-placeholder" style={{ backgroundColor: tool.color }}>
                    <tool.icon size={40} color="white" />
                    <div className="tool-image-text">{tool.image}</div>
                  </div>
                </div>
                <div className="tool-content">
                  <div className="tool-icon" style={{ backgroundColor: tool.color }}>
                    <tool.icon size={28} />
                  </div>
                  <h3 className="tool-title">{tool.title}</h3>
                  <p className="tool-description">{tool.desc}</p>
                  <div className="tool-arrow">→</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="dashboard-activity">
          <Card className="activity-card">
            <div className="activity-header">
              <h3 className="activity-title">Recent Activity</h3>
              <span className="activity-badge">Last 7 days</span>
            </div>
            <div className="activity-list">
              {[
                { text: 'Resume analyzed - Score: 8/10', time: '2 hours ago', type: 'success' },
                { text: 'Applied to Software Developer at Tech Solutions', time: '5 hours ago', type: 'info' },
                { text: 'Completed mock interview session', time: '1 day ago', type: 'success' },
                { text: 'Generated cover letter for Marketing role', time: '2 days ago', type: 'info' }
              ].map((activity, i) => (
                <div key={i} className={`activity-item activity-${activity.type}`}>
                  <div className="activity-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div className="activity-content">
                    <span className="activity-text">{activity.text}</span>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Progress Chart Placeholder */}
          <Card className="progress-card">
            <h3 className="progress-title">Your Progress</h3>
            <div className="progress-chart">
              <div className="image-placeholder chart-placeholder">
                <span>Progress Chart (300x200)</span>
              </div>
            </div>
            <div className="progress-summary">
              <div className="progress-item">
                <span className="progress-label">Profile Completion</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
                <span className="progress-percentage">85%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;