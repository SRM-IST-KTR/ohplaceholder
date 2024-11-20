import React from 'react';
import grid1 from '../../public/grid1.png';
import grid2 from '../../public/grid2.png';
import man from '../../public/aboutman.png';
import Image from 'next/image';



const About = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-radial from-[#4C0058] to-[#1C0C1F] relative">
        
        <div className="absolute inset-0 z-10">
          <Image 
            src={grid1} 
            alt="Background Grid 1" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-60" 
          />
        </div>

        
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <Image 
            src={grid1} 
            alt="Background Grid 1" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-60 -ml-[50px]" 
          />
        </div>
        

        <div className="relative z-30">
          <p className='text-4xl sm:text-6xl md:text-7xl text-[#FCF961] font-bold text-center pt-24 sm:pt-32'>
            ABOUT THE EVENT
          </p>

          
          <div className='sm:ml-10 md:ml-[100px]  xl:ml-[440px] pt-6 sm:pt-8 md:pt-10'>
            <div className='bg-[#7B008F] rounded-2xl w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] lg:-ml-[20px]  mx-auto'>
              <p className='text-white p-6 sm:p-8 md:p-10 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                OSSome Hacks is the new chapter of OSSmosis organized by the GitHub Community SRM. It is an open-source hackathon, where participants will brainstorm to leverage existing technologies; innovate and improve the existing systems and fix the loopholes for betterment.
              </p>
            </div>
          </div>

         
          <div className=''>
            <Image 
              src={man} 
              alt="Man Image"
              className='absolute w-[200px] -mt-[610px] ml-[264px] hidden lg:block '
              
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About