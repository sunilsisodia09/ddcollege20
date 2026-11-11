"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "./Hero.css";

const images = [
  {
    src: "/campus/dd.png",
 
  },
  {
    src: "/campus/build.webp",
  
  },
  
    {
    src: "/images/f.jpg",
  
  },
    {
    src: "/images/hh.jpg",
  
  },
 
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Automatic scrolling on all devices
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="dd-hero">

      {/* Background Slider */}
      <div className="dd-hero-slider">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`dd-hero-slide ${
              current === index ? "active" : ""
            }`}
          >
            <Image
              src={image.src}
              alt="DD College Campus"
              fill
              priority={index === 0}
              sizes="100vw"
              quality={90}
              className="dd-hero-image"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="dd-hero-overlay" />

      {/* Hero Content */}
      <div className="dd-hero-content" key={current}>
     

        <h1>
          {images[current].title}
          <span>{images[current].subtitle}</span>
        </h1>

       
      </div>

      {/* Slider Controls */}
      <div className="dd-hero-controls">

        <div className="dd-hero-count">
          <span>{String(current + 1).padStart(2, "0")}</span>
          <i />
          {String(images.length).padStart(2, "0")}
        </div>

        <div className="dd-hero-dots">
          {images.map((image, index) => (
            <button
              key={image.src}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="dd-hero-arrows">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}