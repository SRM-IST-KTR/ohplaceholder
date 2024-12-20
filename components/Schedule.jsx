import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Schedule = () => {
    // Time Calculation Logic
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
        <div id='schedule'>
            <div className="z-10 container mx-auto mt-10 lg:mt-0">
                <div className="flex flex-col lg:flex-row items-center justify-between h-[75vh] gap-4 lg:gap-8">
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                        <h1 className="text-6xl font-extrabold text-[#FCF961] tracking-tight">
                            SCHEDULE
                        </h1>
                        <p className="text-4xl font-semibold text-[#FCF961]">
                            10th - 12th March
                        </p>

                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                            <div className="text-5xl font-bold text-[#745198] tracking-wider">
                                <span>{timeLeft.days.toString().padStart(2, '0')}D</span>
                                <span className="mx-2 text-white">:</span>
                                <span>{timeLeft.hours.toString().padStart(2, '0')}H</span>
                                <span className="mx-2 text-white">:</span>
                                <span>{timeLeft.minutes.toString().padStart(2, '0')}M</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="px-8 py-4 bg-[#FCF961] text-black font-bold rounded-full shadow-lg hover:bg-[#e6e051] transition duration-300">
                                Apply with Devfolio
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
                        <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] animate-float">
                            <Image
                                src="/OCTOCATBHAIYA.png"
                                alt="Schedule Illustration"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Schedule;
