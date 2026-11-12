
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  X,
  GraduationCap,
  BriefcaseBusiness,
  Quote,
  Sparkles,
} from "lucide-react";

import "./Testimonials.css";

interface Alumni {
  id: number;
  name: string;
  company: string;
  course: string;
  image: string;
  description: string;
}

const alumni: Alumni[] = [
  {
    id: 1,
    name: "Khusboo Gautam",
    company: "Skywings",
    course: "BBA",
    image: "/gallery/Khusbo.jpeg",
    description:
      "My journey at DD College helped me develop creative thinking, practical skills, and confidence. The learning environment and guidance helped me move towards my professional goals.",
  },
  {
    id: 2,
    name: "Lavanya Arora",
    company: "Indigo",
    course: "B.Com",
    image: "/gallery/Lavanya.jpeg",
    description:
      "My college experience helped me strengthen my technical knowledge and problem-solving skills. The support of my teachers encouraged me to keep learning and growing.",
  },
  {
    id: 3,
    name: "Shradha Gurung",
    company: "AXIS Bank",
    course: "BBA",
    image: "/gallery/Shradha.jpeg",
    description:
      "The practical learning experience and academic support at DD College helped me build confidence and prepare for professional opportunities.",
  },
    {
    id: 4,
    name: "Megha Suyal",
    company: "Bajaj Capital",
    course: "B.Sc Science",
    image: "/gallery/Megha.jpeg",
    description:
      "The practical learning experience and academic support at DD College helped me build confidence and prepare for professional opportunities.",
  },
];

const companies = [
  { name: "Google", logo: "/gallery/axis.jpeg" },
  { name: "Microsoft", logo: "/gallery/tr.jpeg" },
  { name: "Amazon", logo: "/gallery/ind.jpeg" },
  { name: "Infosys", logo: "/gallery/baj.jpeg" },
  { name: "Wipro", logo: "/gallery/wi.jpeg" },
];

export default function Testimonials() {
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);

  useEffect(() => {
    if (!selectedAlumni) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAlumni(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedAlumni]);

  return (
    <section className="dd-alumni-section">
      <div className="dd-alumni-container">

        {/* Heading */}
        <div className="dd-alumni-heading">
          <div className="dd-alumni-eyebrow">
            <Sparkles size={16} />
            <span>OUR SUCCESS STORIES</span>
          </div>

          <h2>
            Our Alumni, <span>Our Pride</span>
          </h2>

          <p>
            Meet our graduates who are building successful careers and making
            their mark in leading organisations.
          </p>
        </div>

        {/* Alumni Slider */}
        <div className="dd-alumni-slider">
          <div className="dd-alumni-track">
            {[...alumni, ...alumni].map((person, index) => (
              <article
                className="dd-alumni-card"
                key={`${person.id}-${index}`}
              >
                <div className="dd-alumni-image-wrapper">
                  <Image
                    src={person.image}
                    alt={`${person.name} - DD College Alumni`}
                    fill
                    sizes="(max-width: 600px) 260px, 290px"
                    className="dd-alumni-image"
                    priority={index < 2}
                  />
                  <span className="dd-alumni-image-label">
                    DD COLLEGE ALUMNI
                  </span>
                </div>

                <div className="dd-alumni-content">
                  <div className="dd-alumni-name-area">
                    <h3>{person.name}</h3>
                  </div>

                  <div className="dd-alumni-company-name">
                    <span>PLACED AT</span>
                    <strong>{person.company}</strong>
                  </div>

                  <div className="dd-alumni-course">
                    <GraduationCap size={18} />
                    <span>{person.course}</span>
                  </div>

                  <button
                    type="button"
                    className="dd-alumni-read-more"
                    onClick={() => setSelectedAlumni(person)}
                    aria-label={`Read success story of ${person.name}`}
                  >
                    <span>Read Success Story</span>
                    <span className="dd-alumni-button-icon">
                      <ArrowRight size={17} />
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="dd-company-section">
          <div className="dd-company-heading">
            <span />
            <p>OUR ALUMNI ARE BUILDING CAREERS AT</p>
            <span />
          </div>

          <div className="dd-company-slider">
            <div className="dd-company-track">
              {[...companies, ...companies, ...companies].map(
                (company, index) => (
                  <div
                    className="dd-company-logo-card"
                    key={`${company.name}-${index}`}
                    title={company.name}
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={160}
                      height={65}
                      sizes="160px"
                      className="dd-company-logo"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Success Story Modal */}
      {selectedAlumni && (
        <div
          className="dd-alumni-modal-overlay"
          onClick={() => setSelectedAlumni(null)}
        >
          <div
            className="dd-alumni-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dd-alumni-modal-title"
          >
            <button
              type="button"
              className="dd-alumni-modal-close"
              onClick={() => setSelectedAlumni(null)}
              aria-label="Close success story"
            >
              <X size={21} />
            </button>

            <div className="dd-alumni-modal-image">
              <Image
                src={selectedAlumni.image}
                alt={selectedAlumni.name}
                fill
                sizes="200px"
                className="dd-alumni-modal-photo"
              />
            </div>

            <div className="dd-alumni-modal-info">
              <div className="dd-alumni-modal-label">
                <Sparkles size={14} />
                ALUMNI SUCCESS STORY
              </div>

              <h2 id="dd-alumni-modal-title">
                {selectedAlumni.name}
              </h2>

              <p className="dd-alumni-modal-role">
                Working at <strong>{selectedAlumni.company}</strong>
              </p>

              <div className="dd-alumni-modal-details">
                <div>
                  <GraduationCap size={19} />
                  <span>{selectedAlumni.course}</span>
                </div>

                <div>
                  <BriefcaseBusiness size={19} />
                  <span>{selectedAlumni.company}</span>
                </div>
              </div>

              <div className="dd-alumni-modal-quote">
                <Quote size={27} />
                <p>{selectedAlumni.description}</p>
              </div>

              <button
                type="button"
                className="dd-alumni-modal-button"
                onClick={() => setSelectedAlumni(null)}
              >
                Close Story
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
