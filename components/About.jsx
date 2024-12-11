import React from 'react';
import grid1 from '../public/grid1.png';
import grid2 from '../public/grid2.png';
import man from '../public/aboutman.png';
import Image from 'next/image';

const About = () => {
    return (
        <div id="about" className="">
            <p className="text-4xl sm:text-6xl md:text-7xl text-[#FCF961] font-bold text-center">
                ABOUT THE EVENT
            </p>
            <div className="sm:ml-10 md:ml-[100px] xl:ml-[440px] pt-6 sm:pt-8 md:pt-10">
                <div className="bg-[#7B008F] rounded-2xl w-full sm:w-[500px] md:w-[600px] lg:w-[700px] lg:-ml-[20px] mx-auto">
                    <p className="text-white p-6 sm:p-8 md:p-10 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">
                        OSSome Hacks is the new chapter of OSSmosis organized by the GitHub
                        Community SRM. It is an open-source hackathon, where participants
                        will brainstorm to leverage existing technologies; innovate and
                        improve the existing systems and fix the loopholes for betterment.
                    </p>
                </div>
            </div>
            <div>
                <Image
                    src={man}
                    alt="Man Image"
                    className="absolute w-[200px] -mt-[610px] ml-[264px] hidden lg:block"
                />
            </div>
        </div>
    );
};
export default About;
