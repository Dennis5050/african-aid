// src/components/StruggleGallery.jsx
import React, { useRef } from "react";

import waterImg from "../assets/water-trek.jpeg";
import malnutritionImg from "../assets/Starvation.jpeg";
import educationImg from "../assets/education.jpeg";
import shelterImg from "../assets/shelter.jpeg";
import droughtImg from "../assets/drought.jpeg";
import aidImg from "../assets/_For every ten dollars you pay to us, we'll donate….jpeg";

const strugglePhotos = [
  {
    caption: "The Daily Trek for Water",
    description:
      "Women and children often walk miles carrying heavy jerrycans to reach the nearest contaminated water source.",
    img: waterImg,
  },
  {
    caption: "Malnutrition in Childhood",
    description:
      "Lack of clean water and nutritious food leaves thousands of children vulnerable to illness and developmental delays.",
    img: malnutritionImg,
  },
  {
    caption: "Education Interrupted",
    description:
      "Without basic infrastructure, children are forced to prioritize survival tasks over attending school.",
    img: educationImg,
  },
  {
    caption: "Seeking Shelter",
    description:
      "Families displaced by drought or conflict rely on temporary, inadequate housing, increasing health risks.",
    img: shelterImg,
  },
  {
    caption: "Hunger in Drought",
    description:
      "Severe drought conditions destroy crops, leaving families struggling to find food and water.",
    img: droughtImg,
  },
  {
    caption: "Hope Through Aid",
    description:
      "Your donations help deliver clean water, food, and education to those in desperate need.",
    img: aidImg,
  },
];

const StruggleGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.9;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="struggle" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-base text-red-600 font-semibold uppercase">
            The Reality On The Ground
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">
            Witness The Struggle
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            These are the faces and challenges your donations help overcome every single day.
          </p>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-red-100"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-red-100"
        >
          ▶
        </button>

        {/* Gallery Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-2"
        >
          {strugglePhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-none w-[90%] sm:w-[45%] md:w-[31%] bg-white rounded-xl shadow-lg snap-center overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <img
                src={photo.img}
                alt={photo.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-red-600 mb-1">
                  {photo.caption}
                </h3>
                <p className="text-gray-600 text-sm">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StruggleGallery;
