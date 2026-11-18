"use client";

import { useEffect, useState } from "react";
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
  { id: 7, image: "/gallery/g.png", alt: "Campus Activities" },
  { id: 8, image: "/gallery/grv.png", alt: "College Facilities" },
  { id: 9, image: "/images/gr.png", alt: "College Gallery" },
  { id: 10, image: "/images/h.png", alt: "College Building" },
  { id: 11, image: "/gallery/lab.png", alt: "College Laboratory" },
  { id: 12, image: "/gallery/lb.png", alt: "College Library" },
  { id: 13, image: "/gallery/group.png", alt: "College Group Photo" },
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const validImages = galleryImages.filter(
    (item) => !failedImages.includes(item.image)
  );

  const currentIndex =
    validImages.length > 0
      ? activeImage % validImages.length
      : 0;

  const current = validImages[currentIndex];

  const getImage = (offset: number): GalleryImage | undefined => {
    if (validImages.length === 0) return undefined;

    const index =
      (currentIndex + offset + validImages.length) %
      validImages.length;

    return validImages[index];
  };

  // Next image
  const nextImage = () => {
    if (validImages.length <= 1) return;

    setActiveImage((index) => (index + 1) % validImages.length);
  };

  // Previous image
  const previousImage = () => {
    if (validImages.length <= 1) return;

    setActiveImage(
      (index) =>
        (index - 1 + validImages.length) % validImages.length
    );
  };

  // Handle broken images
  const handleImageError = (image: string) => {
    setFailedImages((previous) =>
      previous.includes(image) ? previous : [...previous, image]
    );
  };

  // Auto slider
  useEffect(() => {
    if (isPaused || lightbox || validImages.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImage(
        (index) => (index + 1) % validImages.length
      );
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused, lightbox, validImages.length]);

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    if (!lightbox) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(false);
      }

      if (event.key === "ArrowRight") {
        setActiveImage(
          (index) => (index + 1) % validImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (index) =>
            (index - 1 + validImages.length) % validImages.length
        );
      }
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, validImages.length]);

  const leftImage = getImage(-1);
  const rightImage = getImage(1);

  // Empty state
  if (!current) {
    return (
      <section className="dd-gallery">
        <div className="dd-gallery-empty">
          <Images size={45} />
          <h2>Gallery Images Not Found</h2>
          <p>
            Please add your images inside the public/images folder.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="dd-gallery">
        <div className="dd-gallery-container">

          {/* HEADER */}
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
                {String(currentIndex + 1).padStart(2, "0")}
              </strong>

              <span>
                / {String(validImages.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* MAIN SLIDER */}
          <div
            className="dd-gallery-main"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="dd-gallery-three">

              {/* LEFT IMAGE */}
              {leftImage && (
                <button
                  type="button"
                  className="dd-gallery-side left"
                  onClick={previousImage}
                  aria-label="Previous image"
                >
                  <img
                    src={leftImage.image}
                    alt={leftImage.alt}
                    onError={() => handleImageError(leftImage.image)}
                    draggable={false}
                  />

                  <span>{leftImage.alt}</span>
                </button>
              )}

              {/* CENTER IMAGE */}
              <div className="dd-gallery-center">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.alt}
                  onError={() => handleImageError(current.image)}
                  draggable={false}
                />

                <div className="dd-gallery-main-overlay" />

                <div className="dd-gallery-main-caption">
                  <span>EXPLORE OUR CAMPUS</span>
                  <h3>{current.alt}</h3>
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

              {/* RIGHT IMAGE */}
              {rightImage && (
                <button
                  type="button"
                  className="dd-gallery-side right"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <img
                    src={rightImage.image}
                    alt={rightImage.alt}
                    onError={() => handleImageError(rightImage.image)}
                    draggable={false}
                  />

                  <span>{rightImage.alt}</span>
                </button>
              )}
            </div>

            {/* NAVIGATION */}
            <div className="dd-gallery-navigation">
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous"
                disabled={validImages.length <= 1}
              >
                <ChevronLeft size={22} />
              </button>

              <div className="dd-gallery-dots">
                {validImages.map((item, index) => (
                  <button
                    type="button"
                    key={item.id}
                    className={currentIndex === index ? "active" : ""}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${item.alt}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next"
                disabled={validImages.length <= 1}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* FOOTER */}
          <div className="dd-gallery-footer">
            <span />
            <p>Creating Memories. Building Futures.</p>
            <span />
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX */}
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
              src={current.image}
              alt={current.alt}
              onError={() => handleImageError(current.image)}
              draggable={false}
            />

            <p>
              {current.alt}
              <span>
                {currentIndex + 1} / {validImages.length}
              </span>
            </p>
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