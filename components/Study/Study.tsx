
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  Laptop,
  Microscope,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";
import "./study.css";

const courses = [
  {
    number: "01",
    title: "Computer Science & Engineering",
    description:
      "Explore technology, programming, software development and the digital world.",
    icon: Laptop,
    tag: "Technology",
  },
  {
    number: "02",
    title: "Computer Applications",
    description:
      "Build a strong foundation in computing, applications and modern technologies.",
    icon: Microscope,
    tag: "Technology",
  },
  {
    number: "03",
    title: "Management Studies",
    description:
      "Develop leadership, communication and business management skills.",
    icon: BriefcaseBusiness,
    tag: "Management",
  },
  {
    number: "04",
    title: "Commerce",
    description:
      "Understand accounting, finance, business and the world of commerce.",
    icon: Building2,
    tag: "Business",
  },
  {
    number: "05",
    title: "Science",
    description:
      "Discover scientific concepts through academic and practical learning.",
    icon: Lightbulb,
    tag: "Science",
  },
  {
    number: "06",
    title: "Humanities",
    description:
      "Explore society, culture, communication and human understanding.",
    icon: BookOpen,
    tag: "Humanities",
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "A supportive academic environment focused on knowledge and learning.",
  },
  {
    icon: Laptop,
    title: "Practical Learning",
    description:
      "Opportunities to connect classroom knowledge with practical experience.",
  },
  {
    icon: Users,
    title: "Student Development",
    description:
      "Activities and opportunities that encourage confidence and teamwork.",
  },
  {
    icon: Award,
    title: "Career Preparation",
    description:
      "Guidance and skill development to help students prepare for future goals.",
  },
];

export default function StudySection() {
  return (
    <section className="dd-study-home">



      {/* LEARNING EXPERIENCE */}
      <div className="dd-study-experience">
        <div className="dd-study-container">
          <div className="dd-study-experience-heading">
            <span className="dd-study-label">
              <span className="dd-study-label-line" />
              THE DD COLLEGE EXPERIENCE
            </span>

            <h2>
              Learn. Participate. <span>Achieve.</span>
            </h2>

            <p>
              Make your college journey meaningful with opportunities
              to learn, discover and grow.
            </p>
          </div>

          <div className="dd-study-experience-grid">
            <div className="dd-study-experience-card">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=850&q=85"
                alt="Classroom learning"
              />
              <div className="dd-study-experience-card-content">
                <span>01 / LEARNING</span>
                <h3>Academic Excellence</h3>
                <p>
                  Build your understanding through structured academic
                  learning.
                </p>
              </div>
            </div>

            <div className="dd-study-experience-card">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=850&q=85"
                alt="College library"
              />
              <div className="dd-study-experience-card-content">
                <span>02 / KNOWLEDGE</span>
                <h3>Explore & Discover</h3>
                <p>
                  Develop curiosity and independent learning habits.
                </p>
              </div>
            </div>

            <div className="dd-study-experience-card">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=850&q=85"
                alt="Students participating in campus activities"
              />
              <div className="dd-study-experience-card-content">
                <span>03 / PARTICIPATION</span>
                <h3>Campus Activities</h3>
                <p>
                  Take part in activities that encourage teamwork and
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
