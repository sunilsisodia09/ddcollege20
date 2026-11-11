
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./Placements.css";

type Student = {
  id: number;
  name: string;
  course: string;
  batch: string;
  company: string;
  companyLogo: string;
  package: string;
  image: string;
};

const students: Student[] = [
  {
    id: 1,
    name: "Shreya Mahajan",
    course: "B.Tech CSE",
    batch: "2026",
    company: "Google",
    companyLogo: "/images/google-logo.png",
    package: "₹54.84 L",
   image: "/gallery/aa.png",
  },
  {
    id: 2,
    name: "Arshita",
    course: "B.Tech CSE",
    batch: "2026",
    company: "Google",
    companyLogo: "/images/google-logo.png",
    package: "₹54.84 L",
    image: "/images/stda.webp",
  },
  {
    id: 3,
    name: "Ashutosh Kumar Pandey",
    course: "B.Tech CSE",
    batch: "2025",
    company: "Microsoft",
    companyLogo: "/images/microsoft-logo.png",
    package: "₹52.95 L",
    image: "/images/stda.webp",
  },
  {
    id: 4,
    name: "Rohit Singh",
    course: "B.Tech CSE",
    batch: "2026",
    company: "Infosys",
    companyLogo: "/images/infosys-logo.png",
    package: "₹48.70 L",
    image: "/images/stda.webp",
  },
  {
    id: 5,
    name: "Student Five",
    course: "B.Tech CSE",
    batch: "2026",
    company: "Amazon",
    companyLogo: "/images/amazon-logo.png",
    package: "₹42.00 L",
    image: "/images/stda.webp",
  },
  {
    id: 6,
    name: "Student Six",
    course: "B.Tech CSE",
    batch: "2025",
    company: "TCS",
    companyLogo: "/images/tcs-logo.png",
    package: "₹18.00 L",
    image: "/images/stda.webp",
  },
];

const groups = [
  students.slice(0, 3),
  students.slice(3, 6),
];

function PlacementCard({
  student,
  center = false,
}: {
  student: Student;
  center?: boolean;
}) {
  return (
    <article
      className={`placement-card ${
        center ? "placement-card-center" : ""
      }`}
    >
      <div className="student-visual">
        <div className="student-glow" />

        <div className="student-image">
          <Image
            src={student.image}
            alt={student.name}
            fill
            sizes="(max-width: 760px) 80vw, 30vw"
            className="placement-student-image"
          />
        </div>

        <div className="image-ring" />
      </div>

      <div className="placement-batch">
        Batch {student.batch}
      </div>

      <div className="placement-card-content">

        <div className="student-heading">
          <div>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
          </div>

          <div className="verified">✓</div>
        </div>

        <div className="placement-company">
          <div className="company-label">
            <span>PLACED AT</span>
            <strong>{student.company}</strong>
          </div>

          <div className="company-logo-box">
            <Image
              src={student.companyLogo}
              alt={`${student.company} logo`}
              width={100}
              height={50}
              className="placement-company-logo"
            />
          </div>
        </div>

        <div className="placement-package">
          <div>
            <span>ANNUAL PACKAGE</span>
            <strong>{student.package}</strong>
          </div>

          <div className="package-arrow">↗</div>
        </div>

        <div className="card-bottom-line" />

      </div>
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
    setMobileActive(
      (current) => (current + 1) % students.length
    );
  };

  const previousMobile = () => {
    setMobileActive(
      (current) =>
        (current - 1 + students.length) % students.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveGroup((current) => (current + 1) % totalGroups);

      setMobileActive(
        (current) => (current + 1) % students.length
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [paused, totalGroups]);

  return (
    <section
      className="placement-section"
      id="placements"
    >
      <div className="placement-container">

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="placement-heading">

         

          <h2>
            Building
            <strong> Bright Futures</strong>
          </h2>

          <p>
            Our students get placed in leading companies,
            turning their knowledge, skills and ambition
            into successful careers.
          </p>

        </div>


        {/* =====================================
            DESKTOP CAROUSEL
            3 CARDS
        ===================================== */}

        <div
          className="placement-desktop-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <button
            type="button"
            className="placement-arrow placement-arrow-left"
            onClick={previousDesktop}
            aria-label="Previous placements"
          >
            ‹
          </button>

          <div className="placement-cards-window">

            <div
              className={`placement-cards ${
                activeGroup === 1 ? "group-two" : ""
              }`}
            >

              {groups.map((group, groupIndex) => (
                <div
                  className="placement-group"
                  key={groupIndex}
                >

                  {group.map((student, index) => (
                    <PlacementCard
                      key={student.id}
                      student={student}
                      center={index === 1}
                    />
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
            ›
          </button>

        </div>


        {/* =====================================
            MOBILE CAROUSEL
            1 CARD ONLY
        ===================================== */}

        <div
          className="placement-mobile-carousel"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >

          <button
            type="button"
            className="placement-arrow placement-arrow-left"
            onClick={previousMobile}
            aria-label="Previous placement"
          >
            ‹
          </button>

          <div className="placement-mobile-window">

            <div
              className="placement-mobile-track"
              style={{
                transform: `translateX(-${
                  mobileActive * 100
                }%)`,
              }}
            >

              {students.map((student) => (
                <div
                  className="placement-mobile-slide"
                  key={student.id}
                >
                  <PlacementCard student={student} />
                </div>
              ))}

            </div>

          </div>

          <button
            type="button"
            className="placement-arrow placement-arrow-right"
            onClick={nextMobile}
            aria-label="Next placement"
          >
            ›
          </button>

        </div>


        {/* =====================================
            DESKTOP DOTS
        ===================================== */}

        <div className="placement-dots placement-desktop-dots">

          {groups.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`placement-dot ${
                activeGroup === index ? "active" : ""
              }`}
              onClick={() => setActiveGroup(index)}
              aria-label={`Show placement group ${
                index + 1
              }`}
            />
          ))}

        </div>


        {/* =====================================
            MOBILE DOTS
        ===================================== */}

        <div className="placement-dots placement-mobile-dots">

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


        {/* =====================================
            BOTTOM
        ===================================== */}

        <div className="placement-bottom">
          <span className="bottom-line" />
          <span>Where Dreams Meet Opportunities</span>
          <span className="bottom-line" />
        </div>

      </div>
    </section>
  );
}

