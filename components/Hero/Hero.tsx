
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Hero.css";

interface HeroImage {
  src: string;
  title: string;
  subtitle: string;
}

const images: HeroImage[] = [
  {
    src: "/campus/dd.png",
    title: "WELCOME TO",
    subtitle: "D.D. COLLEGE",
  },
  {
    src: "/campus/build.webp",
    title: "YOUR FUTURE",
    subtitle: "STARTS HERE",
  },
  {
    src: "/images/f.jpg",
    title: "LEARN. GROW.",
    subtitle: "ACHIEVE MORE",
  },
  {
    src: "/images/hh.jpg",
    title: "BUILD YOUR",
    subtitle: "BRIGHT FUTURE",
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

  // Automatic slider on desktop and mobile
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(timer);
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
              alt={`${image.title} ${image.subtitle}`}
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
        {/* Slide Counter */}
        <div className="dd-hero-count">
          <span>{String(current + 1).padStart(2, "0")}</span>
          <i />
          {String(images.length).padStart(2, "0")}
        </div>

        {/* Slider Dots */}
        <div className="dd-hero-dots">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
            />
          ))}
        </div>

        {/* Previous / Next Buttons */}
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
