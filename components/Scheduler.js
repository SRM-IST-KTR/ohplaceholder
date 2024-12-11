import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <main className="min-h-screen relative">
      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-4 gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-20 sm:mt-8 px-4 sm:px-6">
            <h1
              className="text-[#FCF961] text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 text-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              SCHEDULE
            </h1>
            <div
              className="text-[#FCF961] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              10th - 12th<br />
              March
            </div>
            <div className="flex gap-2 sm:gap-4">
              <div
                className="text-[#745198] text-2xl sm:text-4xl lg:text-5xl tracking-wider text-center"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                <span key={timeLeft.days}>{timeLeft.days.toString().padStart(2, '0')}D</span>
                <span className="mx-1 sm:mx-2">:</span>
                <span key={timeLeft.hours}>{timeLeft.hours.toString().padStart(2, '0')}H</span>
                {timeLeft.minutes > 0 && (
                  <>
                    <span className="mx-1 sm:mx-2">:</span>
                    <span key={timeLeft.minutes}>
                      {timeLeft.minutes.toString().padStart(2, '0')}M
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-[500px] h-[500px]">
              <Image
                src="/butterfly.png"
                alt="Schedule Illustration"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Scheduler;
