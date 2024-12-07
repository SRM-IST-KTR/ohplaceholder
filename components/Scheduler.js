import React, { useState, useEffect } from 'react';

const Scheduler = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('March 10, 2025 00:00:00');
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    return { days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-8">
      <h1 className="text-[#FCF961] text-6xl font-bold mb-8 text-center"
          style={{
            fontFamily: 'Inter, sans-serif',
          }}>
        SCHEDULE
      </h1>

      
      <div className="text-[#FCF961] text-5xl font-bold mb-8"
           style={{
             fontFamily: 'Work Sans, sans-serif',
           }}>
        10th - 12th<br/>
        March
      </div>

    
      <div className="flex gap-4">
        <div className="text-[#745198] text-5xl tracking-wider"
             style={{
               fontFamily: 'Work Sans, sans-serif',
             }}>
          <span key={timeLeft.days}>{timeLeft.days.toString().padStart(2, '0')}D</span>
          <span className="mx-2">:</span>
          <span key={timeLeft.hours}>{timeLeft.hours.toString().padStart(2, '0')}H</span>
          {timeLeft.minutes > 0 && (
            <>
              <span className="mx-2">:</span>
              <span key={timeLeft.minutes}>{timeLeft.minutes.toString().padStart(2, '0')}M</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
