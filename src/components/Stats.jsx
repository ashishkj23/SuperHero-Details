import React from 'react';
import './Stats.css';

const Stats = ({ stats }) => {
  return (
    <div className="stats-container">
      <ul>
        {Object.keys(stats).map((key) => (
          <li key={key}>
            {key}: {stats[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
