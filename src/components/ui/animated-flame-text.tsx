import React from 'react';
import './animated-flame-text.css';

const AnimatedFlameText = ({ text }: { text: React.ReactNode }) => {
  return (
    <div className="flame-container">
      <h1 className="flame-text">{text}</h1>
    </div>
  );
};

export default AnimatedFlameText;
