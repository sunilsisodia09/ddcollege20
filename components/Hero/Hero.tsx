
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Hero.css";

const images = [
  "/campus/dd.png",
  "/campus/build.webp",
  "/images/f.jpg",
  "/images/hh.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="dd-hero">
      <div className="dd-hero-slider">
        {images.map((src, index) => (
          <div
            key={src}
            className={`dd-hero-slide ${
              current === index ? "active" : ""
            }`}
          >
            <Image
              src={src}
              alt={`D.D. College campus ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              quality={90}
              className="dd-hero-image"
            />
          </div>
        ))}
      </div>

      <div className="dd-hero-overlay" />

      <div className="dd-hero-controls">
        <div className="dd-hero-count">
          <span>{String(current + 1).padStart(2, "0")}</span>
          <i />
          {String(images.length).padStart(2, "0")}
        </div>

        <div className="dd-hero-dots">
          {images.map((src, index) => (
            <button
              type="button"
              key={src}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="dd-hero-arrows">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
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
