import React from 'react';

const ActivitiesSection = () => {
  return (
    <section className="activities-section" id="activities">
      <div className="container">
        <h2 className="section-title">Our Activities</h2>
        <p className="activities-intro">
          Within the community, members actively engage in collaborative and developmental activities designed to benefit everyone—from novices to experts—while reinforcing the habit of lifelong learning:
        </p>
        <div className="activities-list">
          <div className="activity-card">
            <span className="activity-icon" role="img" aria-label="job opportunities">💼</span>
            <h3>Sharing Job Opportunities</h3>
            <ul>
              <li>Connect members with new roles and projects</li>
            </ul>
          </div>
          <div className="activity-card">
            <span className="activity-icon" role="img" aria-label="open source">🌱</span>
            <h3>Open-Source Collaboration</h3>
            <ul>
              <li>Work together on impactful open-source projects</li>
            </ul>
          </div>
          <div className="activity-card">
            <span className="activity-icon" role="img" aria-label="study groups">📚</span>
            <h3>Study Groups</h3>
            <ul>
              <li>Organize and join focused learning groups</li>
            </ul>
          </div>
          <div className="activity-card">
            <span className="activity-icon" role="img" aria-label="use cases">💡</span>
            <h3>Real-World Use Cases</h3>
            <ul>
              <li>Discuss business scenarios and technical solutions</li>
            </ul>
          </div>
          <div className="activity-card">
            <span className="activity-icon" role="img" aria-label="knowledge exchange">🔄</span>
            <h3>Knowledge Exchange</h3>
            <ul>
              <li>Share technical and leadership insights</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
