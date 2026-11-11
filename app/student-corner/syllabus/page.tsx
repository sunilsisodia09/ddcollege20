
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
  GraduationCap,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "./syllabus.css";

type SyllabusYear = {
  label: string;
  file: string;
};

type Department = {
  id: string;
  name: string;
  shortName: string;
  duration: string;
  category: string;
  description: string;
  icon: string;
  years: SyllabusYear[];
};

const departments: Department[] = [
  {
    id: "bca",
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    duration: "3 Years",
    category: "Undergraduate",
    description: "Computer applications, programming and software development.",
    icon: "💻",
    years: [
      { label: "1st Year", file: "/syllabus/bca/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/bca/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/bca/3rd-year.pdf" },
    ],
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    duration: "3 Years",
    category: "Undergraduate",
    description: "Management, business administration and entrepreneurship.",
    icon: "📊",
    years: [
      { label: "1st Year", file: "/syllabus/bba/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/bba/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/bba/3rd-year.pdf" },
    ],
  },
  {
    id: "bcom",
    name: "Bachelor of Commerce",
    shortName: "B.Com",
    duration: "3 Years",
    category: "Undergraduate",
    description: "Accounting, finance, taxation and commerce studies.",
    icon: "📚",
    years: [
      { label: "1st Year", file: "/syllabus/bcom/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/bcom/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/bcom/3rd-year.pdf" },
    ],
  },
  {
    id: "ba",
    name: "Bachelor of Arts",
    shortName: "BA",
    duration: "3 Years",
    category: "Undergraduate",
    description: "Humanities, social sciences and language studies.",
    icon: "🎓",
    years: [
      { label: "1st Year", file: "/syllabus/ba/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/ba/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/ba/3rd-year.pdf" },
    ],
  },
  {
    id: "bsc",
    name: "Bachelor of Science",
    shortName: "B.Sc",
    duration: "3 Years",
    category: "Undergraduate",
    description: "Scientific knowledge, research and practical learning.",
    icon: "🔬",
    years: [
      { label: "1st Year", file: "/syllabus/bsc/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/bsc/2nd-year.pdf" },
      { label: "3rd Year", file: "/syllabus/bsc/3rd-year.pdf" },
    ],
  },
  {
    id: "ma",
    name: "Master of Arts",
    shortName: "MA",
    duration: "2 Years",
    category: "Postgraduate",
    description: "Advanced learning and specialization in humanities.",
    icon: "📖",
    years: [
      { label: "1st Year", file: "/syllabus/ma/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/ma/2nd-year.pdf" },
    ],
  },
  {
    id: "mcom",
    name: "Master of Commerce",
    shortName: "M.Com",
    duration: "2 Years",
    category: "Postgraduate",
    description: "Advanced commerce, accounting and financial management.",
    icon: "📈",
    years: [
      { label: "1st Year", file: "/syllabus/mcom/1st-year.pdf" },
      { label: "2nd Year", file: "/syllabus/mcom/2nd-year.pdf" },
    ],
  },
];

export default function SyllabusPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>("bca");

  const filteredDepartments = useMemo(() => {
    return departments.filter((department) => {
      const matchesSearch =
        department.name.toLowerCase().includes(search.toLowerCase()) ||
        department.shortName.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || department.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPrograms = departments.length;
  const totalPDFs = departments.reduce(
    (total, department) => total + department.years.length,
    0
  );

  return (
    <main className="syllabus-page">
      {/* HERO SECTION */}
      <section className="syllabus-hero">
        <div className="syllabus-hero-pattern" />

        <div className="syllabus-container syllabus-hero-content">
          <div className="syllabus-breadcrumb">
            <Link href="/">Home</Link>
            <ArrowRight size={14} />
            <span>Student Corner</span>
            <ArrowRight size={14} />
            <span>Syllabus</span>
          </div>

          <div className="syllabus-hero-grid">
            <div className="syllabus-hero-text">
              <div className="syllabus-eyebrow">
                <Sparkles size={15} />
                ACADEMIC RESOURCES
              </div>

              <h1>
                Your Learning Journey,
                <span> One Syllabus at a Time.</span>
              </h1>

              <p>
                Explore department-wise and year-wise academic syllabi.
                Find your course, access study plans and download syllabus
                documents in one place.
              </p>

              <a href="#department-list" className="syllabus-primary-btn">
                Explore Syllabus
                <ArrowRight size={18} />
              </a>

              <div className="syllabus-hero-points">
                <span>
                  <CheckCircle2 size={16} />
                  Easy Access
                </span>
                <span>
                  <CheckCircle2 size={16} />
                  Year-wise PDFs
                </span>
              </div>
            </div>

            <div className="syllabus-hero-visual">
              <div className="syllabus-visual-circle circle-one" />
              <div className="syllabus-visual-circle circle-two" />

              <div className="syllabus-document-card">
                <div className="syllabus-document-icon">
                  <FileText size={36} />
                </div>
                <div className="syllabus-document-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="syllabus-document-footer">
                  <span>ACADEMIC SYLLABUS</span>
                  <GraduationCap size={23} />
                </div>
              </div>

              <div className="syllabus-floating-card floating-top">
                <div className="floating-icon">
                  <BookOpen size={19} />
                </div>
                <div>
                  <strong>Study Resources</strong>
                  <small>All in one place</small>
                </div>
              </div>

              <div className="syllabus-floating-card floating-bottom">
                <div className="floating-icon yellow">
                  <Download size={19} />
                </div>
                <div>
                  <strong>PDF Downloads</strong>
                  <small>Quick & easy access</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="syllabus-stats-section">
        <div className="syllabus-container">
          <div className="syllabus-stats">
            <div className="syllabus-stat">
              <div className="syllabus-stat-icon">
                <Building2 size={23} />
              </div>
              <div>
                <strong>{totalPrograms}+</strong>
                <span>Academic Programs</span>
              </div>
            </div>

            <div className="syllabus-stat">
              <div className="syllabus-stat-icon">
                <FileText size={23} />
              </div>
              <div>
                <strong>{totalPDFs}+</strong>
                <span>Year-wise Documents</span>
              </div>
            </div>

            <div className="syllabus-stat">
              <div className="syllabus-stat-icon">
                <CalendarDays size={23} />
              </div>
              <div>
                <strong>2–3</strong>
                <span>Years of Study</span>
              </div>
            </div>

            <div className="syllabus-stat">
              <div className="syllabus-stat-icon">
                <ShieldCheck size={23} />
              </div>
              <div>
                <strong>Easy</strong>
                <span>Student Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENT SECTION */}
      <section
        className="syllabus-departments-section"
        id="department-list"
      >
        <div className="syllabus-container">
          <div className="syllabus-section-heading">
            <div>
              <div className="syllabus-section-label">
                <span />
                FIND YOUR COURSE
              </div>

              <h2>
                Explore Our <span>Academic Syllabus</span>
              </h2>

              <p>
                Select your department to find the syllabus for each
                academic year.
              </p>
            </div>

            <div className="syllabus-heading-icon">
              <GraduationCap size={34} />
            </div>
          </div>

          {/* SEARCH AND FILTER */}
          <div className="syllabus-filter-bar">
            <div className="syllabus-search">
              <Search size={20} />
              <input
                type="search"
                placeholder="Search department or course..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="syllabus-category-filter">
              <button
                className={category === "All" ? "active" : ""}
                onClick={() => setCategory("All")}
              >
                All Courses
              </button>

              <button
                className={
                  category === "Undergraduate" ? "active" : ""
                }
                onClick={() => setCategory("Undergraduate")}
              >
                Undergraduate
              </button>

              <button
                className={
                  category === "Postgraduate" ? "active" : ""
                }
                onClick={() => setCategory("Postgraduate")}
              >
                Postgraduate
              </button>
            </div>
          </div>

          {/* DEPARTMENT CARDS */}
          <div className="syllabus-department-list">
            {filteredDepartments.length > 0 ? (
              filteredDepartments.map((department, index) => {
                const isExpanded = expanded === department.id;

                return (
                  <article
                    className={`syllabus-department-card ${
                      isExpanded ? "expanded" : ""
                    }`}
                    key={department.id}
                  >
                    <button
                      className="syllabus-department-header"
                      onClick={() =>
                        setExpanded(isExpanded ? null : department.id)
                      }
                      aria-expanded={isExpanded}
                    >
                      <div className="syllabus-department-left">
                        <div className="syllabus-department-icon">
                          <span>{department.icon}</span>
                        </div>

                        <div className="syllabus-department-info">
                          <div className="syllabus-department-meta">
                            <span className="syllabus-course-code">
                              {department.shortName}
                            </span>
                            <span className="syllabus-course-category">
                              {department.category}
                            </span>
                          </div>

                          <h3>{department.name}</h3>
                          <p>{department.description}</p>

                          <div className="syllabus-course-details">
                            <span>
                              <CalendarDays size={14} />
                              {department.duration}
                            </span>
                            <span>
                              <FileText size={14} />
                              {department.years.length} Year-wise PDFs
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="syllabus-department-action">
                        <span>
                          {isExpanded ? "Hide Years" : "View Syllabus"}
                        </span>
                        <ChevronDown
                          size={20}
                          className={isExpanded ? "rotate" : ""}
                        />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="syllabus-year-panel">
                        <div className="syllabus-year-heading">
                          <div>
                            <span className="syllabus-section-label">
                              <span />
                              AVAILABLE DOCUMENTS
                            </span>
                            <h4>{department.shortName} Syllabus</h4>
                          </div>
                          <span className="syllabus-year-count">
                            {department.years.length} Documents
                          </span>
                        </div>

                        <div className="syllabus-year-grid">
                          {department.years.map((year) => (
                            <div
                              className="syllabus-year-card"
                              key={year.label}
                            >
                              <div className="syllabus-year-file-icon">
                                <FileText size={23} />
                              </div>

                              <div className="syllabus-year-info">
                                <strong>{year.label}</strong>
                                <span>PDF Document</span>
                              </div>

                              <a
                                href={year.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="syllabus-view-btn"
                                aria-label={`View ${department.shortName} ${year.label} syllabus`}
                              >
                                <ArrowUpRight size={18} />
                              </a>

                              <a
                                href={year.file}
                                download
                                className="syllabus-download-btn"
                              >
                                <Download size={15} />
                                Download
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <span className="syllabus-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                );
              })
            ) : (
              <div className="syllabus-empty">
                <Search size={38} />
                <h3>No courses found</h3>
                <p>Try another department name or change the filter.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
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
      <section className="syllabus-help-section">
        <div className="syllabus-container">
          <div className="syllabus-help-card">
            <div className="syllabus-help-icon">
              <BookOpen size={31} />
            </div>

            <div className="syllabus-help-content">
              <span>NEED ACADEMIC ASSISTANCE?</span>
              <h2>Can't Find Your Syllabus?</h2>
              <p>
                Contact the college office for assistance with your
                department, academic year or syllabus documents.
              </p>
            </div>

            <Link href="/contact" className="syllabus-help-btn">
              Contact College
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
