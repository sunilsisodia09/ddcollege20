
import "./course-details.css";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Clock3,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

const courses = [
  {
    slug: "bca",
    title: "Bachelor of Computer Applications",
    shortTitle: "BCA",
    duration: "3 Years",
    category: "Computer Applications",
    description:
      "Build a strong foundation in computer applications, programming, software development and modern IT technologies.",
    overview:
      "The Bachelor of Computer Applications programme focuses on computer science, software development, programming and modern information technology. Students develop technical knowledge and practical skills required in the IT industry.",
    subjects: [
      "Programming Fundamentals",
      "Database Management Systems",
      "Web Development",
      "Computer Networks",
      "Software Engineering",
      "Data Structures",
    ],
    careers: [
      "Software Developer",
      "Web Developer",
      "Database Administrator",
      "IT Support Executive",
    ],
  },
  {
    slug: "bba",
    title: "Bachelor of Business Administration",
    shortTitle: "BBA",
    duration: "3 Years",
    category: "Management",
    description:
      "Develop management, leadership, entrepreneurship and business administration skills.",
    overview:
      "The Bachelor of Business Administration programme introduces students to management principles, marketing, finance, human resources and entrepreneurship. It develops leadership, communication and decision-making abilities.",
    subjects: [
      "Principles of Management",
      "Business Communication",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Entrepreneurship",
    ],
    careers: [
      "Business Executive",
      "Marketing Executive",
      "HR Executive",
      "Business Development Associate",
    ],
  },
  {
    slug: "bcom",
    title: "Bachelor of Commerce",
    shortTitle: "B.Com",
    duration: "3 Years",
    category: "Commerce",
    description:
      "Learn accounting, finance, taxation, economics and modern commerce practices.",
    overview:
      "The Bachelor of Commerce programme provides a foundation in accounting, finance, business law, taxation and economics. Students gain an understanding of business operations and financial management.",
    subjects: [
      "Financial Accounting",
      "Business Economics",
      "Corporate Accounting",
      "Business Law",
      "Income Tax",
      "Financial Management",
    ],
    careers: [
      "Accountant",
      "Finance Executive",
      "Tax Assistant",
      "Banking Associate",
    ],
  },
  {
    slug: "ba",
    title: "Bachelor of Arts",
    shortTitle: "BA",
    duration: "3 Years",
    category: "Humanities",
    description:
      "Explore humanities, social sciences, communication and a wide range of academic disciplines.",
    overview:
      "The Bachelor of Arts programme encourages critical thinking, communication, research and an understanding of society, culture and humanities through a diverse range of academic disciplines.",
    subjects: [
      "Political Science",
      "History",
      "Sociology",
      "English",
      "Economics",
      "Public Administration",
    ],
    careers: [
      "Content Writer",
      "Research Assistant",
      "Public Relations Executive",
      "Civil Services Aspirant",
    ],
  },
  {
    slug: "bsc",
    title: "Bachelor of Science",
    shortTitle: "B.Sc",
    duration: "3 Years",
    category: "Science",
    description:
      "Develop scientific knowledge, analytical thinking and practical research skills.",
    overview:
      "The Bachelor of Science programme builds scientific understanding, analytical thinking and practical knowledge through theoretical learning, laboratory work and academic exploration.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Computer Science",
      "Environmental Science",
    ],
    careers: [
      "Research Assistant",
      "Laboratory Technician",
      "Science Educator",
      "Technical Assistant",
    ],
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailsPage({ params }: Props) {
  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug.toLowerCase()
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="course-details-page">
      <section className="course-details-hero">
        <div className="course-details-container">
          <Link href="/courses" className="course-back-link">
            <ArrowLeft size={18} />
            Back to Courses
          </Link>

          <div className="course-hero-content">
            <div className="course-eyebrow">
              <GraduationCap size={19} />
              DD College Admissions
            </div>

            <span className="course-category">
              {course.category}
            </span>

            <h1>{course.title}</h1>

            <p className="course-hero-description">
              {course.description}
            </p>

            <div className="course-hero-meta">
              <div className="course-meta-item">
                <BookOpen size={19} />
                <span>
                  Course: <strong>{course.shortTitle}</strong>
                </span>
              </div>

              <div className="course-meta-item">
                <Clock3 size={19} />
                <span>
                  Duration: <strong>{course.duration}</strong>
                </span>
              </div>
            </div>

            <Link href="/contact" className="course-hero-button">
              Enquire About Admission
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="course-hero-decoration">
            <GraduationCap size={170} strokeWidth={0.7} />
          </div>
        </div>
      </section>

      <section className="course-details-content">
        <div className="course-details-container">
          <div className="course-details-grid">
            <div className="course-main-content">
              <article className="course-info-card">
                <div className="course-section-icon">
                  <BookOpen size={26} />
                </div>

                <span className="course-section-label">
                  COURSE OVERVIEW
                </span>

                <h2>About This Course</h2>

                <p>{course.overview}</p>

                <p>
                  At DD College, students get opportunities to
                  develop academic knowledge, practical understanding
                  and professional skills through a supportive
                  learning environment.
                </p>
              </article>

              <article className="course-info-card">
                <div className="course-section-icon">
                  <GraduationCap size={26} />
                </div>

                <span className="course-section-label">
                  ACADEMIC CURRICULUM
                </span>

                <h2>Key Subjects</h2>

                <p>
                  Students explore important subjects and develop
                  knowledge related to their chosen academic field.
                </p>

                <div className="course-subject-grid">
                  {course.subjects.map((subject) => (
                    <div
                      className="course-subject-item"
                      key={subject}
                    >
                      <CheckCircle2 size={18} />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="course-info-card">
                <div className="course-section-icon">
                  <BriefcaseBusiness size={26} />
                </div>

                <span className="course-section-label">
                  CAREER OPPORTUNITIES
                </span>

                <h2>Career Opportunities</h2>

                <p>
                  After completing the programme, students can
                  explore further studies and career opportunities
                  in different professional sectors.
                </p>

                <div className="course-career-list">
                  {course.careers.map((career) => (
                    <div className="course-career-item" key={career}>
                      <CheckCircle2 size={18} />
                      {career}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <aside className="course-sidebar">
              <div className="course-admission-card">
                <div className="course-sidebar-icon">
                  <GraduationCap size={30} />
                </div>

                <span className="course-sidebar-label">
                  ADMISSIONS
                </span>

                <h2>Interested in Admission?</h2>

                <p>
                  Connect with our admission team for course details
                  and application assistance.
                </p>

                <div className="course-sidebar-details">
                  <div>
                    <span>Programme</span>
                    <strong>{course.shortTitle}</strong>
                  </div>

                  <div>
                    <span>Duration</span>
                    <strong>{course.duration}</strong>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="course-enquiry-button"
                >
                  Enquire Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/courses"
                  className="course-all-link"
                >
                  Explore All Courses
                </Link>
              </div>

              <div className="course-help-card">
                <h3>Need Guidance?</h3>
                <p>
                  Our admission team can help you understand the
                  programme and admission process.
                </p>

                <Link href="/contact">
                  Contact College
                  <ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="course-bottom-cta">
        <div className="course-details-container">
          <div>
            <span>YOUR FUTURE STARTS HERE</span>
            <h2>Take the Next Step Towards Your Career</h2>
            <p>
              Explore your academic opportunities at DD College.
            </p>
          </div>

          <Link href="/contact">
            Apply / Enquire Now
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
