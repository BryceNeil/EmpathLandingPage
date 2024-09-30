"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'Web1.jpg',
  'Web2.jpg',
  'Web3.jpg',
  'Web4.jpg',
  // Add more image URLs here
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '100vh' }}>
      <div className='flex flex-row gap-x-6 mb-8'>
        <ChevronLeft onClick={handlePrev} style={{ cursor: 'pointer', zIndex: 2, fontSize: '2rem', color: 'white', marginBottom: '10px' }} />
        <ChevronRight onClick={handleNext} style={{ cursor: 'pointer', zIndex: 2, fontSize: '2rem', color: 'white', marginBottom: '10px' }} />
      </div>
     
      <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%', position: 'relative' }}>
        <img
          src={images[(currentIndex - 1 + images.length) % images.length]}
          alt="Previous"
          style={{ width: '70%', opacity: 0.5, cursor: 'pointer', position: 'absolute', left: '-60%' }}  // Adjusted width and position
          onClick={handlePrev}
        />
        <img
          src={images[currentIndex]}
          alt="Current"
          style={{ width: '70%', margin: '0 auto', zIndex: 1 }}  // Adjusted width and centered
        />
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt="Next"
          style={{ width: '70%', opacity: 0.5, cursor: 'pointer', position: 'absolute', right: '-60%' }}  // Adjusted width and position
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Gallery;
