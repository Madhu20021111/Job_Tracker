import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import Navbar from '../common/Navbar';
import Button from '../common/Button';
import Card from '../common/Card';
import Input from '../common/Input';
import './JobSearchPage.css';

const JobSearchPage = ({ onDashboard, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const jobListings = [
    { id: 1, title: 'Software Developer', company: 'Tech Solutions Ltd', location: 'Colombo', type: 'Full-time' },
    { id: 2, title: 'Marketing Assistant', company: 'Creative Agency', location: 'Kandy', type: 'Part-time' },
    { id: 3, title: 'Data Analyst', company: 'Analytics Corp', location: 'Galle', type: 'Remote' },
    { id: 4, title: 'UI/UX Designer', company: 'Design Studio', location: 'Colombo', type: 'Full-time' },
    { id: 5, title: 'Business Analyst', company: 'Consulting Firm', location: 'Remote', type: 'Contract' },
  ];

  return (
    <div className="job-search-page">
      <Navbar onDashboard={onDashboard} onLogout={onLogout} />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Smart Job Search</h1>
          <p className="page-subtitle">Use natural language to find your perfect job</p>
        </div>
        
        <Card className="search-card">
          <div className="search-form">
            <div className="search-input-container">
              <Input 
                placeholder="e.g., 'remote IT job in Kandy for freshers' or 'marketing assistant Colombo'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={Search}
              />
            </div>
            <div className="search-filters">
              <select className="filter-select">
                <option>All Locations</option>
                <option>Colombo</option>
                <option>Kandy</option>
                <option>Galle</option>
                <option>Remote</option>
              </select>
              <select className="filter-select">
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>
              <Button>Search</Button>
            </div>
          </div>
        </Card>
        
        <div className="job-listings">
          {jobListings.map((job) => (
            <Card key={job.id} className="job-card" hover>
              <div className="job-content">
                <div className="job-details">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                  <div className="job-meta">
                    <div className="job-location">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-type">
                      <Briefcase size={16} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <p className="job-description">
                    Join our dynamic team and contribute to innovative projects. We offer competitive salary, 
                    flexible working arrangements, and great career development opportunities.
                  </p>
                </div>
                <Button className="apply-btn">Apply Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;