"use client";

import Link from "next/link";
import {
  GraduationCap,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import "./department.css";

const departments = [
  {
    id: 1,
    name: "Management & Commerce",
    subtitle: "SCHOOL OF",
    courses: "BBA • B.Com",
    image: "/campus/build.webp",
    color: "management",
    description:
      "Develop leadership, business knowledge and professional management skills.",
    href: "/courses",
  },
  {
    id: 2,
    name: "Computer Applications",
    subtitle: "SCHOOL OF",
    courses: "BCA & Computer Studies",
     image: "/campus/build.webp",
    color: "computer",
    description:
      "Explore technology, programming, software development and digital innovation.",
    href: "/courses",
  },

  {
    id: 4,
    name: "Nursing Sciences",
    subtitle: "SCHOOL OF",
    courses: "GNM & Nursing",
 image: "/campus/build.webp",
    color: "nursing",
    description:
      "Learn patient care, clinical practices and professional nursing skills.",
    href: "/courses",
  },
 
  {
    id: 6,
    name: "Arts & Humanities",
    subtitle: "SCHOOL OF",
    courses: "Arts & Humanities",
    image: "/campus/build.webp",
    color: "arts",
    description:
      "Develop creativity, communication, critical thinking and social understanding.",
    href: "/courses",
  },
];

export default function Departments() {
  return (
    <section className="dd-departments">

      <div className="dd-departments-container">

        <div className="dd-departments-grid">

          {/* INTRODUCTION CARD */}

          <div className="dd-department-intro">

            <div className="dd-intro-icon">
              <GraduationCap size={65} strokeWidth={1.2} />
            </div>

            <span className="dd-intro-small">
              DISCOVER YOUR POTENTIAL
            </span>

            <h2>
              Explore Our
              <span> Departments</span>
            </h2>

            <div className="dd-intro-divider">
              <span></span>
              <i></i>
              <span></span>
            </div>

            <p>
              Shaping future professionals through quality
              education, practical learning and industry-focused
              academic programs.
            </p>

            <Link
              href="/courses"
              className="dd-intro-link"
            >
              Explore All Programs
              <ArrowRight size={17} />
            </Link>

            <div className="dd-intro-watermark">
              D.D.
            </div>

          </div>

          {/* DEPARTMENT CARDS */}

          {departments.map((department) => (

            <article
              className={`dd-department-card ${department.color}`}
              key={department.id}
              style={{
                backgroundImage: `url("${department.image}")`,
              }}
            >

              <div className="dd-department-overlay"></div>

              <div className="dd-department-content">

                <span className="dd-department-subtitle">
                  {department.subtitle}
                </span>

                <h3>
                  {department.name}
                </h3>

                <span className="dd-department-courses">
                  {department.courses}
                </span>

                <p className="dd-department-description">
                  {department.description}
                </p>

                <Link
                  href={department.href}
                  className="dd-department-button"
                >
                  Explore Programs
                  <ArrowUpRight size={17} />
                </Link>

              </div>

              <span className="dd-department-number">
                0{department.id}
              </span>

            </article>

          ))}

        </div>

        {/* BOTTOM LINK */}

        <div className="dd-departments-bottom">

          <p>
            Find the right academic path and take the first step
            towards your dream career.
          </p>

          <Link href="/courses">
            View All Courses
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}