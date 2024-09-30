"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Add this import

export default function RightPanel() {
  const [imageIndex, setImageIndex] = useState(1);
  const images = ['team1.jpg', 'team2.jpg', 'team3.jpg', 'team4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex % images.length) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]); // Add images.length to the dependency array

  const imageSrc = `/${images[imageIndex - 1]}`;

  return (
    <div className="w-1/3 h-full border-t border-charcoal-900 flex flex-col"> {/* Added flex and flex-col */}
      <Image src={imageSrc} alt={`Team ${imageIndex}`} className="flex-grow h-full object-cover" width={500} height={500} /> {/* Added flex-grow */}
    </div>
  );
}