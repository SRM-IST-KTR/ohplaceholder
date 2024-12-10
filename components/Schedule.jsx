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
        <div className="min-h-screen relative overflow-hidden text-white">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300/10 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-16">
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        <h1 className="text-6xl font-extrabold text-[#FCF961] tracking-tight">
                            SCHEDULE
                        </h1>
                        <p className="text-4xl font-semibold text-[#FCF961]">
                            10th - 12th March
                        </p>

                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <div className="text-5xl font-bold text-[#745198] tracking-wider">
                                <span>{timeLeft.days.toString().padStart(2, '0')}D</span>
                                <span className="mx-2 text-white">:</span>
                                <span>{timeLeft.hours.toString().padStart(2, '0')}H</span>
                                <span className="mx-2 text-white">:</span>
                                <span>{timeLeft.minutes.toString().padStart(2, '0')}M</span>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button className="px-8 py-4 bg-[#FCF961] text-black font-bold rounded-full shadow-lg hover:bg-[#e6e051] transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
                        <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] animate-float">
                            <Image
                                src="/aboutman.png"
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
