
"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
  X,
} from "lucide-react";

import "./Gallery.css";

interface GalleryImage {
  id: number;
  image: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, image: "/images/a.jpg", alt: "Campus View" },
  { id: 2, image: "/images/b.jpg", alt: "College Campus" },
  { id: 3, image: "/images/c.jpg", alt: "Student Activities" },
  { id: 4, image: "/images/d.jpg", alt: "College Events" },
  { id: 5, image: "/images/e.jpg", alt: "Campus Memories" },
  { id: 6, image: "/images/f.jpg", alt: "College Life" },
  { id: 7, image: "/images/g.jpg", alt: "Campus Activities" },
  { id: 8, image: "/images/h.jpg", alt: "College Facilities" },
  { id: 9, image: "/images/hh.jpg", alt: "D.D. College Gallery" },
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const nextImage = useCallback(() => {
    setActiveImage((current) => (current + 1) % galleryImages.length);
  }, []);

  const previousImage = useCallback(() => {
    setActiveImage(
      (current) =>
        (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const getImage = (offset: number): GalleryImage => {
    return galleryImages[
      (activeImage + offset + galleryImages.length) % galleryImages.length
    ];
  };

  useEffect(() => {
    if (isPaused || lightbox) return;

    const timer = window.setInterval(nextImage, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused, lightbox, nextImage]);

  useEffect(() => {
    if (!lightbox) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(false);
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, nextImage, previousImage]);

  return (
    <>
      <section className="dd-gallery">
        <div className="dd-gallery-container">
          <div className="dd-gallery-header">
            <div className="dd-gallery-heading">
              <span className="dd-gallery-eyebrow">
                <Images size={17} />
                OUR CAMPUS GALLERY
              </span>

              <h2>
                Life at <span>D.D. College</span>
              </h2>

              <p>
                Discover the moments, memories and experiences
                that make our campus special.
              </p>

              <div className="dd-gallery-heading-line" />
            </div>

            <div className="dd-gallery-count">
              <strong>
                {String(activeImage + 1).padStart(2, "0")}
              </strong>
              <span>
                / {String(galleryImages.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div
            className="dd-gallery-main"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="dd-gallery-three">
              {/* Left Image */}
              <button
                type="button"
                className="dd-gallery-side left"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <img
                  src={getImage(-1).image}
                  alt={getImage(-1).alt}
                />
                <span>{getImage(-1).alt}</span>
              </button>

              {/* Center Image */}
              <div className="dd-gallery-center">
                <img
                  key={getImage(0).id}
                  src={getImage(0).image}
                  alt={getImage(0).alt}
                />

                <div className="dd-gallery-main-overlay" />

                <div className="dd-gallery-main-caption">
                  <span>EXPLORE OUR CAMPUS</span>
                  <h3>{getImage(0).alt}</h3>
                </div>

                <button
                  type="button"
                  className="dd-gallery-expand"
                  onClick={() => setLightbox(true)}
                  aria-label="View fullscreen"
                >
                  <Maximize2 size={21} />
                </button>
              </div>

              {/* Right Image */}
              <button
                type="button"
                className="dd-gallery-side right"
                onClick={nextImage}
                aria-label="Next image"
              >
                <img
                  src={getImage(1).image}
                  alt={getImage(1).alt}
                />
                <span>{getImage(1).alt}</span>
              </button>
            </div>

            {/* Navigation */}
            <div className="dd-gallery-navigation">
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="dd-gallery-dots">
                {galleryImages.map((item, index) => (
                  <button
                    type="button"
                    key={item.id}
                    className={activeImage === index ? "active" : ""}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${item.alt}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div className="dd-gallery-footer">
            <span />
            <p>Creating Memories. Building Futures.</p>
            <span />
          </div>
        </div>
      </section>

      {/* Fullscreen Preview */}
      {lightbox && (
        <div
          className="dd-gallery-lightbox"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Campus gallery fullscreen preview"
        >
          <button
            type="button"
            className="dd-gallery-close"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            <X size={25} />
          </button>

          <button
            type="button"
            className="dd-gallery-lightbox-arrow left"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="dd-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={getImage(0).image}
              alt={getImage(0).alt}
            />
            <p>{getImage(0).alt}</p>
          </div>

          <button
            type="button"
            className="dd-gallery-lightbox-arrow right"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </>
  );
}
