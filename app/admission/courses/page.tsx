
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Clock3 } from "lucide-react";
import "./courses.css";

export default function CoursesPage() {
  const courses = [
    { name: "Bachelor of Arts (B.A.)", duration: "3 Years", level: "Undergraduate", slug: "ba" },
    { name: "Bachelor of Commerce (B.Com.)", duration: "3 Years", level: "Undergraduate", slug: "bcom" },
    { name: "Bachelor of Science (B.Sc.)", duration: "3 Years", level: "Undergraduate", slug: "bsc" },
    { name: "Master of Arts (M.A.)", duration: "2 Years", level: "Postgraduate", slug: "ma" },
    { name: "Master of Commerce (M.Com.)", duration: "2 Years", level: "Postgraduate", slug: "mcom" },
  ];

  return (
    <main className="dd-courses-page">
      <section className="dd-courses-hero">
        <div className="dd-courses-hero-overlay" />
        <div className="dd-courses-hero-content">
          <span className="dd-courses-eyebrow">
            <GraduationCap size={17} />
            DISCOVER YOUR FUTURE
          </span>
          <h1>Our Academic Courses</h1>
          <p>
            Explore academic programmes at DD College and take the next step
            towards your academic and professional goals.
          </p>
          <div className="dd-courses-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Courses</span>
          </div>
        </div>
      </section>

      <section className="dd-courses-section">
        <div className="dd-courses-container">
          <div className="dd-courses-heading">
            <span className="dd-courses-subtitle">ACADEMIC PROGRAMMES</span>
            <h2>Choose Your <span>Pathway</span></h2>
            <p>
              Build knowledge, develop your skills and prepare for a
              successful future with our academic programmes.
            </p>
          </div>

          <div className="dd-courses-grid">
            {courses.map((course, index) => (
              <article className="dd-course-card" key={course.slug}>
                <div className="dd-course-card-top">
                  <div className="dd-course-icon">
                    <BookOpen size={27} strokeWidth={1.7} />
                  </div>
                  <span className="dd-course-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="dd-course-level">{course.level}</span>

                <h3>{course.name}</h3>

                <div className="dd-course-duration">
                  <Clock3 size={17} />
                  <span>Duration: {course.duration}</span>
                </div>

                <div className="dd-course-card-footer">
                  <Link href={`/courses/${course.slug}`}>
                    Explore Course
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="dd-courses-cta">
            <div>
              <span>TAKE THE NEXT STEP</span>
              <h2>Ready to Begin Your Journey?</h2>
              <p>
                Connect with our admission team to learn more about
                programmes and admission opportunities.
              </p>
            </div>
            <Link href="/contact" className="dd-courses-cta-button">
              Contact Admissions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
