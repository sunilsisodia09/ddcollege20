
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";

import "./gallery.css";

interface GalleryPhoto {
  id: number;
  title: string;
  image: string;
  alt: string;
  category: string;
}

const photos: GalleryPhoto[] = [
  {
    id: 1,
    title: "College Campus",
    image: "/images/b.jpg",
    alt: "DD College Campus Building",
    category: "Campus",
  },
  {
    id: 2,
    title: "Learning Together",
    image: "/images/f.jpg",
    alt: "Students Learning Together",
    category: "Campus",
  },
  {
    id: 3,
    title: "Campus Activities",
    image: "/images/hh.jpg",
    alt: "College Campus Activities",
    category: "Campus",
  },
  {
    id: 4,
    title: "Student Learning",
    image: "/images/f.jpg",
    alt: "Students Participating in Learning Activities",
    category: "Campus",
  },
  {
    id: 5,
    title: "Cultural Celebration",
    image: "/images/d.jpg",
    alt: "College Cultural Celebration",
    category: "Campus",
  },
];

const categories = [
  "All",
  "Campus",
  "Academic",
  "Events",
  "Student Life",
  "Sports",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filteredPhotos: GalleryPhoto[] =
    activeCategory === "All"
      ? photos
      : photos.filter(
          (photo) => photo.category === activeCategory
        );

  const currentIndex = filteredPhotos.findIndex(
    (photo) => photo.id === selectedPhoto
  );

  const currentPhoto =
    currentIndex >= 0 ? filteredPhotos[currentIndex] : null;

  function showPrevious() {
    if (currentIndex < 0 || filteredPhotos.length === 0) return;

    const previousIndex =
      (currentIndex - 1 + filteredPhotos.length) %
      filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[previousIndex].id);
  }

  function showNext() {
    if (currentIndex < 0 || filteredPhotos.length === 0) return;

    const nextIndex =
      (currentIndex + 1) % filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[nextIndex].id);
  }

  return (
    <main className="dd-gallery">

      {/* HERO SECTION */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay" />

        <div className="gallery-hero-content">
          <span className="gallery-eyebrow">
            <Camera size={16} />
            MOMENTS THAT MATTER
          </span>

          <h1>
            Our College <span>Gallery</span>
          </h1>

          <p>
            A glimpse into campus life, memorable celebrations,
            learning experiences and unforgettable moments at DD College.
          </p>

          <a
            href="#gallery-photos"
            className="gallery-hero-btn"
          >
            Explore Gallery <span>↗</span>
          </a>
        </div>

        <div className="gallery-hero-bottom">
          <span>CAMPUS LIFE</span>
          <span>MEMORIES</span>
          <span>CELEBRATIONS</span>
          <span>TOGETHERNESS</span>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="gallery-intro">
        <span className="gallery-section-label">
          CAPTURING THE DD EXPERIENCE
        </span>

        <h2>
          Every Picture Tells a <span>Story</span>
        </h2>

        <p>
          From academic activities to cultural celebrations,
          explore the experiences and memories that make college life special.
        </p>
      </section>

      {/* MAIN GALLERY */}
      <section
        className="gallery-main"
        id="gallery-photos"
      >
        <div className="gallery-heading">
          <div>
            <span className="gallery-section-label">
              PHOTO COLLECTION
            </span>

            <h2>Explore Our Moments</h2>
          </div>

          <p>
            Browse photographs from different aspects of college life.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() => {
                setActiveCategory(category);
                setSelectedPhoto(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PHOTO GRID */}
        <div className="gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <button
              className={`gallery-photo gallery-photo-${(index % 6) + 1}`}
              key={photo.id}
              type="button"
              onClick={() => setSelectedPhoto(photo.id)}
              aria-label={`View ${photo.title}`}
            >
              <img
                src={photo.image}
                alt={photo.alt}
                loading="lazy"
              />

              <span className="gallery-photo-overlay">
                <span className="gallery-photo-category">
                  {photo.category}
                </span>

                <strong>{photo.title}</strong>

                <span className="gallery-view-icon">
                  ↗
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredPhotos.length === 0 && (
          <p className="gallery-empty">
            No photos found in this category.
          </p>
        )}
      </section>

      {/* CALL TO ACTION */}
      <section className="gallery-cta">
        <span className="gallery-section-label">
          LIFE AT DD COLLEGE
        </span>

        <h2>Memories That Last a Lifetime</h2>

        <p>
          Discover more about our campus, student activities and college events.
        </p>

        <div className="gallery-cta-links">
          <Link href="/CampusLife/campusoverview">
            Campus Overview ↗
          </Link>

          <Link href="/CampusLife/events">
            Events & Activities ↗
          </Link>

          <Link href="/CampusLife/clubs">
            Clubs & Societies ↗
          </Link>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {currentPhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="gallery-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close preview"
          >
            <X size={25} />
          </button>

          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            className="gallery-arrow gallery-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={30} />
          </button>

          {/* IMAGE CONTENT */}
          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={currentPhoto.image}
              alt={currentPhoto.alt}
            />

            <div className="gallery-lightbox-caption">
              <div>
                <span>{currentPhoto.category}</span>
                <h3>{currentPhoto.title}</h3>
              </div>

              <small>
                {currentIndex + 1} / {filteredPhotos.length}
              </small>
            </div>
          </div>

          {/* NEXT BUTTON */}
          <button
            type="button"
            className="gallery-arrow gallery-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}

    </main>
  );
}
