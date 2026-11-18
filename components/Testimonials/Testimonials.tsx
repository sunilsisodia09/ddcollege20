
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Quote,
  Star,
  MessageCircle,
  Sparkles,
  Users,
  Heart,
} from "lucide-react";

import "./Testimonials.css";

const testimonials = [
  {
    name: "Aarushi Sharma",
    course: "Bachelor of Computer Applications",
    shortCourse: "BCA",
    year: "2025",
    initials: "AS",
    color: "green",
    review:
      "My journey at D.D. College has been truly wonderful. The teachers are supportive, the learning environment is positive, and I have gained confidence in both academics and practical skills.",
  },
  {
    name: "Rahul Kumar",
    course: "Bachelor of Business Administration",
    shortCourse: "BBA",
    year: "2025",
    initials: "RK",
    color: "orange",
    review:
      "D.D. College helped me develop my communication and leadership skills. The activities, presentations, and practical learning opportunities made my college experience memorable.",
  },
  {
    name: "Priya Verma",
    course: "Bachelor of Commerce",
    shortCourse: "B.Com",
    year: "2024",
    initials: "PV",
    color: "purple",
    review:
      "The faculty members always encouraged me to do better. I am grateful for the guidance, friendly atmosphere, and opportunities I received throughout my college life.",
  },
  {
    name: "Ankit Rawat",
    course: "Bachelor of Science",
    shortCourse: "B.Sc",
    year: "2025",
    initials: "AR",
    color: "blue",
    review:
      "I have had a great learning experience at D.D. College. The academic support and practical exposure helped me improve my knowledge and prepare for future opportunities.",
  },
  {
    name: "Neha Singh",
    course: "Bachelor of Arts",
    shortCourse: "B.A.",
    year: "2024",
    initials: "NS",
    color: "pink",
    review:
      "College life here has helped me grow as a person. I appreciate the teachers, campus environment, and the different activities that encouraged me to explore my interests.",
  },
  {
    name: "Vikas Chauhan",
    course: "Master of Business Administration",
    shortCourse: "MBA",
    year: "2025",
    initials: "VC",
    color: "teal",
    review:
      "The learning environment at D.D. College has been very encouraging. The faculty guided us with practical knowledge and helped us build skills for our professional journey.",
  },
];

const stats = [
  { number: "5000+", label: "Students Guided" },
  { number: "50+", label: "Academic Programs" },
  { number: "20+", label: "Years of Excellence" },
];

export default function TestimonialsPage() {
  return (
    <main className="dd-testimonials">
      {/* HERO SECTION */}
      <section className="dd-testimonial-hero">
        <div className="dd-testimonial-hero-overlay" />

        <div className="dd-testimonial-hero-content">
          <div className="dd-testimonial-hero-tag">
            <Sparkles size={15} />
            <span>STUDENT EXPERIENCES</span>
          </div>

          <h1>
            Stories That
            <span> Inspire Us</span>
          </h1>

          <p>
            Every student has a story. Discover the experiences, achievements,
            and memories that make D.D. College special.
          </p>

          <div className="dd-testimonial-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Testimonials</span>
          </div>
        </div>

        <div className="dd-testimonial-hero-bottom">
          <span>REAL STORIES. REAL EXPERIENCES.</span>
          <span className="dd-testimonial-scroll">
            SCROLL TO EXPLORE <ArrowRight size={15} />
          </span>
        </div>
      </section>


    

      {/* TESTIMONIAL CARDS */}
      <section className="dd-testimonial-grid-section">
        <div className="dd-testimonial-section-heading">
          <div>
            <span className="dd-testimonial-eyebrow">
              <span /> STUDENT VOICES
            </span>
            <h2>
              Hear It From <span>Our Students</span>
            </h2>
          </div>

          <p>
            Experiences that reflect our commitment to learning, growth, and
            student success.
          </p>
        </div>

        <div className="dd-testimonial-grid">
          {testimonials.map((item, index) => (
            <article className="dd-testimonial-card" key={item.name}>
              <div className="dd-testimonial-card-top">
                <span className="dd-testimonial-number">
                  0{index + 1}
                </span>
                <Quote className="dd-testimonial-quote-icon" size={38} />
              </div>

              <div
                className="dd-testimonial-stars"
                aria-label="Five out of five stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="dd-testimonial-review">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="dd-testimonial-card-divider" />

              <div className="dd-testimonial-student">
                <div
                  className={`dd-testimonial-avatar ${item.color}`}
                  aria-hidden="true"
                >
                  {item.initials}
                </div>

                <div className="dd-testimonial-student-info">
                  <h3>{item.name}</h3>
                  <p>{item.course}</p>
                  <span>Batch of {item.year}</span>
                </div>

                <div className="dd-testimonial-course-badge">
                  {item.shortCourse}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

   

    
    </main>
  );
}
