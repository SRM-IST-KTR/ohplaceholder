import React from 'react';
import Scheduler from '../components/Scheduler';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #0A0011 0%, #2D0A46 50%, #0A0011 100%)'
          }}>
     
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-blue-300/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-4 gap-8">
         
          <div className="w-full lg:w-1/2">
            <Scheduler />
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

     
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}