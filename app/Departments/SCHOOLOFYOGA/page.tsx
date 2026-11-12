
import Link from "next/link";
import {
  Heart,
  Brain,
  Activity,
  Leaf,
  Flower2,
  Sun,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import "./yoga.css";

const benefits = [
  {
    icon: Heart,
    title: "Physical Wellness",
    description:
      "Improve flexibility, strength, posture and physical fitness through regular yoga practice.",
  },
  {
    icon: Brain,
    title: "Mental Well-being",
    description:
      "Develop concentration, mental clarity and emotional balance through meditation.",
  },
  {
    icon: Activity,
    title: "Healthy Lifestyle",
    description:
      "Learn the importance of discipline, healthy habits and a balanced lifestyle.",
  },
  {
    icon: Leaf,
    title: "Inner Awareness",
    description:
      "Explore traditional yoga practices that encourage self-awareness and personal growth.",
  },
];

const activities = [
  "Daily yoga practice and guided sessions",
  "Pranayama and breathing exercises",
  "Meditation and mindfulness workshops",
  "Yoga awareness programmes",
  "Health and wellness activities",
  "International Yoga Day celebrations",
];

const careers = [
  "Yoga Instructor",
  "Yoga Trainer",
  "Wellness Consultant",
  "Yoga Therapist (with relevant qualification)",
  "Fitness and Wellness Coach",
  "Yoga Centre Coordinator",
];

export default function SchoolOfYogaPage() {
  return (
    <main className="yoga-page">
      <section className="yoga-hero">
        <div className="yoga-hero-overlay" />

        <div className="yoga-container yoga-hero-content">
          <span className="yoga-eyebrow">
            DD COLLEGE | SCHOOL OF YOGA
          </span>

          <h1>
            SCHOOL OF <span>YOGA</span>
          </h1>

          <p>
            Discover the harmony of mind, body and soul through
            the timeless practice of yoga, meditation and wellness.
          </p>

          <div className="yoga-hero-buttons">
            <Link
              href="/contact?course=Yoga#contact-form"
              className="yoga-btn yoga-btn-primary"
            >
              Admission Enquiry <ArrowUpRight size={18} />
            </Link>

            <a href="#about-yoga" className="yoga-btn yoga-btn-outline">
              Explore More <ArrowRight size={18} />
            </a>
          </div>

          <div className="yoga-hero-note">
            <Sun size={19} />
            <span>LEARN • PRACTICE • TRANSFORM</span>
          </div>
        </div>
      </section>

      <div className="yoga-breadcrumb">
        <div className="yoga-container">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Departments</span>
          <span>/</span>
          <strong>School of Yoga</strong>
        </div>
      </div>

      <section className="yoga-section" id="about-yoga">
        <div className="yoga-container yoga-about-grid">
          <div className="yoga-about-image">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=85"
              alt="Yoga practice"
            />

            <div className="yoga-image-label">
              <Flower2 size={26} />
              <div>
                <strong>Mind & Body</strong>
                <span>Balanced Living</span>
              </div>
            </div>
          </div>

          <div className="yoga-about-content">
            <span className="yoga-section-label">ABOUT THE SCHOOL</span>

            <h2>
              The Art of Living Through <span>Yoga</span>
            </h2>

            <p>
              Yoga is an ancient discipline that brings together physical
              movement, breathing techniques, meditation and self-awareness.
              It promotes a balanced approach to physical, mental and
              emotional well-being.
            </p>

            <p>
              The School of Yoga at DD College aims to encourage students
              to understand yoga as a way of life, develop healthy habits
              and explore traditional practices in a supportive learning
              environment.
            </p>

            <div className="yoga-about-points">
              <div><CheckCircle2 /> Holistic learning approach</div>
              <div><CheckCircle2 /> Practical yoga sessions</div>
              <div><CheckCircle2 /> Focus on health and wellness</div>
              <div><CheckCircle2 /> Personal development</div>
            </div>

            <Link
              href="/contact?course=Yoga#contact-form"
              className="yoga-text-link"
            >
              Enquire About Admission <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="yoga-section yoga-benefits">
        <div className="yoga-container">
          <div className="yoga-section-heading">
            <span className="yoga-section-label">WHY YOGA?</span>
            <h2>
              Benefits of <span>Practising Yoga</span>
            </h2>
            <p>
              Yoga supports a healthier lifestyle by developing strength,
              awareness and balance.
            </p>
          </div>

          <div className="yoga-benefit-grid">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="yoga-benefit-card" key={item.title}>
                  <div className="yoga-benefit-icon">
                    <Icon size={29} />
                  </div>

                  <span className="yoga-card-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="yoga-section">
        <div className="yoga-container yoga-programme-grid">
          <div>
            <span className="yoga-section-label">LEARNING EXPERIENCE</span>

            <h2>
              Learn Yoga Through <span>Practice</span>
            </h2>

            <p>
              Students can explore different aspects of yoga through guided
              practice, demonstrations and wellness activities.
            </p>

            <div className="yoga-activity-list">
              {activities.map((activity) => (
                <div key={activity}>
                  <CheckCircle2 size={19} />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="yoga-programme-image">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000&q=85"
              alt="Meditation and yoga"
            />
          </div>
        </div>
      </section>

      <section className="yoga-section yoga-careers">
        <div className="yoga-container">
          <div className="yoga-section-heading">
            <span className="yoga-section-label">FUTURE OPPORTUNITIES</span>

            <h2>
              Explore Careers in <span>Yoga & Wellness</span>
            </h2>

            <p>
              With suitable training and recognised qualifications,
              students may explore opportunities in the wellness sector.
            </p>
          </div>

          <div className="yoga-career-grid">
            {careers.map((career) => (
              <div className="yoga-career-item" key={career}>
                <Flower2 size={21} />
                <strong>{career}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="yoga-cta">
        <div className="yoga-container yoga-cta-content">
          <div>
            <span>BEGIN YOUR JOURNEY</span>
            <h2>Make Wellness a Way of Life</h2>
            <p>
              Connect with DD College to learn more about yoga-related
              learning opportunities and admission information.
            </p>
          </div>

          <Link
            href="/contact?course=Yoga#contact-form"
            className="yoga-btn yoga-btn-primary"
          >
            Admission Enquiry <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
