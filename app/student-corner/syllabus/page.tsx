"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  GraduationCap,
  Download,
  ExternalLink,
  ChevronDown,
  FileText,
  FolderOpen,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

import "./syllabus.css";

type SyllabusYear = {
  label: string;
  file: string;
};

type SyllabusCourse = {
  id: number;
  name: string;
  shortName: string;
  category: string;
  description: string;
  duration: string;
  years: SyllabusYear[];
};

const syllabusCourses: SyllabusCourse[] = [
  {
    id: 1,
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    category: "Undergraduate",
    description:
      "Computer applications, programming, software development and modern information technology.",
    duration: "3 Years",
    years: [
      { label: "1st Year", file: "/syllabus/bca/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/bca/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/bca/3rd-year.pdf" },
    ],
  },
  {
    id: 2,
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    category: "Undergraduate",
    description:
      "Business management, marketing, finance, entrepreneurship and leadership.",
    duration: "3 Years",
    years: [
      { label: "1st Year", file: "/syllabus/bba/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/bba/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/bba/3rd-year.pdf" },
    ],
  },
  {
    id: 3,
    name: "Bachelor of Commerce",
    shortName: "B.Com",
    category: "Undergraduate",
    description:
      "Accounting, business studies, finance, taxation and commerce.",
    duration: "3 Years",
    years: [
      { label: "1st Year", file: "/syllabus/bcom/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/bcom/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/bcom/3rd-year.pdf" },
    ],
  },
  {
    id: 4,
    name: "Bachelor of Arts",
    shortName: "BA",
    category: "Undergraduate",
    description:
      "Humanities, social sciences, literature and related disciplines.",
    duration: "3 Years",
    years: [
      { label: "1st Year", file: "/syllabus/ba/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/ba/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/ba/3rd-year.pdf" },
    ],
  },
  {
    id: 5,
    name: "Bachelor of Science",
    shortName: "B.Sc",
    category: "Undergraduate",
    description:
      "Scientific concepts, laboratory learning and practical knowledge.",
    duration: "3 Years",
    years: [
      { label: "1st Year", file: "/syllabus/bsc/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/bsc/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/bsc/3rd-year.pdf" },
    ],
  },
  {
    id: 6,
    name: "Master of Arts",
    shortName: "MA",
    category: "Postgraduate",
    description:
      "Advanced studies, research and specialized knowledge in humanities.",
    duration: "2 Years",
    years: [
      { label: "1st Year", file: "/syllabus/ma/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/ma/2nd-year.pdf" },
    ],
  },
  {
    id: 7,
    name: "Master of Commerce",
    shortName: "M.Com",
    category: "Postgraduate",
    description:
      "Advanced commerce, accounting, financial management and business studies.",
    duration: "2 Years",
    years: [
      { label: "1st Year", file: "/syllabus/mcom/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/mcom/2nd-year.pdf" },
    ],
  },
];

const categories = [
  "All Courses",
  "Undergraduate",
  "Postgraduate",
];

export default function SyllabusPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Courses");
  const [openCourse, setOpenCourse] = useState<number | null>(1);

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return syllabusCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All Courses" ||
        course.category === selectedCategory;

      const matchesSearch =
        !query ||
        course.name.toLowerCase().includes(query) ||
        course.shortName.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleCourse = (id: number) => {
    setOpenCourse((current) => (current === id ? null : id));
  };

  return (
    <main className="syllabus-page">
      {/* HERO SECTION */}
      <section className="syllabus-hero">
        <div className="syllabus-hero-overlay" />

        <div className="syllabus-hero-content">
          <div className="syllabus-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/student-corner/studentportal">
              Student Corner
            </Link>
            <span>/</span>
            <span>Syllabus</span>
          </div>

          <span className="syllabus-eyebrow">
            <BookOpen size={16} />
            ACADEMIC RESOURCES
          </span>

          <h1>
            Academic <span>Syllabus</span>
          </h1>

          <p>
            Access course-wise and year-wise syllabus documents
            to plan your academic journey at D.D. College,
            Dehradun.
          </p>

          <a
            href="#syllabus-list"
            className="syllabus-hero-btn"
          >
            Explore Syllabus
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="syllabus-intro">
        <div className="syllabus-container">
          <div className="syllabus-intro-icon">
            <GraduationCap size={35} />
          </div>

          <div className="syllabus-intro-content">
            <span>STUDENT RESOURCES</span>
            <h2>Find Your Course Syllabus</h2>
            <p>
              Browse the available academic syllabus by course
              and year. View or download the documents to stay
              updated with your curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* SYLLABUS LIST */}
      <section
        className="syllabus-main"
        id="syllabus-list"
      >
        <div className="syllabus-container">
          <div className="syllabus-section-heading">
            <div>
              <span className="syllabus-section-tag">
                ACADEMIC PROGRAMS
              </span>

              <h2>Courses & Syllabus</h2>

              <p>
                Select your course to view the available
                academic documents.
              </p>
            </div>

            <div className="syllabus-total">
              <BookOpen size={19} />
              <span>
                {filteredCourses.length} Courses Available
              </span>
            </div>
          </div>

          {/* SEARCH AND FILTER */}
          <div className="syllabus-toolbar">
            <div className="syllabus-search">
              <Search size={20} />

              <input
                type="search"
                placeholder="Search course name..."
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                aria-label="Search courses"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="syllabus-filters">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    selectedCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* COURSE ACCORDIONS */}
          <div className="syllabus-course-list">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => {
                const isOpen = openCourse === course.id;

                return (
                  <article
                    className={`syllabus-course-card ${
                      isOpen ? "expanded" : ""
                    }`}
                    key={course.id}
                  >
                    <button
                      type="button"
                      className="syllabus-course-header"
                      onClick={() => toggleCourse(course.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="syllabus-course-icon">
                        <FileText size={25} />
                      </div>

                      <div className="syllabus-course-info">
                        <div className="syllabus-course-meta">
                          <span>{course.category}</span>
                          <span>{course.duration}</span>
                        </div>

                        <h3>{course.name}</h3>

                        <p>{course.shortName}</p>
                      </div>

                      <div className="syllabus-course-toggle">
                        <ChevronDown
                          size={22}
                          className={isOpen ? "rotate" : ""}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="syllabus-course-body">
                        <p className="syllabus-course-description">
                          {course.description}
                        </p>

                        <div className="syllabus-year-heading">
                          <FolderOpen size={19} />
                          Available Syllabus
                        </div>

                        <div className="syllabus-year-grid">
                          {course.years.map((year) => (
                            <div
                              className="syllabus-year-card"
                              key={year.file}
                            >
                              <div className="syllabus-year-file">
                                <FileText size={22} />

                                <div>
                                  <h4>{year.label}</h4>
                                  <span>PDF Document</span>
                                </div>
                              </div>

                              <div className="syllabus-year-actions">
                                <a
                                  href={year.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="syllabus-view-btn"
                                  aria-label={`View ${course.shortName} ${year.label} syllabus`}
                                >
                                  <ExternalLink size={16} />
                                  View
                                </a>

                                <a
                                  href={year.file}
                                  download
                                  className="syllabus-download-btn"
                                  aria-label={`Download ${course.shortName} ${year.label} syllabus`}
                                >
                                  <Download size={16} />
                                  Download
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })
            ) : (
              <div className="syllabus-no-results">
                <Search size={38} />
                <h3>No Courses Found</h3>
                <p>
                  Try another search term or select a different
                  category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Courses");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HELP SECTION */}
      <section className="syllabus-help">
        <div className="syllabus-container">
          <div className="syllabus-help-content">
            <div className="syllabus-help-icon">
              <GraduationCap size={32} />
            </div>

            <div>
              <span>NEED ASSISTANCE?</span>
              <h2>Need Help With Your Syllabus?</h2>
              <p>
                For syllabus-related questions or academic
                assistance, contact our college team.
              </p>
            </div>
          </div>

          <div className="syllabus-help-actions">
            <Link
              href="/contact"
              className="syllabus-contact-btn"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+917417555666"
              className="syllabus-phone-btn"
            >
              <Phone size={17} />
              Call Us
            </a>

            <a
              href="mailto:info@ddcollege.in"
              className="syllabus-email-btn"
            >
              <Mail size={17} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
