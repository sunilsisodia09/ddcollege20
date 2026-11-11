
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./CampusLife.css";

const galleryImages = [
  {
    src: "/campus/college.jpg",
    alt: "DD College campus building",
    className: "gallery-item-one",
  },
  {
    src: "/campus/guest.jpg",
    alt: "Campus events and activities",
    className: "gallery-item-two",
  },
  {
    src: "/campus/lib.jpg",
    alt: "College facilities",
    className: "gallery-item-three",
  },
  {
    src: "/campus/libray.jpg",
    alt: "College library",
    className: "gallery-item-four",
  },
  {
    src: "/campus/hall.jpg",
    alt: "College auditorium",
    className: "gallery-item-five",
  },
  {
    src: "/campus/build.webp",
    alt: "College building",
    className: "gallery-item-six",
  },
  {
    src: "/campus/college.jpg",
    alt: "DD College campus view",
    className: "gallery-item-seven",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((current) =>
          current === null
            ? null
            : (current + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((current) =>
          current === null
            ? null
            : (current - 1 + galleryImages.length) %
              galleryImages.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section className="dd-gallery" id="gallery">
      <div className="dd-gallery-container">

        {/* GALLERY GRID */}
        <div className="dd-gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              className={`dd-gallery-item ${image.className}`}
              key={`${image.src}-${index}`}
              onClick={() => setSelectedImage(index)}
              aria-label={`View image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 600px) 50vw, (max-width: 1000px) 50vw, 33vw"
              />

              <span className="dd-gallery-item-overlay" />
            </button>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN IMAGE VIEWER */}
      {selectedImage !== null && (
        <div
          className="dd-gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            className="dd-gallery-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            className="dd-gallery-prev"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + galleryImages.length) %
                  galleryImages.length
              );
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="dd-gallery-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              sizes="100vw"
              priority
            />
          </div>

          <button
            type="button"
            className="dd-gallery-next"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(
                (selectedImage + 1) % galleryImages.length
              );
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="dd-gallery-counter">
            {String(selectedImage + 1).padStart(2, "0")} /{" "}
            {String(galleryImages.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </section>
  );
}