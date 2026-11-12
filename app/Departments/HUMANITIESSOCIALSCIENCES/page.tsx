
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Globe,
  Landmark,
  Users,
  Scale,
  GraduationCap,
  BriefcaseBusiness,
  MessageCircle,
  HeartHandshake,
  Library,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

import "./humanities.css";

const subjects = [
  {
    icon: Landmark,
    title: "History",
    description:
      "Understand historical events, civilizations, cultures and the developments that have shaped our world.",
  },
  {
    icon: Scale,
    title: "Political Science",
    description:
      "Explore political systems, governance, democracy, public administration and constitutional values.",
  },
  {
    icon: Users,
    title: "Sociology",
    description:
      "Study society, social institutions, communities, relationships and changing social structures.",
  },
  {
    icon: Brain,
    title: "Psychology",
    description:
      "Discover human behaviour, mental processes, emotions and the factors that influence individual development.",
  },
  {
    icon: BookOpen,
    title: "Literature",
    description:
      "Explore language, literary works, creative expression and different cultural perspectives.",
  },
  {
    icon: Globe,
    title: "Social Development",
    description:
      "Understand social challenges, community development, equality and sustainable progress.",
  },
];

const learningPoints = [
  "Critical and analytical thinking",
  "Communication and presentation skills",
  "Understanding society and culture",
  "Research and interpretation",
  "Problem-solving and decision-making",
  "Ethical and responsible citizenship",
];

const careerOptions = [
  "Teaching and Education",
  "Civil Services",
  "Social Work",
  "Research and Analysis",
  "Public Administration",
  "Media and Communication",
  "Human Resources",
  "Community Development",
];

export default function HumanitiesSocialSciencesPage() {
  return (
    <main className="hss-page">
      {/* HERO SECTION */}
      <section className="hss-hero">
        <div className="hss-container">
          <div className="hss-hero-content">
            <span className="hss-eyebrow">
              DD College · Academic Department
            </span>

            <h1>
              Department of <span>Humanities & Social Sciences</span>
            </h1>

            <p>
              Explore human experiences, society, culture, history and ideas.
              Develop critical thinking, social awareness and a deeper
              understanding of the world around you.
            </p>

            <div className="hss-hero-actions">
              <Link
                href="/contact?course=Humanities%20%26%20Social%20Sciences#contact-form"
                className="hss-btn hss-btn-primary"
              >
                Admission Enquiry <ArrowUpRight size={18} />
              </Link>

              <a href="#about-hss" className="hss-btn hss-btn-outline">
                Explore Department <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="hss-breadcrumb">
        <div className="hss-container">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Departments</span>
          <span>/</span>
          <strong>Humanities & Social Sciences</strong>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="hss-section" id="about-hss">
        <div className="hss-container hss-about-grid">
          <div className="hss-about-image">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1100&q=85"
              alt="Books and learning resources for humanities"
            />

            <div className="hss-image-label">
              Think · Understand · Transform
            </div>
          </div>

          <div className="hss-about-content">
            <span className="hss-kicker">About the Department</span>

            <h2>
              Understanding People, Society and the World
            </h2>

            <p>
              The Department of Humanities & Social Sciences focuses on
              understanding human behaviour, social relationships, history,
              culture, institutions and ideas that shape society.
            </p>

            <p>
              Through interdisciplinary learning, discussion, reading and
              research-oriented activities, students are encouraged to develop
              independent thinking, social responsibility and a broader
              perspective on contemporary issues.
            </p>

            <div className="hss-check-list">
              {[
                "Interdisciplinary learning and exploration",
                "Understanding social and cultural diversity",
                "Critical thinking and research orientation",
                "Awareness of contemporary social issues",
              ].map((item) => (
                <div className="hss-check-item" key={item}>
                  <CheckCircle2 size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECT AREAS */}
      <section className="hss-section hss-section-light">
        <div className="hss-container">
          <div className="hss-section-heading">
            <span className="hss-kicker">Areas of Learning</span>
            <h2>Explore Different Fields of Knowledge</h2>
            <p>
              Humanities and social sciences bring together different
              disciplines to help students understand individuals, communities
              and the wider world.
            </p>
          </div>

          <div className="hss-subject-grid">
            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <article className="hss-subject-card" key={subject.title}>
                  <div className="hss-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{subject.title}</h3>

                  <p>{subject.description}</p>

                  <span className="hss-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="hss-section">
        <div className="hss-container hss-learning-grid">
          <div className="hss-learning-content">
            <span className="hss-kicker">Our Learning Approach</span>

            <h2>
              Education That Develops Perspective and Purpose
            </h2>

            <p>
              Learning in humanities and social sciences goes beyond
              textbooks. It encourages students to question, analyse,
              communicate and understand different perspectives.
            </p>

            <div className="hss-learning-list">
              {learningPoints.map((point) => (
                <div className="hss-learning-item" key={point}>
                  <CheckCircle2 size={19} />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="hss-learning-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=85"
              alt="Students collaborating in an academic discussion"
            />
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="hss-section hss-section-light">
        <div className="hss-container">
          <div className="hss-section-heading">
            <span className="hss-kicker">Beyond the Classroom</span>
            <h2>Learning Through Ideas and Experiences</h2>
            <p>
              Academic and co-curricular activities can help students connect
              theoretical knowledge with real-world experiences.
            </p>
          </div>

          <div className="hss-activity-grid">
            <article className="hss-activity-card">
              <div className="hss-activity-icon">
                <MessageCircle size={26} />
              </div>
              <h3>Group Discussions</h3>
              <p>
                Exchange ideas, listen to different viewpoints and develop
                confidence in expressing opinions.
              </p>
            </article>

            <article className="hss-activity-card">
              <div className="hss-activity-icon">
                <Library size={26} />
              </div>
              <h3>Reading & Research</h3>
              <p>
                Develop reading habits, explore academic resources and
                strengthen research and interpretation skills.
              </p>
            </article>

            <article className="hss-activity-card">
              <div className="hss-activity-icon">
                <HeartHandshake size={26} />
              </div>
              <h3>Community Awareness</h3>
              <p>
                Understand social concerns, community needs and the importance
                of responsible citizenship.
              </p>
            </article>

            <article className="hss-activity-card">
              <div className="hss-activity-icon">
                <Lightbulb size={26} />
              </div>
              <h3>Seminars & Presentations</h3>
              <p>
                Explore important topics and improve communication,
                presentation and analytical abilities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="hss-section">
        <div className="hss-container">
          <div className="hss-section-heading">
            <span className="hss-kicker">Career Opportunities</span>
            <h2>Build a Foundation for Diverse Career Paths</h2>
            <p>
              Knowledge of humanities and social sciences can support further
              study and career exploration across education, public service,
              research and social development. Career eligibility depends on
              the relevant qualifications and experience.
            </p>
          </div>

          <div className="hss-career-grid">
            {careerOptions.map((career) => (
              <div className="hss-career-item" key={career}>
                <BriefcaseBusiness size={20} />
                <span>{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="hss-values-section">
        <div className="hss-container hss-values-content">
          <div>
            <span className="hss-eyebrow">Our Vision</span>

            <h2>
              Creating Thoughtful, Aware and Responsible Individuals
            </h2>

            <p>
              We encourage learners to appreciate diversity, respect different
              perspectives and contribute positively to society through
              knowledge, understanding and responsible action.
            </p>
          </div>

          <div className="hss-values-icon">
            <GraduationCap size={76} strokeWidth={1.3} />
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <section className="hss-cta">
        <div className="hss-container">
          <GraduationCap size={42} />

          <h2>Begin Your Learning Journey at DD College</h2>

          <p>
            Interested in humanities and social sciences? Contact our team to
            learn more about available programmes, eligibility and admission
            details.
          </p>

          <Link
            href="/contact?course=Humanities%20%26%20Social%20Sciences#contact-form"
            className="hss-btn hss-btn-primary"
          >
            Enquire for Admission <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
