import React from 'react'
import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
    src: "../public/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "../public/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const About = () => {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} relative`}>
            {/* About section */}
            <div
                className="about w-[1036px] h-[156px] flex items-center justify-center bg-black-100 opacity-100"
                style={{
                    marginLeft: '250px',
                    top: '116px',
                    left: '12px',
                    position: 'relative',
                }}
            >
                <h1
                    style={{
                        fontFamily: 'Inter',
                        fontSize: '100px',
                        fontWeight: 700,
                        lineHeight: '128.28px',
                        textAlign: 'left',
                        color: '#FCF961',
                    }}
                >
                    ABOUT THE EVENT
                </h1>
            </div>

            {/* Main content section */}
            <div
                className="aboutMain w-[1100px] h-[450px] bg-[#7B008F] opacity-100 rounded-[55px] relative flex items-center"
                style={{
                    top: '190px',
                    left: '270px',
                    position: 'relative',
                    padding: '40px',
                }}
            >
                <Image
                    src="/man.png"
                    alt="Description of the image"
                    width={330}
                    height={620}
                    className="rounded-[20px] absolute"
                    style={{
                        top: '-260px',
                        left: '-250px',
                    }}
                />

                <p
                    className="para"
                    style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '35px', // Increased font size for more coverage
                        lineHeight: '50px', // Increased line height for balanced spacing
                        letterSpacing: '3.5%',
                        color: 'white',
                        textAlign: 'justify-left', // Justify text to cover the box width
                        marginLeft: '180px',
                        maxWidth: '600px',
                    }}
                >
                    OSSome Hacks is the new chapter of OSSmosis organized by the GitHub Community SRM. It is an open-source hackathon, where participants will brainstorm to leverage existing technologies; innovate and improve the existing systems and fix the loopholes for betterment.
                </p>
            </div>
        </div>
    )
}

export default About
