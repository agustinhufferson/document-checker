// src/components/DragScrollHorizontal.js
import React, { useState, useRef } from 'react';
import DocumentCard from './DocumentCard.jsx';
import '../styles/DocList.css';
import img from '../styles/images.png';

const DocList = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);
  
  const colors = {
    green:'#cee83f',
    pink: '#e7c9e7',
    white:'#fff'
  }


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const documents = [
    { title: 'Title Of Document 1', description: 'Some description here. Some description here.', color: colors.green},
    { title: 'Title Of Document 2', description: 'Some description here. Some description here.', color: colors.pink},
    { title: 'Title Of Document 3', description: 'Some description here. Some description here.', color: colors.white },

    // Add more documents as needed
  ];

  return (
    <div
     className='list'
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        display: 'flex',
        overflowX: 'auto',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {documents.map((doc, index) => (
        <DocumentCard key={index} title={doc.title} description={doc.description} imageUrl={img} color={doc.color}/>
      ))}
    </div>
  );
};

export default DocList;
