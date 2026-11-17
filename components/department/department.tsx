
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
    name: "Science",
    subtitle: "DEPARTMENT OF",
    courses: "B.Sc • M.Sc",
    image: "/campus/build.webp",
    color: "science",
    description:
      "Explore scientific knowledge through subjects like Physics, Chemistry, Mathematics, Botany and Zoology.",
    courseList: [
      "B.Sc (C.B.Z)",
      "B.Sc (P.C.M)",
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Zoology",
      "M.Sc Botany",
    ],
    href: "/courses",
  },
  {
    id: 2,
    name: "Agro Science",
    subtitle: "DEPARTMENT OF",
    courses: "B.Sc Agriculture • M.Sc",
    image: "/campus/build.webp",
    color: "agriculture",
    description:
      "Build knowledge of agriculture, horticulture and modern agricultural practices.",
    courseList: [
      "B.Sc Agriculture (Hons.)",
      "M.Sc Horticulture",
      "M.Sc Agronomy",
    ],
    href: "/courses",
  },
  {
    id: 3,
    name: "Commerce & Management",
    subtitle: "DEPARTMENT OF",
    courses: "B.Com • BBA • M.Com",
    image: "/campus/build.webp",
    color: "management",
    description:
      "Develop business knowledge, financial understanding, leadership and management skills.",
    courseList: [
      "B.Com",
      "B.Com (Hons.)",
      "BBA",
      "M.Com",
    ],
    href: "/courses",
  },
  {
    id: 4,
    name: "Humanities & Social Sciences",
    subtitle: "DEPARTMENT OF",
    courses: "B.A • M.A",
    image: "/campus/build.webp",
    color: "humanities",
    description:
      "Understand society, history, languages and political systems through humanities education.",
    courseList: [
      "B.A",
      "M.A (English)",
      "M.A (History)",
      "M.A (Political Science)",
    ],
    href: "/courses",
  },
  {
    id: 5,
    name: "Education",
    subtitle: "DEPARTMENT OF",
    courses: "B.Ed",
    image: "/campus/build.webp",
    color: "education",
    description:
      "Develop teaching skills, educational understanding and professional teaching capabilities.",
    courseList: [
      "B.Ed",
    ],
    href: "/courses",
  },
  {
    id: 6,
    name: "Health Sciences",
    subtitle: "DEPARTMENT OF",
    courses: "Nursing • Pharmacy",
    image: "/campus/build.webp",
    color: "nursing",
    description:
      "Prepare for healthcare careers through nursing education and pharmaceutical studies.",
    courseList: [
      "GNM Nursing",
      "D.Pharm",
    ],
    href: "/courses",
  },
  {
    id: 7,
    name: "Computer Science",
    subtitle: "DEPARTMENT OF",
    courses: "BCA • B.Sc Computer Science",
    image: "/campus/build.webp",
    color: "computer",
    description:
      "Explore programming, computer applications, information technology and digital innovation.",
    courseList: [
      "B.Sc Computer Science",
      "BCA",
      "B.Sc IT",
    ],
    href: "/courses",
  },
  {
    id: 8,
    name: "Law",
    subtitle: "DEPARTMENT OF",
    courses: "LL.B • B.A LL.B",
    image: "/campus/build.webp",
    color: "law",
    description:
      "Build a foundation in legal studies, constitutional knowledge and professional law practice.",
    courseList: [
      "B.A LL.B",
      "LL.B",
    ],
    href: "/courses",
  },
  {
    id: 9,
    name: "Yoga",
    subtitle: "DEPARTMENT OF",
    courses: "B.A Yoga • Yoga Studies",
    image: "/campus/build.webp",
    color: "yoga",
    description:
      "Explore yoga, wellness, traditional practices and holistic approaches to health.",
    courseList: [
      "B.A (Yoga)",
      "P.G Diploma in Yoga",
    ],
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
              Discover diverse academic opportunities across
              science, management, law, healthcare, education
              and other professional fields at DD College.
            </p>

            <Link href="/courses" className="dd-intro-link">
              Explore All Programs
              <ArrowRight size={17} />
            </Link>

            <div className="dd-intro-watermark">
              D.D.
            </div>
          </div>

          {/* ALL DEPARTMENT CARDS */}

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

                <h3>{department.name}</h3>

                <span className="dd-department-courses">
                  {department.courses}
                </span>

                <p className="dd-department-description">
                  {department.description}
                </p>

                <div className="dd-department-course-list">
                  {department.courseList.map((course) => (
                    <span key={course}>
                      {course}
                    </span>
                  ))}
                </div>

                <Link
                  href={department.href}
                  className="dd-department-button"
                >
                  Explore Programs
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <span className="dd-department-number">
                {String(department.id).padStart(2, "0")}
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
