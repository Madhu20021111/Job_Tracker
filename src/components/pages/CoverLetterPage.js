import React, { useState } from 'react';
import { Download, Copy, FileText, Building, User, Mail, MapPin } from 'lucide-react';
import Navbar from '../common/Navbar';
import Button from '../common/Button';
import Card from '../common/Card';
import Input from '../common/Input';
import './CoverLetterPage.css';

const CoverLetterPage = ({ onDashboard, onLogout }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    hiringManager: '',
    jobTitle: '',
    jobSource: '',
    skills: '',
    achievements: ''
  });
  
  const [coverLetter, setCoverLetter] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateCoverLetter = () => {
    // This would typically call an API, but we'll simulate it
    const letter = `
Dear ${formData.hiringManager || 'Hiring Manager'},

I am writing to express my enthusiastic interest in the ${formData.jobTitle || 'position'} at ${formData.companyName || 'your company'}, which I discovered through ${formData.jobSource || 'your job posting'}. 

With my background in ${formData.skills || 'relevant skills'} and my experience in ${formData.achievements || 'achieving results'}, I am confident that I possess the qualities you are seeking in a candidate.

I was particularly drawn to this opportunity because of ${formData.companyName ? `${formData.companyName}'s` : 'your'} reputation for excellence and innovation. I admire your commitment to [specific company value or achievement] and believe my skills in [specific skill] would contribute significantly to your team.

In my previous role, I successfully [specific achievement or project], which resulted in [quantifiable result]. This experience has equipped me with the [specific skills] that I believe are crucial for success in the ${formData.jobTitle || 'position'}.

I am excited about the opportunity to bring my unique talents to ${formData.companyName || 'your company'} and am confident that I would be a valuable addition to your team. Thank you for considering my application.

Sincerely,
[Your Name]
[Your Contact Information]
    `.trim();
    
    setCoverLetter(letter);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coverLetter);
    alert('Cover letter copied to clipboard!');
  };

  return (
    <div className="cover-letter-page">
      <Navbar onDashboard={onDashboard} onLogout={onLogout} />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Cover Letter Generator</h1>
          <p className="page-subtitle">Create personalized cover letters in minutes</p>
        </div>
        
        <div className="cover-letter-content">
          <Card className="form-card">
            <h3 className="section-title">Job Information</h3>
            
            <div className="form-grid">
              <div className="input-group">
                <label className="input-label">Company Name</label>
                <Input 
                  placeholder="e.g., Tech Solutions Ltd" 
                  icon={Building}
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>
              
              <div className="input-group">
                <label className="input-label">Hiring Manager Name</label>
                <Input 
                  placeholder="e.g., John Smith" 
                  icon={User}
                  value={formData.hiringManager}
                  onChange={(e) => handleInputChange('hiringManager', e.target.value)}
                />
              </div>
              
              <div className="input-group">
                <label className="input-label">Job Title</label>
                <Input 
                  placeholder="e.g., Software Developer" 
                  icon={FileText}
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                />
              </div>
              
              <div className="input-group">
                <label className="input-label">Where you found the job</label>
                <Input 
                  placeholder="e.g., LinkedIn, Company Website" 
                  icon={MapPin}
                  value={formData.jobSource}
                  onChange={(e) => handleInputChange('jobSource', e.target.value)}
                />
              </div>
            </div>
            
            <div className="input-group">
              <label className="input-label">Key Skills (comma separated)</label>
              <Input 
                placeholder="e.g., React, Node.js, MongoDB" 
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
              />
            </div>
            
            <div className="input-group">
              <label className="input-label">Key Achievements</label>
              <textarea 
                className="text-area"
                placeholder="Describe your relevant achievements or experiences..."
                value={formData.achievements}
                onChange={(e) => handleInputChange('achievements', e.target.value)}
                rows="4"
              />
            </div>
            
            <Button className="w-full" onClick={generateCoverLetter}>
              Generate Cover Letter
            </Button>
          </Card>
          
          <Card className="preview-card">
            <h3 className="section-title">Cover Letter Preview</h3>
            
            {coverLetter ? (
              <>
                <div className="cover-letter-preview">
                  <pre className="letter-content">{coverLetter}</pre>
                </div>
                
                <div className="letter-actions">
                  <Button variant="outline" onClick={copyToClipboard}>
                    <Copy size={20} />
                    Copy to Clipboard
                  </Button>
                  <Button variant="success">
                    <Download size={20} />
                    Download as PDF
                  </Button>
                </div>
              </>
            ) : (
              <div className="empty-preview">
                <FileText size={48} />
                <p>Fill out the form and generate your cover letter</p>
                <p className="preview-subtext">
                  Your personalized cover letter will appear here. Make sure to review and customize it before sending.
                </p>
              </div>
            )}
          </Card>
        </div>
        
        <Card className="tips-section">
          <h3 className="section-title">Cover Letter Tips</h3>
          <div className="tips-grid">
            <div className="tip">
              <h4 className="tip-title">Customize for Each Job</h4>
              <p>Tailor your cover letter to match the specific job requirements and company culture.</p>
            </div>
            <div className="tip">
              <h4 className="tip-title">Show Enthusiasm</h4>
              <p>Express genuine interest in the company and the specific role you're applying for.</p>
            </div>
            <div className="tip">
              <h4 className="tip-title">Highlight Relevant Achievements</h4>
              <p>Focus on accomplishments that are most relevant to the position you're seeking.</p>
            </div>
            <div className="tip">
              <h4 className="tip-title">Keep it Concise</h4>
              <p>Aim for 3-4 paragraphs that can be read in less than a minute.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CoverLetterPage;