import React from 'react';

export default function Hero() {
  return (
    <div 
      className="flex items-center justify-center h-screen relative overflow-hidden" 
      style={{
        backgroundColor: 'rgb(27,11,30)',  // Background color
        backgroundImage: 'url(/bg.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-2 opacity-10">
        <div className="col-span-12 row-span-12 bg-grid-dot"></div>
      </div>

      {/* Floating geometric shapes - Visible only on larger screens */}
      <div className="absolute top-10 left-10 sm:hidden md:block lg:block">
        <img src="/Vector.png" alt="Floating Shape" />
      </div>

      {/* Floating Shape number 2 with exact styling - Visible only on larger screens */}
      <img
        className="absolute z-[9] m-auto object-contain sm:hidden md:block lg:block sm:w-[80px] md:w-[97px] lg:w-[110px] sm:h-[100px] md:h-[126px] lg:h-[140px]"
        src="/Vector2.png"
        alt="Floating Shape 2"
        style={{
          top: '35.86px',
          left: '800.3px',
        }}
      />

      <div 
        className="absolute sm:hidden md:block lg:block sm:top-[250px] md:top-[300px] lg:top-[350px]" 
        style={{
          left: '15%',
        }}
      >
        <img src="/Vector3.png" alt="Floating Shape" />
      </div>

      <div 
        className="absolute sm:hidden md:block lg:block" 
        style={{
          width: '340.21px',
          height: '259.97px',   
          bottom: '250.97px',   
          right: '0px',         
        }}
      >
        <img src="/Vector.png" alt="Floating Shape" />
      </div>

      {/* Center Content - Brain Image with Text Image on top */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Brain Image */}
        <img
          className="absolute sm:w-[90%] md:w-[100%] h-[470px] object-contain"
          src="/brain.png"
          alt="Brain"
        />

        {/* Text Image */}
        <img
          className="absolute sm:w-[60%] md:w-[53%] h-[390px] object-contain sm:top-[80px] md:top-[100px]"
          src="/text.png"
          alt="Text"
        />
      </div>
    </div>
  );
}
