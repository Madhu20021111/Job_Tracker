import React from 'react';
import { Search, Upload, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import Navbar from '../common/Navbar';
import Card from '../common/Card';
import './Dashboard.css';

const Dashboard = ({ onNavigate, onDashboard, onLogout }) => (
  <div className="dashboard-page">
    <Navbar onDashboard={onDashboard} onLogout={onLogout} />
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Your Career Dashboard</h1>
        <p className="dashboard-subtitle">Choose a tool to get started with your job search journey</p>
      </div>
      
      <div className="dashboard-tools">
        {[
          { 
            id: 'jobsearch', 
            icon: Search, 
            title: 'Smart Job Search', 
            desc: 'Find jobs using natural language search',
            color: '#3b82f6'
          },
          { 
            id: 'resume', 
            icon: FileText, 
            title: 'Resume Analyzer', 
            desc: 'Get feedback on your resume',
            color: '#10b981'
          },
          { 
            id: 'interview', 
            icon: MessageCircle, 
            title: 'Mock Interview', 
            desc: 'Practice with generated questions',
            color: '#8b5cf6'
          },
          { 
            id: 'coverletter', 
            icon: Upload, 
            title: 'Cover Letter Generator', 
            desc: 'Create personalized cover letters',
            color: '#f59e0b'
          }
        ].map((tool) => (
          <Card key={tool.id} className="tool-card" hover onClick={() => onNavigate(tool.id)}>
            <div className="tool-icon" style={{ backgroundColor: tool.color }}>
              <tool.icon size={32} />
            </div>
            <h3 className="tool-title">{tool.title}</h3>
            <p className="tool-description">{tool.desc}</p>
          </Card>
        ))}
      </div>
      
      <div className="dashboard-content">
        <Card className="activity-card">
          <h3 className="section-title">Recent Activity</h3>
          <div className="activity-list">
            {[
              'Resume analyzed - Score: 8/10',
              'Applied to Software Developer at Tech Solutions',
              'Completed mock interview session',
              'Generated cover letter for Marketing role'
            ].map((activity, i) => (
              <div key={i} className="activity-item">
                <CheckCircle size={20} />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="stats-card">
          <h3 className="section-title">Quick Stats</h3>
          <div className="stats-list">
            <div className="stat-item stat-blue">
              <div className="stat-value">12</div>
              <div className="stat-label">Jobs Applied</div>
            </div>
            <div className="stat-item stat-green">
              <div className="stat-value">8/10</div>
              <div className="stat-label">Resume Score</div>
            </div>
            <div className="stat-item stat-purple">
              <div className="stat-value">5</div>
              <div className="stat-label">Interviews Practiced</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default Dashboard;