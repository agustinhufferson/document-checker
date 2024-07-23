import React from 'react';
import '../styles/DocumentCard.css';

const DocumentCard = ({ title, description, imageUrl, color }) => {
  return (
    <div className="document-card" style={{backgroundColor: color}}>
      <div className="text-section">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="Document Illustration" />
        <button className="check-button">Check</button>
      </div>
    </div>
  );
};
export default DocumentCard;