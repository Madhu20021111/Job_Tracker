import React,{useState} from 'react';
import { Upload, CheckCircle, AlertCircle, FileText, Star, Download } from 'lucide-react';
import Navbar from '../common/Navbar';
import Button from '../common/Button';
import Card from '../common/Card';
import BackButton from '../common/BackButton';
import './ResumeAnalyzerPage.css';

const ResumeAnalyzerPage = ({ onDashboard, onLogout }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <div className="resume-page">
      <Navbar onDashboard={onDashboard} onLogout={onLogout} />
      <div className="page-container">
        <BackButton onClick={onDashboard} />
        <div className="page-header">
          <h1 className="page-title">Resume Analyzer</h1>
          <p className="page-subtitle">Upload your resume and get instant feedback</p>
        </div>
        
        <div className="resume-content">
          <Card className="upload-card">
            <h3 className="section-title">Upload Resume</h3>
            <div 
              className="upload-zone"
              onClick={() => document.getElementById('resume-upload').click()}
            >
              <Upload size={48} />
              <p className="upload-text">
                Click to upload or drag and drop
              </p>
              <p className="upload-subtext">PDF, DOCX up to 10MB</p>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.docx"
                style={{ display: 'none' }}
                onChange={(e) => setUploadedFile(e.target.files[0])}
              />
            </div>
            
            {uploadedFile && (
              <div className="upload-success">
                <CheckCircle size={20} />
                <span>File uploaded: {uploadedFile.name}</span>
              </div>
            )}
            
            <Button className="w-full mt-4" disabled={!uploadedFile}>
              Analyze Resume
            </Button>
          </Card>
          
          <Card className="analysis-card">
            <h3 className="section-title">Analysis Results</h3>
            
            {uploadedFile ? (
              <div className="analysis-content">
                <div className="score-card">
                  <span className="score-label">Overall Score</span>
                  <div className="score-value">
                    <Star size={20} />
                    <span className="score-number">7.5/10</span>
                  </div>
                </div>
                
                <div className="feedback-list">
                  <div className="feedback-item feedback-error">
                    <AlertCircle size={16} />
                    <div>
                      <h4 className="feedback-title">Missing Keywords</h4>
                      <p className="feedback-text">Add: React.js, API integration, MongoDB</p>
                    </div>
                  </div>
                  
                  <div className="feedback-item feedback-warning">
                    <AlertCircle size={16} />
                    <div>
                      <h4 className="feedback-title">Formatting</h4>
                      <p className="feedback-text">Consider using bullet points for achievements</p>
                    </div>
                  </div>
                  
                  <div className="feedback-item feedback-success">
                    <CheckCircle size={16} />
                    <div>
                      <h4 className="feedback-title">Strengths</h4>
                      <p className="feedback-text">Clear contact information and good structure</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="success" className="w-full">
                  <Download size={20} />
                  Download Improved Version
                </Button>
              </div>
            ) : (
              <div className="empty-state">
                <FileText size={48} />
                <p>Upload your resume to see analysis results</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzerPage;