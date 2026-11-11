
"use client";

import { useState } from "react";
import {
  Search,
  GraduationCap,
  Printer,
  Download,
  FileText,
} from "lucide-react";
import "./fee.css";

const courses = [
  { department: "Science", name: "B.Sc. (C.B.Z.)", duration: "3 Years", fee: "Contact College" },
  { department: "Science", name: "B.Sc. (P.C.M.)", duration: "3 Years", fee: "Contact College" },
  { department: "Science", name: "M.Sc. Physics", duration: "2 Years", fee: "Contact College" },
  { department: "Science", name: "M.Sc. Chemistry", duration: "2 Years", fee: "Contact College" },
  { department: "Science", name: "M.Sc. Mathematics", duration: "2 Years", fee: "Contact College" },
  { department: "Science", name: "M.Sc. Zoology", duration: "2 Years", fee: "Contact College" },
  { department: "Science", name: "M.Sc. Botany", duration: "2 Years", fee: "Contact College" },
  { department: "Agro Science", name: "B.Sc. Agriculture (Hons.)", duration: "4 Years", fee: "Contact College" },
  { department: "Agro Science", name: "M.Sc. Horticulture", duration: "2 Years", fee: "Contact College" },
  { department: "Agro Science", name: "M.Sc. Agronomy", duration: "2 Years", fee: "Contact College" },
  { department: "Commerce & Management", name: "B.Com", duration: "3 Years", fee: "Contact College" },
  { department: "Commerce & Management", name: "B.Com (Hons.)", duration: "4 Years", fee: "Contact College" },
  { department: "Commerce & Management", name: "BBA", duration: "3 Years", fee: "Contact College" },
  { department: "Commerce & Management", name: "M.Com", duration: "2 Years", fee: "Contact College" },
  { department: "Humanities & Social Sciences", name: "B.A.", duration: "3 Years", fee: "Contact College" },
  { department: "Humanities & Social Sciences", name: "M.A. English", duration: "2 Years", fee: "Contact College" },
  { department: "Humanities & Social Sciences", name: "M.A. History", duration: "2 Years", fee: "Contact College" },
  { department: "Humanities & Social Sciences", name: "M.A. Political Science", duration: "2 Years", fee: "Contact College" },
  { department: "Education", name: "B.Ed.", duration: "2 Years", fee: "Contact College" },
  { department: "Computer Science", name: "B.Sc. Computer Science", duration: "3 Years", fee: "Contact College" },
  { department: "Computer Science", name: "BCA", duration: "3 Years", fee: "Contact College" },
  { department: "Computer Science", name: "B.Sc. IT", duration: "3 Years", fee: "Contact College" },
  { department: "Health Sciences", name: "GNM Nursing", duration: "3 Years", fee: "Contact College" },
  { department: "Health Sciences", name: "D.Pharma", duration: "2 Years", fee: "Contact College" },
  { department: "Law", name: "B.A. LL.B.", duration: "5 Years", fee: "Contact College" },
  { department: "Law", name: "LL.B.", duration: "3 Years", fee: "Contact College" },
  { department: "Yoga", name: "B.A. (Yoga)", duration: "3 Years", fee: "Contact College" },
  { department: "Yoga", name: "P.G. Diploma in Yoga", duration: "1 Year", fee: "Contact College" },
  { department: "Yoga", name: "M.A. (Yoga)", duration: "2 Years", fee: "Contact College" },
];

const departments = [
  "All Departments",
  ...Array.from(new Set(courses.map((course) => course.department))),
];

export default function FeeStructure() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");

  const filteredCourses = courses.filter((course) => {
    const matchesDepartment =
      department === "All Departments" ||
      course.department === department;

    const query = search.trim().toLowerCase();

    const matchesSearch =
      course.name.toLowerCase().includes(query) ||
      course.department.toLowerCase().includes(query);

    return matchesDepartment && matchesSearch;
  });

  function saveAsPDF() {
    window.print();
  }

  return (
    <main className="dd-fees-page">
      {/* HERO SECTION WITH COLLEGE BACKGROUND IMAGE */}
      <section className="dd-fees-hero">
        <div className="dd-fees-container">
          <span className="dd-fees-eyebrow">
            DD COLLEGE | ADMISSIONS
          </span>

          <h1>Course &amp; Fee Structure</h1>

          <p>
            Explore undergraduate and postgraduate programmes offered
            by DD College. Contact the admissions team for the latest
            approved fee details.
          </p>

          <div className="dd-fees-hero-actions">
            <a
              href="#fee-list"
              className="dd-fees-btn dd-fees-btn-gold"
            >
              <GraduationCap size={19} />
              Explore Courses
            </a>

            <button
              type="button"
              onClick={saveAsPDF}
              className="dd-fees-btn dd-fees-btn-outline"
            >
              <Download size={18} />
              Save as PDF
            </button>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section
        className="dd-fees-container dd-fees-content"
        id="fee-list"
      >
        <div className="dd-fees-heading">
          <span>ACADEMIC PROGRAMMES</span>
          <h2>Find Your Course</h2>
          <p>
            Search courses or select a department to get started.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="dd-fees-summary">
          <div className="dd-fees-summary-icon">
            <GraduationCap size={27} />
          </div>

          <div>
            <span>Programmes Listed</span>
            <strong>{courses.length} Courses</strong>
          </div>

          <div className="dd-fees-summary-icon">
            <FileText size={24} />
          </div>

          <div>
            <span>Fee Information</span>
            <strong>Admissions Office</strong>
          </div>
        </div>

        {/* SEARCH AND FILTER */}
        <div className="dd-fees-toolbar">
          <label className="dd-fees-search">
            <Search size={19} />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search course or department..."
              aria-label="Search courses"
            />
          </label>

          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="dd-fees-select"
            aria-label="Filter courses by department"
          >
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="dd-fees-print"
            onClick={saveAsPDF}
          >
            <Printer size={17} />
            Print / PDF
          </button>
        </div>

        {/* COURSES TABLE */}
        <div className="dd-fees-table-wrap">
          <table className="dd-fees-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Course Name</th>
                <th>Department</th>
                <th>Duration</th>
                <th>Fee Details</th>
              </tr>
            </thead>

            <tbody>
              {filteredCourses.map((course, index) => (
                <tr key={course.name}>
                  <td>{index + 1}</td>

                  <td className="dd-fees-course-name">
                    {course.name}
                  </td>

                  <td>{course.department}</td>
                  <td>{course.duration}</td>

                  <td>
                    <span className="dd-fees-contact-label">
                      {course.fee}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredCourses.length === 0 && (
                <tr>
                  <td colSpan={5} className="dd-fees-empty">
                    No courses found. Try another search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* FEE INFORMATION */}
        <div className="dd-fees-notice">
          <FileText size={24} />

          <div>
            <h3>Important Fee Information</h3>

            <p>
              Fees may vary by course and academic session. Please
              contact the college admissions office for the current
              tuition fee, admission charges, examination fees and
              other applicable charges. Official fee amounts should
              be confirmed with the college.
            </p>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="dd-fees-contact">
          <div>
            <span>NEED HELP WITH ADMISSIONS?</span>

            <h2>Get Course &amp; Fee Details</h2>

            <p>
              Contact our admissions team for verified fees and course
              eligibility information.
            </p>
          </div>

          <a
            href="/contact"
            className="dd-fees-btn dd-fees-btn-gold"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  );
}
