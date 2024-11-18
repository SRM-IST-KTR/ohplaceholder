import { useState } from "react";

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

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCenterScaled, setIsCenterScaled] = useState(true);

  const handleArrowClick = (direction) => {
    setIsCenterScaled(false);
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + sponsors.length) % sponsors.length
        : (prevIndex + 1) % sponsors.length
    );
    setTimeout(() => setIsCenterScaled(true), 80);
  };

  return (
    <div className="m-0 p-0 w-full">
      <div className="w-full flex flex-col items-center gap-8 md:gap-20">
        
        {/* Section Header */}
        <section className="w-full text-center">
          <h1 className="text-[#FCF961] text-4xl md:text-6xl font-bold drop-shadow-[0_2px_1px_#ffffff80]">
            PARTNERS AND SPONSORS
          </h1>
        </section>

        {/* Carousel Container */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 p-8 md:p-32">
          
          {/* Left Arrow */}
          <button
            className="bg-[rgb(131,4,209)] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => handleArrowClick("left")}
          >
            <img src="/leftarrow.png" alt="Left Arrow" className="max-w-[80%]" />
          </button>

          {/* Carousel Cards */}
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 lg:gap-20">
            
            {/* Left Card */}
            <div
              className="w-28 h-40 md:w-40 md:h-52 lg:w-52 lg:h-72 bg-gradient-to-br from-purple-400 to-customPurpleEnd rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out"
            >
              <img
                src={sponsors[(currentIndex - 1 + sponsors.length) % sponsors.length].logo}
                alt={sponsors[(currentIndex - 1 + sponsors.length) % sponsors.length].name + " Logo"}
                className="max-w-[70%] rounded-lg"
              />
            </div>

          {/* Center Card */}
{/* Center Card */}
<div className="relative group">
  <div
    className={`w-36 h-48 md:w-52 md:h-64 lg:w-64 lg:h-80 bg-gradient-to-br from-purple-500 to-customPurpleEnd rounded-lg flex items-center justify-center transition-all duration-400 ease-in-out outline outline-4 outline-yellow-400  ${
      isCenterScaled ? "scale-125 z-10" : ""
    } group-hover:shadow-[0_0_20px_10px_rgba(252,249,97,0.5)]`}
  >
    <img
      src={sponsors[currentIndex].logo}
      alt={sponsors[currentIndex].name + " Logo"}
      className="max-w-[70%] rounded-lg"
    />
  </div>
</div>
            {/* Right Card */}
            <div
              className="w-28 h-40 md:w-40 md:h-52 lg:w-52 lg:h-72 bg-gradient-to-br from-purple-400 to-customPurpleEnd rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out"
            >
              <img
                src={sponsors[(currentIndex + 1) % sponsors.length].logo}
                alt={sponsors[(currentIndex + 1) % sponsors.length].name + " Logo"}
                className="max-w-[70%] rounded-lg"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="bg-[rgb(131,4,209)] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => handleArrowClick("right")}
          >
            <img src="/rightarrow.png" alt="Right Arrow" className="max-w-[80%]" />
          </button>
        </div>
      </div>
    </div>
  );
}

