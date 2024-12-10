import { useState, useRef } from "react";

const sponsors = [
    {
        name: "SWOC",
        logo: "https://res.cloudinary.com/doslhy0tq/image/upload/v1729971260/SWOC_mfzb98.png",
    },
    {
        name: "Linux Foundation",
        logo: "https://www.linuxfoundation.org/hubfs/lf-stacked-color.svg",
    },
    {
        name: "Genxyz",
        logo: "https://res.cloudinary.com/doslhy0tq/image/upload/v1729540377/xyz-logo-color_mrldu1.svg",
    },
];

export default function Sponsors() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCenterScaled, setIsCenterScaled] = useState(true);
    const swipeStart = useRef(null);

    // Handle the swipe functionality for mobile
    const handleSwipeStart = (e) => {
        swipeStart.current = e.touches[0].clientX;
    };

    const handleSwipeMove = (e) => {
        if (!swipeStart.current) return;
        const currentTouch = e.touches[0].clientX;
        if (swipeStart.current - currentTouch > 50) {
            handleArrowClick("right");
            swipeStart.current = null;
        } else if (currentTouch - swipeStart.current > 50) {
            handleArrowClick("left");
            swipeStart.current = null;
        }
    };

    const handleArrowClick = (direction) => {
        setIsCenterScaled(false);
        setCurrentIndex((prevIndex) =>
            direction === "left"
                ? (prevIndex - 1 + sponsors.length) % sponsors.length
                : (prevIndex + 1) % sponsors.length
        );
        setTimeout(() => setIsCenterScaled(true), 300);
    };

    return (
        <div className="w-full p-8 md:p-16">
            <div className="w-full flex flex-col items-center gap-8 md:gap-20">

                <section className="text-center">
                    <h1 className="text-[#FCF961] text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
                        PARTNERS AND SPONSORS
                    </h1>
                </section>

                <div
                    className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 p-4 md:p-16"
                    onTouchStart={handleSwipeStart}
                    onTouchMove={handleSwipeMove}
                >
                    <button
                        className="bg-[#7B008F] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 transform hover:scale-110"
                        onClick={() => handleArrowClick("left")}
                    >
                        <img src="/leftarrow.png" alt="Left Arrow" className="max-w-[70%]" />
                    </button>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20">
                        {/* Previous Sponsor */}
                        <div
                            className="w-32 h-40 md:w-40 md:h-52 lg:w-52 lg:h-64 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                        >
                            <img
                                src={sponsors[(currentIndex - 1 + sponsors.length) % sponsors.length].logo}
                                alt={sponsors[(currentIndex - 1 + sponsors.length) % sponsors.length].name + " Logo"}
                                className="max-w-[70%] rounded-lg"
                            />
                        </div>

                        {/* Center Sponsor */}
                        <div className="relative group">
                            <div
                                className={`w-36 h-48 md:w-52 md:h-64 lg:w-64 lg:h-80 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center transition-all duration-400 ease-in-out outline outline-4 outline-yellow-400 ${isCenterScaled ? "scale-125 z-10" : ""} group-hover:shadow-2xl`}
                            >
                                <img
                                    src={sponsors[currentIndex].logo}
                                    alt={sponsors[currentIndex].name + " Logo"}
                                    className="max-w-[70%] rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Next Sponsor */}
                        <div
                            className="w-32 h-40 md:w-40 md:h-52 lg:w-52 lg:h-64 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                        >
                            <img
                                src={sponsors[(currentIndex + 1) % sponsors.length].logo}
                                alt={sponsors[(currentIndex + 1) % sponsors.length].name + " Logo"}
                                className="max-w-[70%] rounded-lg"
                            />
                        </div>
                    </div>

                    <button
                        className="bg-[#7B008F] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 transform hover:scale-110"
                        onClick={() => handleArrowClick("right")}
                    >
                        <img src="/rightarrow.png" alt="Right Arrow" className="max-w-[70%]" />
                    </button>
                </div>
            </div>
        </div>
    );
}
