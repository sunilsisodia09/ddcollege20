
import Image from "next/image";
import "./chairman-message.css";

export default function ChairmanMessagePage() {
  return (
    <main className="dd-chairman-page">
      {/* HERO BANNER */}
      <section className="dd-chairman-hero">
        <Image
          src="/campus/dd.png"
          alt="D.D. College campus"
          fill
          priority
          sizes="100vw"
          className="dd-chairman-hero-image"
        />

        <div className="dd-chairman-hero-overlay" />

        <div className="dd-chairman-hero-content">
          <span className="dd-chairman-hero-eyebrow">
            D.D. COLLEGE, DEHRADUN
          </span>

          <h1>Chairman&apos;s Message</h1>

          <div className="dd-chairman-hero-divider">
            <span />
          </div>

          <p>
            Guided by Values | Driven by Vision | Committed to Excellence
          </p>
        </div>
      </section>

      {/* CHAIRMAN MESSAGE SECTION */}
      <section className="dd-chairman-section">
        <div className="dd-chairman-content">
          <div className="dd-chairman-eyebrow">
            <span>ABOUT US</span>
            <span className="dd-chairman-eyebrow-line" />
          </div>

          <h2 className="dd-chairman-content-title">
            A Message from Our Chairman
          </h2>

          <p className="dd-chairman-tagline">
            Guided by Values <span>|</span> Driven by Vision{" "}
            <span>|</span> Committed to Excellence
          </p>

          <div className="dd-chairman-message-text">
            <p>Beyond textbooks. Beyond classrooms. ,</p>

            <p>
              At D.D. College, the vision is to build an educational environment where learning goes well 
beyond textbooks and classrooms. The aim is to nurture students into confident, skilled and 
responsible individuals, ready to face real-world challenges with clarity and purpose. 
            </p>

            <p>
     Education, as the college sees it, must be accessible, practical and value-driven. Academic 
excellence stands alongside skill development, personality enhancement and ethical grounding, 
because a degree alone does not prepare a person for life. The goal is graduates who are not only 
career-ready but life-ready. 
            </p>

            <p>
              We strive to equip our students with the knowledge, skills,
              confidence and values required to meet the challenges of a
              rapidly changing world. Along with academic development, we
              encourage discipline, teamwork, social responsibility and
              respect for others.
            </p>

            <p>
              I extend my sincere gratitude to our dedicated faculty,
              supportive parents, students and well-wishers for their
              continued trust and contribution. Together, we can create
              meaningful opportunities and build a brighter future for
              our students and society.
            </p>

            <p className="dd-chairman-wishes">
              With best wishes,
            </p>
          </div>

          <div className="dd-chairman-signature">
            <span className="dd-chairman-signature-mark">
              With regards,
            </span>

            <h3>Chairman</h3>
            <p>D.D. College, Dehradun</p>
          </div>
        </div>

        {/* CHAIRMAN PROFILE */}
        <aside className="dd-chairman-profile">
          <div className="dd-chairman-image-frame">
            <Image
             src="/gallery/chairmansira.png"
              alt="Chairman of D.D. College, Dehradun"
              width={650}
              height={820}
              priority
              className="dd-chairman-profile-image"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>

          <div className="dd-chairman-profile-card">
            <span className="dd-chairman-profile-accent" />

            <div className="dd-chairman-profile-details">
              <h3>Chairman</h3>
              <p>Leadership &amp; Vision</p>
              <span>D.D. College, Dehradun</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
