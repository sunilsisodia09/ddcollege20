
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  ArrowRight,
  Maximize2,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import "./gallery.css";

type Photo = {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
};

const photos: Photo[] = [
  {
    id: 1,
    src: "/images/b.jpg",
    title: "College Campus",
 category: "Events",
    description: "Explore the beautiful campus of DD College.",
  },
  {
    id: 2,
    src: "/images/f.jpg",
    title: "Learning Together",
 category: "Events",
    description: "A positive environment for learning and growth.",
  },
  {
    id: 3,
    src: "/images/hh.jpg",
    title: "Campus Activities",
  category: "Events",
    description: "Students participating in campus activities.",
  },
  {
    id: 4,
    src: "/images/f.jpg",
    title: "Student Learning",
   category: "Events",
    description: "Learning experiences beyond the classroom.",
  },
  {
    id: 5,
    src: "/images/d.jpg",
    title: "Cultural Celebration",
    category: "Events",
    description: "Celebrating creativity, culture and togetherness.",
  },
];

const categories = [
  "All",
  "Campus",
  "Academic",
  "Events",
  "Student Life",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const selectedIndex = filteredPhotos.findIndex(
    (photo) => photo.id === selectedPhoto
  );

  const currentPhoto =
    selectedIndex >= 0 ? filteredPhotos[selectedIndex] : null;

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const showNext = () => {
    if (selectedIndex < 0 || filteredPhotos.length === 0) return;

    const nextIndex = (selectedIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex].id);
  };

  const showPrevious = () => {
    if (selectedIndex < 0 || filteredPhotos.length === 0) return;

    const previousIndex =
      (selectedIndex - 1 + filteredPhotos.length) %
      filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[previousIndex].id);
  };

  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedPhoto((currentId) => {
          const index = filteredPhotos.findIndex(
            (photo) => photo.id === currentId
          );

          if (index < 0) return currentId;

          return filteredPhotos[
            (index + 1) % filteredPhotos.length
          ].id;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedPhoto((currentId) => {
          const index = filteredPhotos.findIndex(
            (photo) => photo.id === currentId
          );

          if (index < 0) return currentId;

          const previousIndex =
            (index - 1 + filteredPhotos.length) %
            filteredPhotos.length;

          return filteredPhotos[previousIndex].id;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, filteredPhotos]);

  return (
    <main className="dd-gallery-page">

      {/* HERO SECTION */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay" />

        <div className="gallery-container gallery-hero-content">
          <span className="gallery-eyebrow">
            <Camera size={16} />
            LIFE AT DD COLLEGE
          </span>

          <h1>
            Moments That
            <span> Inspire.</span>
          </h1>

          <p>
            Explore the memorable moments, academic experiences,
            campus activities and celebrations that make life at
            DD College special.
          </p>

          <div className="gallery-hero-buttons">
            <a href="#college-gallery" className="gallery-primary-btn">
              Explore Gallery
              <ArrowRight size={18} />
            </a>

            <Link
              href="/CampusLife/campusoverview"
              className="gallery-outline-btn"
            >
              Explore Campus
            </Link>
          </div>
        </div>

        <div className="gallery-hero-bottom">
          <span>DD COLLEGE DEHRADUN</span>
          <span>LEARN · GROW · ACHIEVE</span>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="gallery-intro">
        <div className="gallery-container gallery-intro-grid">
          <div>
            <span className="gallery-section-label">
              <Sparkles size={16} />
              OUR CAMPUS STORIES
            </span>

            <h2>
              Every Picture
              <span> Tells a Story</span>
            </h2>
          </div>

          <p>
            From classroom learning to cultural celebrations,
            discover the experiences, achievements and everyday
            moments that create the DD College community.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section
        className="gallery-main-section"
        id="college-gallery"
      >
        <div className="gallery-container">

          <div className="gallery-heading-row">
            <div>
              <span className="gallery-section-label">
                PHOTO COLLECTION
              </span>

              <h2>Explore Our Gallery</h2>

              <p>
                A glimpse into student life, campus activities
                and college celebrations.
              </p>
            </div>

            <div className="gallery-total">
              <ImageIcon size={19} />
              <span>{filteredPhotos.length} Photos</span>
            </div>
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
                type="button"
                className={`gallery-card gallery-card-${index + 1}`}
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.id)}
                aria-label={`View ${photo.title}`}
              >
                <div className="gallery-card-image">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="gallery-photo"
                  />

                  <div className="gallery-card-overlay">
                    <span className="gallery-card-category">
                      {photo.category}
                    </span>

                    <div className="gallery-card-info">
                      <div>
                        <h3>{photo.title}</h3>
                        <p>{photo.description}</p>
                      </div>

                      <span className="gallery-expand-icon">
                        <Maximize2 size={19} />
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="gallery-empty">
              <ImageIcon size={35} />
              <h3>No photos available</h3>
              <p>Please select another category.</p>
            </div>
          )}

        </div>
      </section>

      {/* CAMPUS EXPERIENCE */}
      <section className="gallery-experience">
        <div className="gallery-container gallery-experience-inner">

          <div className="gallery-experience-icon">
            <Camera size={34} />
          </div>

          <div className="gallery-experience-content">
            <span>MORE THAN JUST A CAMPUS</span>

            <h2>Experience Life at DD College</h2>

            <p>
              Discover our campus facilities, student clubs
              and exciting college events.
            </p>
          </div>

          <div className="gallery-experience-links">
            <Link href="/CampusLife/campusoverview">
              Campus Overview
              <ArrowRight size={17} />
            </Link>

            <Link href="/CampusLife/events">
              College Events
              <ArrowRight size={17} />
            </Link>

            <Link href="/CampusLife/clubs">
              Student Clubs
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {currentPhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closePhoto}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closePhoto}
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            className="gallery-lightbox-arrow gallery-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-lightbox-image">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.title}
                fill
                sizes="90vw"
                className="gallery-lightbox-photo"
                priority
              />
            </div>

            <div className="gallery-lightbox-caption">
              <div>
                <span>{currentPhoto.category}</span>
                <h3>{currentPhoto.title}</h3>
                <p>{currentPhoto.description}</p>
              </div>

              <span className="gallery-image-count">
                {selectedIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="gallery-lightbox-arrow gallery-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

    </main>
  );
}
