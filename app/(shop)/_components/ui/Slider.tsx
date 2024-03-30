"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`slide-${index}`}
          width={300}
          height={300}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button className="slide-btn left-4" onClick={goToPrevSlide}>
        <FiChevronLeft />
      </button>
      <button className="slide-btn right-4" onClick={goToNextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slider;
