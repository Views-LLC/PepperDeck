import React, { useEffect, useState } from 'react';
import './InterviewItem.css';

const InterviewItem = ({ date, position, company, index }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay the appearance of each item by multiplying the index
    const timeout = setTimeout(() => {
      setVisible(true);
    }, index * 200); // Adjust the delay duration as needed

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className={`itemContainer hvr-float rounded-md bg-white bg-clip-border text-gray-700 shadow-md ${visible ? 'fade-in' : ''}`}>
      <div className="interviewDate">{date}</div>
      <div className="companyNameTitle">{company}</div>
      <div className="positionTitle">{position}</div>
    </div>
  );
};

export default InterviewItem;