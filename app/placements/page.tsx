
"use client";

import { useState } from "react";
import Link from "next/link";
import "./placements.css";

const students = [
  {
    name: "Shweta Kapr",
    course: "B.Sc IT",
    year: "2026",
    company: "WIPRO WILP",
    image: "/gallery/photo.png",
  },
  {
    name: "Rajeev Selwan",
    course: "B.Sc Computer Science",
    year: "2026",
    company: "Spectrum",
    image: "/gallery/kl.png",
  },
  {
    name: "Megha Suyal",
    course: "B.Sc Science",
    year: "2025",
    company: "Bajaj Capital",
    image: "/gallery/ff.png",
  },
  {
    name: "Amrita Kothari",
    course: "B.Sc Computer Science",
    year: "2026",
    company: "Talent IQ",
    image: "/gallery/ax.png",
  },
  {
    name: "Shradha Gurung",
    course: "BBA",
    year: "2026",
    company: "AXIS Bank",
    image: "/gallery/am.png",
  },
  {
    name: "Lavanya Arora",
    course: "B.Com",
    year: "2025",
    company: "Indigo",
    image: "/gallery/Lavn.png",
  },
];

const companies = [
  "WIPRO",
  "TCS",
  "Infosys",
  "HCL",
  "AXIS BANK",
  "BAJAJ CAPITAL",
  "INDIGO",
  "SPECTRUM",
];

const placementSteps = [
  {
    number: "01",
    title: "Registration & Profile Building",
    description:
      "Students register with the placement team and prepare their resumes, academic profiles and professional portfolios.",
  },
  {
    number: "02",
    title: "Career Guidance",
    description:
      "Students receive guidance on career opportunities, suitable job roles and the skills expected by employers.",
  },
  {
    number: "03",
    title: "Skill Development",
    description:
      "Training focuses on communication, aptitude, technical knowledge, teamwork and problem-solving.",
  },
  {
    number: "04",
    title: "Company Assessment",
    description:
      "Students participate in aptitude tests, technical assessments and other recruitment activities.",
  },
  {
    number: "05",
    title: "Interview Preparation",
    description:
      "Mock interviews and practice sessions help students prepare for HR and technical interview rounds.",
  },
  {
    number: "06",
    title: "Selection & Career Support",
    description:
      "Selected students receive guidance through the recruitment process and their next career steps.",
  },
];

const preparationCards = [
  {
    icon: "01",
    title: "Resume Development",
    description:
      "Build a clear, professional resume highlighting education, projects, internships, skills and achievements.",
  },
  {
    icon: "02",
    title: "Communication Skills",
    description:
      "Improve spoken English, confidence, presentation skills and professional communication.",
  },
  {
    icon: "03",
    title: "Aptitude Training",
    description:
      "Practice quantitative aptitude, logical reasoning, verbal ability and problem-solving questions.",
  },
  {
    icon: "04",
    title: "Technical Preparation",
    description:
      "Revise subject fundamentals, programming concepts, practical knowledge and project explanations.",
  },
];

const interviewQuestions = [
  {
    category: "Personal",
    question: "Tell me about yourself.",
    answer:
      "Introduce your education, skills, projects, achievements and career interests in a clear and confident way.",
  },
  {
    category: "Personal",
    question: "What are your strengths and weaknesses?",
    answer:
      "Share genuine strengths with examples and explain how you are actively improving your weaknesses.",
  },
  {
    category: "Career",
    question: "Why should we hire you?",
    answer:
      "Connect your skills, willingness to learn and relevant experience with the requirements of the role.",
  },
  {
    category: "Career",
    question: "Where do you see yourself in five years?",
    answer:
      "Talk about developing expertise, taking responsibility and contributing meaningfully to your organisation.",
  },
  {
    category: "Technical",
    question: "Explain your final-year project.",
    answer:
      "Describe the problem, technologies used, your contribution, challenges and the final outcome.",
  },
  {
    category: "Technical",
    question: "How do you handle a difficult problem?",
    answer:
      "Explain how you understand the issue, break it into smaller tasks, explore solutions and evaluate the result.",
  },
];

const roadmap = [
  {
    week: "WEEK 01",
    title: "Build Your Foundation",
    tasks: [
      "Prepare your updated resume",
      "Identify your career interests",
      "Improve communication basics",
      "Create or update your LinkedIn profile",
    ],
  },
  {
    week: "WEEK 02",
    title: "Improve Your Skills",
    tasks: [
      "Practice aptitude questions",
      "Revise subject fundamentals",
      "Work on technical skills",
      "Prepare your project explanation",
    ],
  },
  {
    week: "WEEK 03",
    title: "Practice Interviews",
    tasks: [
      "Practice common HR questions",
      "Attend mock interviews",
      "Improve body language",
      "Practice group discussions",
    ],
  },
  {
    week: "WEEK 04",
    title: "Get Interview Ready",
    tasks: [
      "Research potential employers",
      "Prepare role-specific questions",
      "Review your resume thoroughly",
      "Practice a complete interview",
    ],
  },
];

const faqs = [
  {
    question: "Does the college provide placement assistance?",
    answer:
      "The placement and career guidance team helps students prepare for employment opportunities through career guidance, skill development and recruitment-related activities.",
  },
  {
    question: "How can students prepare for campus placements?",
    answer:
      "Students should focus on communication, aptitude, technical knowledge, resume preparation, projects and regular mock interview practice.",
  },
  {
    question: "Are students from all departments eligible?",
    answer:
      "Placement opportunities depend on the eligibility criteria and requirements of individual employers. Students should check the details shared for each opportunity.",
  },
  {
    question: "Does the college help students prepare for interviews?",
    answer:
      "Interview preparation can include resume guidance, mock interviews, communication practice and support in understanding recruitment processes.",
  },
  {
    question: "How can companies connect with the placement team?",
    answer:
      "Companies interested in recruitment and campus engagement can contact the college through its official contact or enquiry channels.",
  },
];

export default function PlacementsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <main className="ddp-page">
      {/* HERO SECTION */}
      <section className="ddp-hero">
        <div className="ddp-hero-overlay" />

        <div className="ddp-container ddp-hero-content">
          <span className="ddp-eyebrow">
            CAREER & PLACEMENT CELL
          </span>

          <h1>
            Your Future.
            <br />
            <span>Our Commitment.</span>
          </h1>

          <p>
            Discover opportunities, develop professional skills and take
            confident steps towards a successful career.
          </p>

          <div className="ddp-hero-actions">
            <Link href="/contact" className="ddp-btn ddp-btn-primary">
              Connect With Us <span>↗</span>
            </Link>

            <a href="#placement-process" className="ddp-btn ddp-btn-outline">
              Explore Placement Process <span>↓</span>
            </a>
          </div>

          <div className="ddp-hero-note">
            <span className="ddp-live-dot" />
            Building skills. Creating opportunities. Shaping careers.
          </div>
        </div>

        <div className="ddp-hero-bottom">
          <span>DD COLLEGE DEHRADUN</span>
          <span>CAREER DEVELOPMENT</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="ddp-section ddp-intro">
        <div className="ddp-container ddp-intro-grid">
          <div>
            <span className="ddp-section-label">OUR PLACEMENT APPROACH</span>
            <h2>
              Turning Education Into
              <span> Career Opportunities</span>
            </h2>
          </div>

          <div className="ddp-intro-content">
            <p>
              At DD College Dehradun, we believe that education is the
              foundation of a successful professional journey. Our career
              development approach focuses on helping students identify their
              strengths, improve their abilities and prepare for the
              professional world.
            </p>

            <p>
              Through career guidance, skill development and placement-related
              activities, we encourage students to move forward with confidence
              and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="ddp-support-section">
        <div className="ddp-container">
          <div className="ddp-section-heading">
            <span className="ddp-section-label">STUDENT DEVELOPMENT</span>
            <h2>More Than Just Placement</h2>
            <p>
              Helping students develop the skills and confidence needed for
              long-term professional growth.
            </p>
          </div>

          <div className="ddp-support-grid">
            <article className="ddp-support-card">
              <div className="ddp-support-icon">✦</div>
              <span className="ddp-card-number">01</span>
              <h3>Career Guidance</h3>
              <p>
                Understand career paths, explore opportunities and make
                informed professional decisions.
              </p>
            </article>

            <article className="ddp-support-card">
              <div className="ddp-support-icon">↗</div>
              <span className="ddp-card-number">02</span>
              <h3>Skill Development</h3>
              <p>
                Strengthen technical, communication and interpersonal skills
                through focused preparation.
              </p>
            </article>

            <article className="ddp-support-card">
              <div className="ddp-support-icon">◎</div>
              <span className="ddp-card-number">03</span>
              <h3>Interview Readiness</h3>
              <p>
                Prepare for recruitment rounds with interview practice,
                confidence-building and guidance.
              </p>
            </article>

            <article className="ddp-support-card">
              <div className="ddp-support-icon">◇</div>
              <span className="ddp-card-number">04</span>
              <h3>Industry Exposure</h3>
              <p>
                Understand workplace expectations and learn about evolving
                professional opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RECRUITER / COMPANY NAMES */}
      <section className="ddp-section ddp-companies">
        <div className="ddp-container">
          <div className="ddp-section-heading">
            <span className="ddp-section-label">CAREER OPPORTUNITIES</span>
            <h2>Organisations & Opportunities</h2>
            <p>
              Examples of organisations represented in the student placement
              information.
            </p>
          </div>

          <div className="ddp-company-grid">
            {companies.map((company, index) => (
              <div className="ddp-company-card" key={company}>
                <span className="ddp-company-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{company}</strong>
                <span className="ddp-company-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT PLACEMENTS */}
      <section className="ddp-section ddp-students">
        <div className="ddp-container">
          <div className="ddp-section-heading">
            <span className="ddp-section-label">STUDENT JOURNEYS</span>
            <h2>Celebrating Student Achievements</h2>
            <p>
              Recognising students and the career opportunities represented in
              our placement records.
            </p>
          </div>

          <div className="ddp-student-grid">
            {students.map((student, index) => (
              <article className="ddp-student-card" key={student.name}>
                <div className="ddp-student-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={student.image}
                    alt={`${student.name} placement`}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="ddp-student-year">{student.year}</span>
                </div>

                <div className="ddp-student-info">
                  <span className="ddp-student-number">
                    STUDENT {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{student.name}</h3>
                  <p>{student.course}</p>

                  <div className="ddp-student-company">
                    <span>Organisation</span>
                    <strong>{student.company}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEMENT PROCESS */}
      <section
        className="ddp-section ddp-process"
        id="placement-process"
      >
        <div className="ddp-container">
          <div className="ddp-section-heading">
            <span className="ddp-section-label">HOW IT WORKS</span>
            <h2>Your Journey Towards a Career</h2>
            <p>
              A structured approach to help students prepare for professional
              opportunities.
            </p>
          </div>

          <div className="ddp-process-grid">
            {placementSteps.map((step) => (
              <article className="ddp-process-card" key={step.number}>
                <span className="ddp-process-number">{step.number}</span>
                <div className="ddp-process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEW PREPARATION */}
      <section className="ddp-section ddp-preparation">
        <div className="ddp-container">
          <div className="ddp-preparation-heading">
            <div>
              <span className="ddp-section-label">BE PREPARED</span>
              <h2>Prepare Today. Perform Tomorrow.</h2>
            </div>

            <p>
              A successful interview starts with preparation. Build your
              confidence with these important areas.
            </p>
          </div>

          <div className="ddp-preparation-grid">
            {preparationCards.map((card) => (
              <article className="ddp-preparation-card" key={card.icon}>
                <span className="ddp-preparation-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="ddp-preparation-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEW QUESTIONS */}
      <section className="ddp-section ddp-questions">
        <div className="ddp-container">
          <div className="ddp-section-heading">
            <span className="ddp-section-label">PRACTICE CORNER</span>
            <h2>Common Interview Questions</h2>
            <p>
              Start preparing with these commonly asked interview questions
              and useful answer guidelines.
            </p>
          </div>

          <div className="ddp-question-grid">
            {interviewQuestions.map((item, index) => (
              <article className="ddp-question-card" key={item.question}>
                <div className="ddp-question-top">
                  <span>QUESTION {String(index + 1).padStart(2, "0")}</span>
                  <span className="ddp-question-category">
                    {item.category}
                  </span>
                </div>

                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR WEEK ROADMAP */}
      <section className="ddp-section ddp-roadmap">
        <div className="ddp-container">
          <div className="ddp-section-heading">
            <span className="ddp-section-label">YOUR ACTION PLAN</span>
            <h2>A 4-Week Career Preparation Roadmap</h2>
            <p>
              Follow a consistent preparation routine to become more confident
              and interview-ready.
            </p>
          </div>

          <div className="ddp-roadmap-grid">
            {roadmap.map((item, index) => (
              <article className="ddp-roadmap-card" key={item.week}>
                <span className="ddp-roadmap-week">{item.week}</span>
                <h3>{item.title}</h3>

                <ul>
                  {item.tasks.map((task) => (
                    <li key={task}>
                      <span>✓</span>
                      {task}
                    </li>
                  ))}
                </ul>

                <span className="ddp-roadmap-count">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ddp-section ddp-faq">
        <div className="ddp-container ddp-faq-grid">
          <div className="ddp-faq-intro">
            <span className="ddp-section-label">HAVE QUESTIONS?</span>
            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>
            <p>
              Find answers to common questions about placement preparation,
              career guidance and recruitment activities.
            </p>

            <Link href="/contact" className="ddp-faq-contact">
              Ask Us a Question <span>↗</span>
            </Link>
          </div>

          <div className="ddp-faq-list">
            {faqs.map((faq, index) => (
              <article
                className={`ddp-faq-item ${
                  activeFaq === index ? "active" : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="ddp-faq-question"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="ddp-faq-toggle">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>

                {activeFaq === index && (
                  <div className="ddp-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  );
}
