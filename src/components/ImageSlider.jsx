/** @format */

import { useEffect, useState } from "react";

const images = [
  { photo: "/images/h1.jpg" },
  { photo: "/images/h2.jpg" },
  { photo: "/images/h3.jpg" },
  { photo: "/images/h4.jpg" },
];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3000); // Change slide every 3 seconds (adjust as needed)
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative w-full overflow-hidden">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full outline-none"
          onClick={prevSlide}
        >
          {'<'}
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full outline-none"
          onClick={nextSlide}
        >
          {'>'}
        </button>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.photo})` }}
            />
          ))}
        </div>
      </div>
    );
  }
export default ImageSlider;
