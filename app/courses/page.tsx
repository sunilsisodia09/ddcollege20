
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Clock3,
  GraduationCap,
  Search,
  Users,
  Laptop,
  Calculator,
  FlaskConical,
  Landmark,
  FileText,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

import "./courses.css";

type Course = {
  id: string;
  name: string;
  shortName: string;
  category: "Undergraduate" | "Postgraduate";
  duration: string;
  overview: string;
  eligibility: string;
  icon: typeof GraduationCap;
  color: string;
  highlights: string[];
};

const courses: Course[] = [
  {
    id: "bca",
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    category: "Undergraduate",
    duration: "3 Years",
    overview:
      "Build a strong foundation in computer applications, programming, software development and modern technologies.",
    eligibility:
      "10+2 or equivalent. Confirm the current admission requirements with the college.",
    icon: Laptop,
    color: "blue",
    highlights: ["Programming", "Web Development", "Database Systems"],
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    category: "Undergraduate",
    duration: "3 Years",
    overview:
      "Explore business management, marketing, finance, entrepreneurship and organizational leadership.",
    eligibility:
      "10+2 or equivalent. Confirm the current admission requirements with the college.",
    icon: BriefcaseBusiness,
    color: "yellow",
    highlights: ["Business Management", "Marketing", "Entrepreneurship"],
  },
  {
    id: "bcom",
    name: "Bachelor of Commerce",
    shortName: "B.Com",
    category: "Undergraduate",
    duration: "3 Years",
    overview:
      "Develop knowledge of commerce, accounting, financial management, taxation and business practices.",
    eligibility:
      "10+2 or equivalent. Confirm the current admission requirements with the college.",
    icon: Calculator,
    color: "purple",
    highlights: ["Accounting", "Finance", "Business Studies"],
  },
  {
    id: "ba",
    name: "Bachelor of Arts",
    shortName: "BA",
    category: "Undergraduate",
    duration: "3 Years",
    overview:
      "Explore humanities, social sciences and subjects that develop critical thinking and communication.",
    eligibility:
      "10+2 or equivalent. Subject availability and requirements should be confirmed.",
    icon: BookOpen,
    color: "green",
    highlights: ["Humanities", "Social Sciences", "Communication"],
  },
  {
    id: "bsc",
    name: "Bachelor of Science",
    shortName: "B.Sc",
    category: "Undergraduate",
    duration: "3 Years",
    overview:
      "Build scientific understanding through academic study, analytical thinking and practical learning.",
    eligibility:
      "10+2 with relevant subjects. Confirm subject combinations with the college.",
    icon: FlaskConical,
    color: "orange",
    highlights: ["Science", "Research Skills", "Practical Learning"],
  },
  {
    id: "ma",
    name: "Master of Arts",
    shortName: "MA",
    category: "Postgraduate",
    duration: "2 Years",
    overview:
      "Develop advanced subject knowledge, research skills and academic expertise in the chosen discipline.",
    eligibility:
      "Relevant bachelor's degree. Subject-specific criteria may apply.",
    icon: Landmark,
    color: "purple",
    highlights: ["Advanced Studies", "Research", "Specialization"],
  },
  {
    id: "mcom",
    name: "Master of Commerce",
    shortName: "M.Com",
    category: "Postgraduate",
    duration: "2 Years",
    overview:
      "Explore advanced concepts in accounting, commerce, finance and business management.",
    eligibility:
      "Relevant bachelor's degree. Confirm current admission criteria.",
    icon: Calculator,
    color: "blue",
    highlights: ["Advanced Commerce", "Finance", "Accounting"],
  },
];

const benefits = [
  {
    icon: Users,
    title: "Student-Focused Learning",
    description:
      "An academic environment that encourages participation, collaboration and personal development.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge & Skills",
    description:
      "Build subject knowledge, problem-solving ability and practical understanding.",
  },
  {
    icon: Target,
    title: "Career Preparation",
    description:
      "Develop academic and professional skills to prepare for future opportunities.",
  },
  {
    icon: Award,
    title: "Holistic Development",
    description:
      "Make the most of academic activities, campus experiences and learning opportunities.",
  },
];

const admissionUrl = "https://admissions.ddcollege.in/";

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" ||
        course.category === activeCategory;

      const searchText =
        `${course.name} ${course.shortName} ${course.overview}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="courses-page">

      {/* COURSE LIST */}

      <section className="courses-list-section" id="course-list">
        <div className="courses-container">

          <div className="courses-section-heading">
            <div>
              <div className="courses-section-label">
                <span />
                FIND YOUR PROGRAM
              </div>

              <h2>
                Explore Our <span>Courses & Programs</span>
              </h2>

              <p>
                Find a program that matches your interests and academic goals.
              </p>
            </div>

            <div className="courses-heading-decoration">
              <GraduationCap size={37} />
            </div>
          </div>

          {/* SEARCH AND FILTER */}

          <div className="courses-filter-bar">

            <div className="courses-search">
              <Search size={19} />

              <input
                type="search"
                placeholder="Search courses, subjects or programs..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search courses"
              />
            </div>

            <div className="courses-filter-buttons">
              {["All", "Undergraduate", "Postgraduate"].map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory === category ? "active" : ""
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category === "All" ? "All Programs" : category}
                  </button>
                )
              )}
            </div>

          </div>

          <div className="courses-results-info">
            <span>
              Showing <strong>{filteredCourses.length}</strong> programs
            </span>

            <span>Explore the details below</span>
          </div>

          {/* COURSE CARDS */}

          {filteredCourses.length > 0 ? (
            <div className="courses-grid">

              {filteredCourses.map((course) => {
                const Icon = course.icon;

                return (
                  <article className="course-card" key={course.id}>

                    <div className={`course-card-top ${course.color}`}>

                      <div className="course-card-icon">
                        <Icon size={30} />
                      </div>

                      <span className="course-category-badge">
                        {course.category}
                      </span>

                      <div className="course-card-code">
                        {course.shortName}
                      </div>

                    </div>

                    <div className="course-card-content">

                      <div className="course-card-duration">
                        <Clock3 size={15} />
                        {course.duration}
                      </div>

                      <h3>{course.name}</h3>

                      <p className="course-card-overview">
                        {course.overview}
                      </p>

                      <div className="course-card-highlights">
                        {course.highlights.map((highlight) => (
                          <span key={highlight}>
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="course-card-eligibility">
                        <strong>Eligibility</strong>
                        <p>{course.eligibility}</p>
                      </div>

                      <div className="course-card-actions">

                        {/* DIRECT ADMISSION PORTAL LINK */}

                        <Link
                          href={admissionUrl}
                          className="course-apply-btn"
                        >
                          Admission Enquiry
                          <ArrowUpRight size={17} />
                        </Link>

                        <Link
                          href="/student-corner/syllabus"
                          className="course-syllabus-btn"
                          aria-label={`View syllabus for ${course.shortName}`}
                          title="View syllabus"
                        >
                          <FileText size={18} />
                        </Link>

                      </div>

                    </div>
                  </article>
                );
              })}

            </div>
          ) : (

            <div className="courses-empty">
              <Search size={38} />

              <h3>No programs found</h3>

              <p>
                Try another course name or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Reset Search
              </button>
            </div>

          )}

        </div>
      </section>

      {/* WHY CHOOSE DD COLLEGE */}

      <section className="courses-benefits-section">
        <div className="courses-container">

          <div className="courses-section-heading centered">

            <div className="courses-section-label">
              <span />
              THE LEARNING EXPERIENCE
            </div>

            <h2>
              More Than a Degree.
              <span> A Journey of Growth.</span>
            </h2>

            <p>
              Education is about developing knowledge, confidence and the
              ability to make a positive contribution.
            </p>

          </div>

          <div className="courses-benefits-grid">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  className="courses-benefit-card"
                  key={benefit.title}
                >

                  <div className="courses-benefit-top">

                    <div className="courses-benefit-icon">
                      <Icon size={26} />
                    </div>

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* SYLLABUS CTA */}

      <section className="courses-syllabus-section">
        <div className="courses-container">

          <div className="courses-syllabus-card">

            <div className="courses-syllabus-icon">
              <FileText size={29} />
            </div>

            <div className="courses-syllabus-content">

              <span>ACADEMIC RESOURCES</span>

              <h2>Looking for Course Syllabus?</h2>

              <p>
                Visit the Student Corner to explore department-wise and
                year-wise syllabus documents.
              </p>

            </div>

            <Link
              href="/student-corner/syllabus"
              className="courses-syllabus-btn"
            >
              View Syllabus
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
