import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Shapes with Animations */}
      <div
        className="absolute top-10 left-10 animate-float-slow"
        style={{ animationDelay: '0s' }}
      >
        <img
          src="/Vector.png"
          alt="Floating Shape"
          className="w-[100px] sm:w-[100px] md:w-[150px] lg:w-[340px]"
        />
      </div>

      <div
        className="absolute top-[40%] left-[70%] animate-float-fast"
        style={{ animationDelay: '1s' }}
      >
        <img
          src="/Vector2.png"
          alt="Floating Shape 2"
          className="w-[80px] sm:w-[60px] md:w-[100px] lg:w-[120px]"
        />
      </div>

      <div
        className="absolute bottom-[15%] left-[10%] animate-float-slow"
        style={{ animationDelay: '2s' }}
      >
        <img
          src="/Vector3.png"
          alt="Floating Shape"
          className="w-[120px] sm:w-[100px] md:w-[140px] lg:w-[160px]"
        />
      </div>

      <div
        className="absolute bottom-[10%] right-[10%] animate-float-medium"
        style={{ animationDelay: '1.5s' }}
      >
        <img
          src="/Vector.png"
          alt="Floating Shape"
          className="w-[100px] sm:w-[80px] md:w-[120px] lg:w-[140px]"
        />
      </div>

      {/* Centered Content */}
      <div className="z-10 flex flex-col items-center justify-center">
        <img
          className="relative w-[90%] md:w-[100%] max-w-[700px] h-auto object-contain"
          src="/brain.png"
          alt="Brain Illustration"
        />
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:w-[80%] md:w-[60%] h-auto object-contain"
          src="/text.png"
          alt="Text Illustration"
        />
      </div>

      {/* Floating Animation */}
      <style jsx>{`
                @keyframes float-slow {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
                @keyframes float-medium {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-25px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
                @keyframes float-fast {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-35px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                .animate-float-medium {
                    animation: float-medium 4s ease-in-out infinite;
                }
                .animate-float-fast {
                    animation: float-fast 3s ease-in-out infinite;
                }
            `}</style>
    </div>
  );
}
