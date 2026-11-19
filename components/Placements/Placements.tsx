
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import "./Placements.css";

type Student = {
  id: number;
  name: string;
  course: string;
  batch: string;
  company: string;
  image: string;
};

const students: Student[] = [
  {
    id: 1,
    name: "Shweta Kapr",
    course: "BSc IT",
    batch: "2026",
    company: "WIPRO WILP",
    image: "/gallery/aa.png",
  },
  {
    id: 2,
    name: "Rajeev Selwan",
    course: "B.Sc (CS)",
    batch: "2026",
    company: "Spectrum",
    image: "/gallery/kl.png",
  },
  {
    id: 3,
    name: "Megha Suyal",
    course: "B.Sc Science",
    batch: "2025",
    company: "Bajaj Capital",
    image: "/gallery/ff.png",
  },
  {
    id: 4,
    name: "Amrita Kothari",
    course: "B.Sc (CS)",
    batch: "2026",
    company: "Talent IQ",
    image: "/gallery/ax.png",
  },
  {
    id: 5,
    name: "Shradha Gurung",
    course: "BBA",
    batch: "2026",
    company: "AXIS Bank",
    image: "/gallery/am.png",
  },
  {
    id: 6,
    name: "Lavanya Arora",
    course: "B.Com",
    batch: "2025",
    company: "Indigo",
    image: "/gallery/Lavn.png",
  },
];

const groups = [
  students.slice(0, 3),
  students.slice(3, 6),
];

function PlacementCard({ student }: { student: Student }) {
  return (
    <article className="placement-card">
      <div className="placement-card-top">
        <span className="placement-batch">
          <GraduationCap size={15} />
          Batch {student.batch}
        </span>
        <span className="placement-card-number">
          {String(student.id).padStart(2, "0")}
        </span>
      </div>

      <div className="placement-photo-wrap">
        <div className="placement-photo-bg" />
        <div className="placement-photo">
          <Image
            src={student.image}
            alt={`${student.name}, placed student`}
            fill
            sizes="(max-width: 700px) 85vw, (max-width: 1100px) 40vw, 30vw"
            className="placement-student-image"
          />
        </div>
        <span className="placement-photo-tag">
          <Sparkles size={13} />
          Career achieved
        </span>
      </div>

      <div className="placement-card-info">
        <div className="placement-student-heading">
          <div>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
          </div>
          <span className="placement-verified" aria-label="Placement profile">
            ✓
          </span>
        </div>

        <div className="placement-company-info">
          <div className="placement-company-icon">
            <BriefcaseBusiness size={19} />
          </div>
          <div>
            <span className="placement-small-label">PLACED AT</span>
            <strong>{student.company}</strong>
          </div>
          <ArrowUpRight className="placement-company-arrow" size={20} />
        </div>
      </div>

      <div className="placement-card-accent" />
    </article>
  );
}

export default function PlacementSection() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const totalGroups = groups.length;

  const nextDesktop = () => {
    setActiveGroup((current) => (current + 1) % totalGroups);
  };

  const previousDesktop = () => {
    setActiveGroup(
      (current) => (current - 1 + totalGroups) % totalGroups
    );
  };

  const nextMobile = () => {
    setMobileActive((current) => (current + 1) % students.length);
  };

  const previousMobile = () => {
    setMobileActive(
      (current) => (current - 1 + students.length) % students.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveGroup((current) => (current + 1) % totalGroups);
      setMobileActive((current) => (current + 1) % students.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, totalGroups]);

  return (
    <section className="placement-section" id="placements">
      <div className="placement-container">
        {/* Heading */}
        <div className="placement-heading">
          <div className="placement-eyebrow">
            <span className="placement-eyebrow-line" />
            <span>OUR PLACEMENT STORIES</span>
          </div>

          <div className="placement-heading-row">
            <div>
              <h2>
                Dreams into <span>Destinations.</span>
              </h2>
              <p>
                Every achievement tells a story of hard work, determination,
                and the right opportunities. Meet our students who are
                building their careers.
              </p>
            </div>

            <div className="placement-heading-decoration">
              <span>DD</span>
              <Sparkles size={25} />
            </div>
          </div>
        </div>

        {/* Desktop carousel */}
        <div
          className="placement-desktop-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="placement-carousel-topline">
            <span>OUR SUCCESS STORIES</span>
            <span>
              0{activeGroup + 1} <i /> 0{totalGroups}
            </span>
          </div>

          <button
            type="button"
            className="placement-arrow placement-arrow-left"
            onClick={previousDesktop}
            aria-label="Previous placements"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="placement-cards-window">
            <div
              className="placement-cards-track"
              style={{ transform: `translateX(-${activeGroup * 100}%)` }}
            >
              {groups.map((group, groupIndex) => (
                <div className="placement-group" key={groupIndex}>
                  {group.map((student) => (
                    <PlacementCard key={student.id} student={student} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="placement-arrow placement-arrow-right"
            onClick={nextDesktop}
            aria-label="Next placements"
          >
            <ArrowRight size={19} />
          </button>
        </div>

        {/* Mobile carousel */}
        <div
          className="placement-mobile-carousel"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="placement-mobile-counter">
            <span>STUDENT SPOTLIGHT</span>
            <span>
              {String(mobileActive + 1).padStart(2, "0")} /{" "}
              {String(students.length).padStart(2, "0")}
            </span>
          </div>

          <div className="placement-mobile-window">
            <div
              className="placement-mobile-track"
              style={{
                transform: `translateX(-${mobileActive * 100}%)`,
              }}
            >
              {students.map((student) => (
                <div className="placement-mobile-slide" key={student.id}>
                  <PlacementCard student={student} />
                </div>
              ))}
            </div>
          </div>

          <div className="placement-mobile-controls">
            <button
              type="button"
              className="placement-arrow"
              onClick={previousMobile}
              aria-label="Previous placement"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="placement-mobile-dots">
              {students.map((student, index) => (
                <button
                  key={student.id}
                  type="button"
                  className={`placement-dot ${
                    mobileActive === index ? "active" : ""
                  }`}
                  onClick={() => setMobileActive(index)}
                  aria-label={`Show ${student.name}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="placement-arrow"
              onClick={nextMobile}
              aria-label="Next placement"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* Desktop pagination */}
        <div className="placement-desktop-pagination">
          <div className="placement-desktop-dots">
            {groups.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`placement-dot ${
                  activeGroup === index ? "active" : ""
                }`}
                onClick={() => setActiveGroup(index)}
                aria-label={`Show placement group ${index + 1}`}
              />
            ))}
          </div>
          <span>Explore our students&apos; success stories</span>
        </div>

     
      </div>
    </section>
  );
}
