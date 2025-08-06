import React from 'react';

const jobCounter = () => {
  return (
    <div>
      <div className="activeResumes">
        <h2>Active Resumes</h2>
        <h3>203K</h3>
      </div>
      <div className="employers">
        <h2>Employers</h2>
        <h3>100K</h3>
      </div>
      <div className="activeJobs">
        <h2>Active jobs</h2>
        <h3>50K</h3>
      </div>
    </div>
  );
};

export default jobCounter;