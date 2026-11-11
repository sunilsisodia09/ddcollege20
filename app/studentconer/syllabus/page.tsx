
"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Search,
  FileText,
  Download,
  Eye,
  ChevronRight,
  CalendarDays,
  Layers3,
  ArrowUpRight,
  Filter,
  BookMarked,
} from "lucide-react";

import "./syllabus.css";

type SyllabusItem = {
  year: string;
  label: string;
  pdf: string;
};

type Department = {
  id: string;
  name: string;
  shortName: string;
  category: string;
  duration: string;
  description: string;
  syllabus: SyllabusItem[];
};

const departments: Department[] = [
  {
    id: "bca",
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    category: "Computer Applications",
    duration: "3 Years",
    description: "Computer science, programming and software development.",
    syllabus: [
      { year: "1st Year", label: "First Year Syllabus", pdf: "/syllabus/bca/1st-year.pdf" },
      { year: "2nd Year", label: "Second Year Syllabus", pdf: "/syllabus/bca/2nd-year.pdf" },
      { year: "3rd Year", label: "Third Year Syllabus", pdf: "/syllabus/bca/3rd-year.pdf" },
    ],
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    category: "Management",
    duration: "3 Years",
    description: "Business management, leadership and entrepreneurship.",
    syllabus: [
      { year: "1st Year", label: "First Year Syllabus", pdf: "/syllabus/bba/1st-year.pdf" },
      { year: "2nd Year", label: "Second Year Syllabus", pdf: "/syllabus/bba/2nd-year.pdf" },
      { year: "3rd Year", label: "Third Year Syllabus", pdf: "/syllabus/bba/3rd-year.pdf" },
    ],
  },
  {
    id: "bcom",
    name: "Bachelor of Commerce",
    shortName: "B.Com",
    category: "Commerce",
    duration: "3 Years",
    description: "Accounting, finance, taxation and business studies.",
    syllabus: [
      { year: "1st Year", label: "First Year Syllabus", pdf: "/syllabus/bcom/1st-year.pdf" },
      { year: "2nd Year", label: "Second Year Syllabus", pdf: "/syllabus/bcom/2nd-year.pdf" },
      { year: "3rd Year", label: "Third Year Syllabus", pdf: "/syllabus/bcom/3rd-year.pdf" },
    ],
  },
  {
    id: "ba",
    name: "Bachelor of Arts",
    shortName: "B.A.",
    category: "Arts & Humanities",
    duration: "3 Years",
    description: "Humanities, social sciences and liberal education.",
    syllabus: [
      { year: "1st Year", label: "First Year Syllabus", pdf: "/syllabus/ba/1st-year.pdf" },
      { year: "2nd Year", label: "Second Year Syllabus", pdf: "/syllabus/ba/2nd-year.pdf" },
      { year: "3rd Year", label: "Third Year Syllabus", pdf: "/syllabus/ba/3rd-year.pdf" },
    ],
  },
  {
    id: "bsc",
    name: "Bachelor of Science",
    shortName: "B.Sc.",
    category: "Science",
    duration: "3 Years",
    description: "Scientific knowledge, practical learning and research.",
    syllabus: [
      { year: "1st Year", label: "First Year Syllabus", pdf: "/syllabus/bsc/1st-year.pdf" },
      { year: "2nd Year", label: "Second Year Syllabus", pdf: "/syllabus/bsc/2nd-year.pdf" },
      { year: "3rd Year", label: "Third Year Syllabus", pdf: "/syllabus/bsc/3rd-year.pdf" },
    ],
  },
  {
    id: "ma",
    name: "Master of Arts",
    shortName: "M.A.",
    category: "Postgraduate",
    duration: "2 Years",
    description: "Advanced learning and subject specialisation.",
    syllabus: [
      { year: "1st Year", label: "First Year Syllabus", pdf: "/syllabus/ma/1st-year.pdf" },
      { year: "2nd Year", label: "Second Year Syllabus", pdf: "/syllabus/ma/2nd-year.pdf" },
    ],
  },
  {
    id: "mcom",
    name: "Master of Commerce",
    shortName: "M.Com",
    category: "Postgraduate",
    duration: "2 Years",
    description: "Advanced commerce, accounting and financial management.",
    syllabus: [
      { year: "1st Year", label: "First Year Syllabus", pdf: "/syllabus/mcom/1st-year.pdf" },
      { year: "2nd Year", label: "Second Year Syllabus", pdf: "/syllabus/mcom/2nd-year.pdf" },
    ],
  },
];

const years = ["All Years", "1st Year", "2nd Year", "3rd Year", "4th Year"];

export default function SyllabusPage() {
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedYear, setSelectedYear] = useState("All Years");

  const filteredDepartments = useMemo(() => {
    return departments
      .filter((department) => {
        const matchesSearch =
          department.name.toLowerCase().includes(search.toLowerCase()) ||
          department.shortName.toLowerCase().includes(search.toLowerCase()) ||
          department.category.toLowerCase().includes(search.toLowerCase());

        const matchesDepartment =
          selectedDepartment === "All Departments" ||
          department.id === selectedDepartment;

        return matchesSearch && matchesDepartment;
      })
      .map((department) => ({
        ...department,
        syllabus:
          selectedYear === "All Years"
            ? department.syllabus
            : department.syllabus.filter(
                (item) => item.year === selectedYear
              ),
      }))
      .filter((department) => department.syllabus.length > 0);
  }, [search, selectedDepartment, selectedYear]);

  const totalDocuments = departments.reduce(
    (total, department) => total + department.syllabus.length,
    0
  );

  return (
    <main className="syllabus-page">

      {/* HERO SECTION */}
      <section className="syllabus-hero">
        <div className="syllabus-hero-pattern" />

        <div className="syllabus-container syllabus-hero-content">
          <div className="syllabus-breadcrumb">
            <a href="/">Home</a>
            <ChevronRight size={15} />
            <span>Academic Resources</span>
            <ChevronRight size={15} />
            <span>Syllabus</span>
          </div>

          <div className="syllabus-hero-grid">
            <div className="syllabus-hero-text">
              <span className="syllabus-eyebrow">
                <BookOpen size={16} />
                ACADEMIC RESOURCES
              </span>

              <h1>
                Explore Your
                <span> Syllabus</span>
              </h1>

              <p>
                Find your department-wise and year-wise academic syllabus.
                Access course curriculum and download study documents
                whenever you need them.
              </p>

              <a href="#syllabus-list" className="syllabus-hero-btn">
                Explore Syllabus
                <ArrowUpRight size={19} />
              </a>
            </div>

            <div className="syllabus-hero-visual">
              <div className="syllabus-visual-circle">
                <GraduationCap size={94} strokeWidth={1.3} />
              </div>

              <div className="syllabus-floating-card syllabus-floating-top">
                <FileText size={23} />
                <div>
                  <strong>Academic Curriculum</strong>
                  <small>Department-wise resources</small>
                </div>
              </div>

              <div className="syllabus-floating-card syllabus-floating-bottom">
                <BookMarked size={22} />
                <div>
                  <strong>Easy PDF Access</strong>
                  <small>View and download</small>
                </div>
              </div>
            </div>
          </div>

          <div className="syllabus-stats">
            <div className="syllabus-stat">
              <GraduationCap />
              <div>
                <strong>{departments.length}+</strong>
                <span>Departments</span>
              </div>
            </div>

            <div className="syllabus-stat">
              <FileText />
              <div>
                <strong>{totalDocuments}+</strong>
                <span>Syllabus Documents</span>
              </div>
            </div>

            <div className="syllabus-stat">
              <CalendarDays />
              <div>
                <strong>Year Wise</strong>
                <span>Academic Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYLLABUS SECTION */}
      <section className="syllabus-main" id="syllabus-list">
        <div className="syllabus-container">

          <div className="syllabus-section-heading">
            <div>
              <span className="syllabus-section-label">
                <Layers3 size={16} />
                FIND YOUR COURSE
              </span>

              <h2>
                Department Wise <span>Syllabus</span>
              </h2>

              <p>
                Select your department and academic year to access the
                relevant syllabus PDF.
              </p>
            </div>
          </div>

          {/* FILTERS */}
          <div className="syllabus-filters">
            <div className="syllabus-search">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search department or course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="syllabus-filter-select">
              <Filter size={17} />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="All Departments">All Departments</option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.shortName}
                  </option>
                ))}
              </select>
            </div>

            <div className="syllabus-filter-select">
              <CalendarDays size={17} />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="syllabus-results-info">
            <span>
              Showing <strong>{filteredDepartments.length}</strong> departments
            </span>
            <span>
              <FileText size={15} />
              PDF Syllabus
            </span>
          </div>

          {/* DEPARTMENT CARDS */}
          {filteredDepartments.length > 0 ? (
            <div className="syllabus-grid">
              {filteredDepartments.map((department, index) => (
                <article
                  className="syllabus-card"
                  key={department.id}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="syllabus-card-top">
                    <div className="syllabus-card-icon">
                      <GraduationCap size={29} />
                    </div>
                    <span className="syllabus-course-badge">
                      {department.shortName}
                    </span>
                  </div>

                  <span className="syllabus-category">
                    {department.category}
                  </span>

                  <h3>{department.name}</h3>

                  <p className="syllabus-card-description">
                    {department.description}
                  </p>

                  <div className="syllabus-course-meta">
                    <span>
                      <CalendarDays size={15} />
                      {department.duration}
                    </span>
                    <span>
                      <BookOpen size={15} />
                      {department.syllabus.length} Documents
                    </span>
                  </div>

                  <div className="syllabus-card-divider" />

                  <div className="syllabus-year-heading">
                    <strong>Available Syllabus</strong>
                    <span>{department.syllabus.length} Years</span>
                  </div>

                  <div className="syllabus-year-list">
                    {department.syllabus.map((item) => (
                      <div className="syllabus-year-row" key={item.year}>
                        <div className="syllabus-year-info">
                          <div className="syllabus-pdf-icon">
                            <FileText size={19} />
                          </div>
                          <div>
                            <strong>{item.year}</strong>
                            <small>PDF Document</small>
                          </div>
                        </div>

                        <div className="syllabus-pdf-actions">
                          <a
                            href={item.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="syllabus-view-btn"
                            aria-label={`View ${department.shortName} ${item.year} syllabus`}
                            title="View PDF"
                          >
                            <Eye size={17} />
                          </a>

                          <a
                            href={item.pdf}
                            download
                            className="syllabus-download-btn"
                            aria-label={`Download ${department.shortName} ${item.year} syllabus`}
                            title="Download PDF"
                          >
                            <Download size={17} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="syllabus-card-footer">
                    <span>
                      <span className="syllabus-status-dot" />
                      Academic Resources
                    </span>
                    <ChevronRight size={18} />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="syllabus-empty">
              <div>
                <Search size={34} />
              </div>
              <h3>No syllabus found</h3>
              <p>
                Try another department or select a different academic year.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedDepartment("All Departments");
                  setSelectedYear("All Years");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM INFORMATION */}
      <section className="syllabus-help">
        <div className="syllabus-container">
          <div className="syllabus-help-inner">
            <div className="syllabus-help-icon">
              <BookOpen size={35} />
            </div>

            <div className="syllabus-help-text">
              <h2>Need Help Finding Your Syllabus?</h2>
              <p>
                Contact the college administration for academic
                curriculum-related information and assistance.
              </p>
            </div>

            <a href="/#contact" className="syllabus-help-btn">
              Contact College
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
