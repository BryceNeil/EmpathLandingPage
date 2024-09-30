"use client";

import { useEffect } from "react";


export default function Hero() {
  // Remove the unused variable
  // const timeLeft = ...;

  useEffect(() => {
    const targetDate = new Date("October 1, 2024 00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countdown);
        // setTimeLeft("The event has started!");
        return;
      }

      // Remove unused variables
      // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    const preorderButton = document.querySelector('.preorder-button');
    if (preorderButton) {
      preorderButton.classList.add('active');
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
        {/* Header with logos */}
        <header className="w-full flex justify-between items-center z-10 relative">
            <div className="w-full text-md uppercase text-white">
            {/* <span c lassName="text-red-600">Red</span> Rabbit Robotics */}
            </div>
            {/* <Image src="/logo.png" alt="Logo" width={40} height={30} className="h-8" /> */}
            
        </header>
        
        <div className="absolute bg-charcoal-800/50 rounded-xl bottom-0 left-0 mx-16 my-8 px-16 py-12 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl z-10" style={{ backdropFilter: 'blur(40px)' }}>
            {/* <div className="text-white font-normal text-4xl silver-effect"> 
            Noninvasive neurotechnology for mental health.
            </div> */}
            <div className="text-white font-normal text-4xl silver-effect">
              Noninvasive neurotechnology for mental health. 
            </div>
            
            <div className="mt-6">
            <button className="preorder-button text-white" >
                <span className="icon">→</span>
                <span className="text">Pre-order now</span>
            </button>
            </div>
        </div>

      {/* Red circle */}
      <div className="red-circle"></div>
      
      {/* Product Customization Component */}
      {/* <Image
        src="/RX1FaceOn.png" 
        alt="Middle Right Image" 
        width={1000}
        height={1000}
        className="absolute top-1/2 left-[30%] transform -translate-y-1/4 w-full"  // Changed w-2/3 to w-3/4
      /> */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/brain_edit.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
  );
}