
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  FlaskConical,
  Calculator,
  BookOpen,
  Users,
  Briefcase,
  Landmark,
  Laptop,
  Award,
  Search,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./courses.css";

type CourseCategory =
  | "Undergraduate"
  | "Postgraduate"
  | "Diploma"
  | "Professional";

type Course = {
  id: string;
  name: string;
  shortName: string;
  department: string;
  category: CourseCategory;
  duration: string;
  overview: string;
  eligibility: string;
  icon: LucideIcon;
  color: string;
  highlights: string[];
};

const courses: Course[] = [
  // DEPARTMENT OF SCIENCE
  {
    id: "bsc-cbz",
    name: "Bachelor of Science (C.B.Z)",
    shortName: "B.Sc (C.B.Z)",
    department: "Department of Science",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Study Chemistry, Botany and Zoology with a foundation in scientific concepts and practical learning.",
    eligibility: "Contact the college for current eligibility requirements.",
    icon: FlaskConical,
    color: "blue",
    highlights: ["Chemistry", "Botany", "Zoology"],
  },
  {
    id: "bsc-pcm",
    name: "Bachelor of Science (P.C.M)",
    shortName: "B.Sc (P.C.M)",
    department: "Department of Science",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Develop scientific and analytical skills through Physics, Chemistry and Mathematics.",
    eligibility: "Contact the college for current eligibility requirements.",
    icon: FlaskConical,
    color: "blue",
    highlights: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    id: "msc-physics",
    name: "Master of Science Physics",
    shortName: "M.Sc Physics",
    department: "Department of Science",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Explore advanced concepts in physics and scientific research.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: FlaskConical,
    color: "purple",
    highlights: ["Advanced Physics", "Research", "Scientific Studies"],
  },
  {
    id: "msc-chemistry",
    name: "Master of Science Chemistry",
    shortName: "M.Sc Chemistry",
    department: "Department of Science",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Build advanced knowledge of chemical sciences and laboratory concepts.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: FlaskConical,
    color: "purple",
    highlights: ["Chemical Sciences", "Laboratory", "Research"],
  },
  {
    id: "msc-mathematics",
    name: "Master of Science Mathematics",
    shortName: "M.Sc Mathematics",
    department: "Department of Science",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Develop advanced mathematical knowledge and analytical problem-solving skills.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: Calculator,
    color: "purple",
    highlights: ["Advanced Mathematics", "Analysis", "Problem Solving"],
  },
  {
    id: "msc-zoology",
    name: "Master of Science Zoology",
    shortName: "M.Sc Zoology",
    department: "Department of Science",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Explore animal biology, life sciences and advanced zoological studies.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: FlaskConical,
    color: "green",
    highlights: ["Animal Biology", "Life Sciences", "Research"],
  },
  {
    id: "msc-botany",
    name: "Master of Science Botany",
    shortName: "M.Sc Botany",
    department: "Department of Science",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Study plant sciences, biodiversity and advanced botanical concepts.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: FlaskConical,
    color: "green",
    highlights: ["Plant Sciences", "Biodiversity", "Research"],
  },

  // DEPARTMENT OF AGRO SCIENCE
  {
    id: "bsc-agriculture",
    name: "B.Sc Agriculture (Hons.)",
    shortName: "B.Sc Agriculture",
    department: "Department of Agro Science",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Explore agricultural sciences, crop production and modern farming practices.",
    eligibility: "Contact the college for current eligibility and subject requirements.",
    icon: BookOpen,
    color: "green",
    highlights: ["Agricultural Science", "Crop Production", "Farm Practices"],
  },
  {
    id: "msc-horticulture",
    name: "M.Sc Horticulture",
    shortName: "M.Sc Horticulture",
    department: "Department of Agro Science",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Develop advanced knowledge of horticultural science and plant cultivation.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: BookOpen,
    color: "green",
    highlights: ["Horticulture", "Plant Cultivation", "Research"],
  },
  {
    id: "msc-agronomy",
    name: "M.Sc Agronomy",
    shortName: "M.Sc Agronomy",
    department: "Department of Agro Science",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Study crop management, soil practices and advanced agronomy.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: BookOpen,
    color: "green",
    highlights: ["Crop Management", "Soil Science", "Agronomy"],
  },

  // DEPARTMENT OF HEALTH SCIENCES
  {
    id: "gnm-nursing",
    name: "General Nursing and Midwifery",
    shortName: "GNM Nursing",
    department: "Department of Health Sciences",
    category: "Diploma",
    duration: "As per approved course norms",
    overview:
      "Learn nursing fundamentals, patient care and clinical healthcare practices.",
    eligibility: "Contact the college for current nursing admission requirements.",
    icon: Users,
    color: "blue",
    highlights: ["Nursing Care", "Patient Support", "Healthcare"],
  },
  {
    id: "dpharma",
    name: "Diploma in Pharmacy",
    shortName: "D.Pharma",
    department: "Department of Health Sciences",
    category: "Diploma",
    duration: "As per approved course norms",
    overview:
      "Develop foundational knowledge of pharmaceutical sciences and pharmacy practices.",
    eligibility: "Contact the college for current pharmacy admission requirements.",
    icon: FlaskConical,
    color: "blue",
    highlights: ["Pharmaceutical Science", "Medicines", "Pharmacy Practice"],
  },

  // DEPARTMENT OF COMMERCE & MANAGEMENT
  {
    id: "bcom",
    name: "Bachelor of Commerce",
    shortName: "B.Com",
    department: "Department of Commerce & Management",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Build knowledge of accounting, finance, taxation and commerce.",
    eligibility: "10+2 or equivalent. Confirm current admission criteria.",
    icon: Calculator,
    color: "purple",
    highlights: ["Accounting", "Finance", "Commerce"],
  },
  {
    id: "bcom-hons",
    name: "Bachelor of Commerce Honours",
    shortName: "B.Com (Hons.)",
    department: "Department of Commerce & Management",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Explore advanced commerce subjects and business-related concepts.",
    eligibility: "10+2 or equivalent. Confirm current admission criteria.",
    icon: Calculator,
    color: "purple",
    highlights: ["Advanced Commerce", "Accounting", "Finance"],
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    department: "Department of Commerce & Management",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Explore business management, marketing, finance and entrepreneurship.",
    eligibility: "10+2 or equivalent. Confirm current admission criteria.",
    icon: Briefcase,
    color: "yellow",
    highlights: ["Management", "Marketing", "Entrepreneurship"],
  },
  {
    id: "mcom",
    name: "Master of Commerce",
    shortName: "M.Com",
    department: "Department of Commerce & Management",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Explore advanced concepts in accounting, commerce and financial management.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: Calculator,
    color: "blue",
    highlights: ["Advanced Commerce", "Finance", "Accounting"],
  },

  // DEPARTMENT OF HUMANITY & SOCIAL SCIENCES
  {
    id: "ba",
    name: "Bachelor of Arts",
    shortName: "B.A",
    department: "Department of Humanity & Social Sciences",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Explore humanities and social sciences through academic study.",
    eligibility: "10+2 or equivalent. Confirm available subject combinations.",
    icon: BookOpen,
    color: "green",
    highlights: ["Humanities", "Social Sciences", "Communication"],
  },
  {
    id: "ma-english",
    name: "Master of Arts English",
    shortName: "M.A (English)",
    department: "Department of Humanity & Social Sciences",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Develop advanced knowledge of English literature and language.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: BookOpen,
    color: "purple",
    highlights: ["English Literature", "Language", "Research"],
  },
  {
    id: "ma-history",
    name: "Master of Arts History",
    shortName: "M.A (History)",
    department: "Department of Humanity & Social Sciences",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Explore historical events, societies and historical research.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: BookOpen,
    color: "purple",
    highlights: ["History", "Civilizations", "Research"],
  },
  {
    id: "ma-political-science",
    name: "Master of Arts Political Science",
    shortName: "M.A (Political Science)",
    department: "Department of Humanity & Social Sciences",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Study political systems, governance and international relations.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: Landmark,
    color: "purple",
    highlights: ["Political Studies", "Governance", "International Relations"],
  },

  // DEPARTMENT OF LAW
  {
    id: "ba-llb",
    name: "Bachelor of Arts and Bachelor of Laws",
    shortName: "B.A. LL.B",
    department: "Department of Law",
    category: "Undergraduate",
    duration: "As per approved course norms",
    overview:
      "Explore an integrated programme combining arts education and legal studies.",
    eligibility: "Contact the college for current law admission requirements.",
    icon: Landmark,
    color: "yellow",
    highlights: ["Legal Studies", "Arts", "Law"],
  },
  {
    id: "llb",
    name: "Bachelor of Laws",
    shortName: "LL.B",
    department: "Department of Law",
    category: "Undergraduate",
    duration: "As per approved course norms",
    overview:
      "Develop foundational legal knowledge and an understanding of the legal system.",
    eligibility: "Contact the college for current law admission requirements.",
    icon: Landmark,
    color: "yellow",
    highlights: ["Legal Studies", "Law", "Legal Research"],
  },

  // DEPARTMENT OF EDUCATION
  {
    id: "bed",
    name: "Bachelor of Education",
    shortName: "B.Ed",
    department: "Department of Education",
    category: "Professional",
    duration: "As per approved course norms",
    overview:
      "Develop teaching knowledge, classroom skills and educational understanding.",
    eligibility: "Contact the college for current B.Ed admission requirements.",
    icon: GraduationCap,
    color: "blue",
    highlights: ["Teaching", "Education", "Classroom Learning"],
  },

  // DEPARTMENT OF COMPUTER SCIENCE
  {
    id: "bsc-computer-science",
    name: "B.Sc Computer Science",
    shortName: "B.Sc Computer Science",
    department: "Department of Computer Science",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Study computer science, programming and modern computing concepts.",
    eligibility: "10+2 or equivalent. Confirm current subject requirements.",
    icon: Laptop,
    color: "blue",
    highlights: ["Computer Science", "Programming", "Technology"],
  },
  {
    id: "bca",
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    department: "Department of Computer Science",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Build a foundation in programming, software development and computer applications.",
    eligibility: "10+2 or equivalent. Confirm current admission requirements.",
    icon: Laptop,
    color: "blue",
    highlights: ["Programming", "Web Development", "Database Systems"],
  },
  {
    id: "bsc-it",
    name: "B.Sc Information Technology",
    shortName: "B.Sc IT",
    department: "Department of Computer Science",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Explore information technology, computing systems and digital applications.",
    eligibility: "10+2 or equivalent. Confirm current subject requirements.",
    icon: Laptop,
    color: "blue",
    highlights: ["Information Technology", "Computing", "Digital Skills"],
  },

  // DEPARTMENT OF YOGA
  {
    id: "ba-yoga",
    name: "Bachelor of Arts Yoga",
    shortName: "B.A (Yoga)",
    department: "Department of Yoga",
    category: "Undergraduate",
    duration: "As per university norms",
    overview:
      "Explore yoga studies, wellness and traditional practices.",
    eligibility: "10+2 or equivalent. Confirm current admission requirements.",
    icon: Users,
    color: "green",
    highlights: ["Yoga Studies", "Wellness", "Practice"],
  },
  {
    id: "pg-diploma-yoga",
    name: "Postgraduate Diploma in Yoga",
    shortName: "P.G Diploma in Yoga",
    department: "Department of Yoga",
    category: "Diploma",
    duration: "As per approved course norms",
    overview:
      "Develop further knowledge of yoga, wellness and related practices.",
    eligibility: "Contact the college for current eligibility requirements.",
    icon: Award,
    color: "green",
    highlights: ["Yoga", "Wellness", "Advanced Practice"],
  },
  {
    id: "ma-yoga",
    name: "Master of Arts Yoga",
    shortName: "M.A (Yoga)",
    department: "Department of Yoga",
    category: "Postgraduate",
    duration: "As per university norms",
    overview:
      "Explore advanced yoga studies and related academic concepts.",
    eligibility: "Relevant bachelor's degree. Confirm current criteria with the college.",
    icon: Award,
    color: "green",
    highlights: ["Advanced Yoga Studies", "Wellness", "Research"],
  },
];

const categories = [
  "All",
  "Undergraduate",
  "Postgraduate",
  "Diploma",
  "Professional",
];

const departments = [
  "All Departments",
  ...Array.from(new Set(courses.map((course) => course.department))),
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDepartment, setActiveDepartment] =
    useState("All Departments");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const searchText =
        `${course.name} ${course.shortName} ${course.department} ${course.overview}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;

      const matchesDepartment =
        activeDepartment === "All Departments" ||
        course.department === activeDepartment;

      return matchesSearch && matchesCategory && matchesDepartment;
    });
  }, [search, activeCategory, activeDepartment]);

  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="courses-hero-overlay" />

        <div className="courses-container courses-hero-content">
          <span className="courses-eyebrow">
            DISCOVER YOUR FUTURE
          </span>

          <h1>
            Explore Our <span>Academic Programs</span>
          </h1>

          <p>
            Choose the right course, discover your potential and take
            the next step towards a successful future with DD College.
          </p>

          <div className="courses-hero-stats">
            <div>
              <strong>{courses.length}+</strong>
              <span>Programs Listed</span>
            </div>
            <div>
              <strong>{departments.length - 1}</strong>
              <span>Departments</span>
            </div>
            <div>
              <strong>UG & PG</strong>
              <span>Study Options</span>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-main-section">
        <div className="courses-container">
          <div className="courses-section-heading">
            <div>
              <span className="courses-eyebrow">
                ACADEMIC EXCELLENCE
              </span>
              <h2>Find Your Perfect Course</h2>
              <p>
                Explore the academic programs and departments listed
                below.
              </p>
            </div>

            <div className="courses-total">
              <GraduationCap size={25} />
              <div>
                <strong>{filteredCourses.length}</strong>
                <span>Courses found</span>
              </div>
            </div>
          </div>

          <div className="courses-filter-panel">
            <div className="courses-search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search courses, departments..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="courses-category-filters">
              {categories.map((category) => (
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
              ))}
            </div>

            <div className="courses-department-filter">
              <label htmlFor="department-filter">
                Filter by Department
              </label>
              <select
                id="department-filter"
                value={activeDepartment}
                onChange={(event) =>
                  setActiveDepartment(event.target.value)
                }
              >
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="courses-grid">
            {filteredCourses.map((course) => {
              const Icon = course.icon;

              return (
                <article className="course-card" key={course.id}>
                  <div className="course-card-top">
                    <div className={`course-icon ${course.color}`}>
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="course-category">
                      {course.category}
                    </span>
                  </div>

                  <p className="course-department">
                    {course.department}
                  </p>

                  <h3>{course.shortName}</h3>

                  <p className="course-full-name">
                    {course.name}
                  </p>

                  <p className="course-overview">
                    {course.overview}
                  </p>

                  <div className="course-highlights">
                    {course.highlights.map((highlight) => (
                      <span key={highlight}>
                        <CheckCircle2 size={13} />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="course-info">
                    <span>Duration</span>
                    <strong>{course.duration}</strong>
                  </div>

                  <div className="course-eligibility">
                    <strong>Eligibility</strong>
                    <p>{course.eligibility}</p>
                  </div>

                  <Link
                    href="/contact"
                    className="course-enquire-btn"
                  >
                    Enquire Now
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="courses-empty">
              <Search size={38} />
              <h3>No courses found</h3>
              <p>
                Try changing your search or selecting another
                department or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                  setActiveDepartment("All Departments");
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="courses-cta">
        <div className="courses-container courses-cta-inner">
          <div>
            <span className="courses-eyebrow">
              START YOUR JOURNEY
            </span>
            <h2>Ready to Take the Next Step?</h2>
            <p>
              Connect with DD College to learn more about courses,
              admission procedures and eligibility.
            </p>
          </div>

          <Link href="/contact" className="courses-cta-button">
            Contact Admissions
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
