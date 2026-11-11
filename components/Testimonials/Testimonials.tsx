"use client";

import { useState } from "react";
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
  role: string;
  company: string;
  batch: string;
  course: string;
  image: string;
  description: string;
}

const alumni: Alumni[] = [
  {
    id: 1,
    name: "Anjuet Singh Sajwan",
    role: "UX Designer",
    company: "Google",
    batch: "2026",
    course: "User Experience and Interaction Design",
    image: "/gallery/ab.jpeg",
    description:
      "My journey at DD College helped me develop creative thinking, practical skills, and confidence. The learning environment and guidance helped me move towards my professional goals.",
  },
  {
    id: 2,
    name: "Shreya Mahajan",
    role: "Software Engineer",
    company: "Microsoft",
    batch: "2026",
    course: "B.Tech Computer Science",
    image: "/gallery/aa.jpeg",
    description:
      "My college experience helped me strengthen my technical knowledge and problem-solving skills. The support of my teachers encouraged me to keep learning and growing.",
  },
  {
    id: 3,
    name: "Arshita",
    role: "Software Developer",
    company: "Amazon",
    batch: "2026",
    course: "B.Tech Computer Science",
    image: "/images/stda.webp",
    description:
      "The practical learning experience and academic support at DD College helped me build confidence and prepare for professional opportunities.",
  },
  {
    id: 4,
    name: "Ashutosh Kumar Pandey",
    role: "Software Engineer",
    company: "Microsoft",
    batch: "2025",
    course: "B.Tech Computer Science",
    image: "/images/stda.webp",
    description:
      "My time at DD College was an important part of my professional journey. The knowledge, guidance, and opportunities helped me prepare for my career.",
  },
  {
    id: 5,
    name: "Rohit Singh",
    role: "Technology Associate",
    company: "Infosys",
    batch: "2026",
    course: "B.Tech Computer Science",
    image: "/images/stda.webp",
    description:
      "DD College provided a supportive environment to learn, explore, and improve my skills. The experience helped me take confident steps towards my career.",
  },
];

const companies = [
  { name: "Google", logo: "/images/google-logo.png" },
  { name: "Microsoft", logo: "/images/microsoft-logo.png" },
  { name: "Amazon", logo: "/images/amazon-logo.png" },
  { name: "Infosys", logo: "/images/infosys-logo.png" },
];

export default function Testimonials() {
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);

  return (
    <section className="dd-alumni-section">
      <div className="dd-alumni-container">
        {/* Section Heading */}
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

        {/* Alumni Cards Auto Slider */}
        <div className="dd-alumni-slider">
          <div className="dd-alumni-track">
            {[...alumni, ...alumni].map((person, index) => (
              <article
                className="dd-alumni-card"
                key={`${person.id}-${index}`}
              >
                {/* Alumni Photo */}
                <div className="dd-alumni-image-wrapper">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="290px"
                    className="dd-alumni-image"
                  />

                  <span className="dd-alumni-batch">
                    Batch {person.batch}
                  </span>
                </div>

                {/* Card Details */}
                <div className="dd-alumni-content">
                  <div className="dd-alumni-name-area">
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                  </div>

                  <div className="dd-alumni-company-name">
                    <span>PLACED AT</span>
                    <strong>{person.company}</strong>
                  </div>

                  <div className="dd-alumni-course">
                    <GraduationCap size={17} />
                    <span>{person.course}</span>
                  </div>

                  {/* Read Story Button */}
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

        {/* Company Logos Auto Slider */}
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
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={145}
                      height={55}
                      className="dd-company-logo"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Story Popup */}
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

            {/* Popup Image */}
            <div className="dd-alumni-modal-image">
              <Image
                src={selectedAlumni.image}
                alt={selectedAlumni.name}
                fill
                sizes="200px"
              />
            </div>

            {/* Popup Content */}
            <div className="dd-alumni-modal-info">
              <div className="dd-alumni-modal-label">
                <Sparkles size={14} />
                ALUMNI SUCCESS STORY
              </div>

              <h2 id="dd-alumni-modal-title">
                {selectedAlumni.name}
              </h2>

              <p className="dd-alumni-modal-role">
                {selectedAlumni.role}
                <span> at </span>
                {selectedAlumni.company}
              </p>

              <div className="dd-alumni-modal-details">
                <div>
                  <GraduationCap size={19} />
                  <span>{selectedAlumni.course}</span>
                </div>

                <div>
                  <BriefcaseBusiness size={19} />
                  <span>Batch {selectedAlumni.batch}</span>
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