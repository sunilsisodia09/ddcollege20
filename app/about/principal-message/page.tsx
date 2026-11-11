
import Image from "next/image";
import "./principal-message.css";

export default function PrincipalMessagePage() {
  return (
    <main className="dd-principal-page">
      {/* HERO BANNER */}
      <section className="dd-principal-hero">
        <Image
        src="/campus/dd.png"
          alt="D.D. College campus"
          fill
          priority
          sizes="100vw"
          className="dd-principal-hero-image"
        />

        <div className="dd-principal-hero-overlay" />

        <div className="dd-principal-hero-content">
          <span className="dd-principal-hero-eyebrow">
            D.D. COLLEGE, DEHRADUN
          </span>

          <h1>Principal&apos;s Message</h1>

          <div className="dd-principal-hero-divider">
            <span />
          </div>

          <p>
            Inspiring Minds | Empowering Futures | Excellence in Education
          </p>
        </div>
      </section>

      {/* PRINCIPAL MESSAGE SECTION */}
      <section className="dd-principal-section">
        <div className="dd-principal-content">
          <div className="dd-principal-eyebrow">
            <span>ACADEMIC LEADERSHIP</span>
            <span className="dd-principal-eyebrow-line" />
          </div>

          <h2 className="dd-principal-content-title">
            A Message from Our Principal
          </h2>

          <p className="dd-principal-tagline">
            Inspiring Minds <span>|</span> Empowering Futures{" "}
            <span>|</span> Excellence in Education
          </p>

          <div className="dd-principal-message-text">
            <p>Dear Students, Parents and Well-Wishers,</p>

            <p>
              It is my pleasure to welcome you to D.D. College, Dehradun.
              Education is a continuous journey of discovery, growth and
              transformation. At our institution, we aim to provide an
              environment where students can develop their knowledge,
              talents, confidence and character.
            </p>

            <p>
              We believe that true education goes beyond textbooks and
              examinations. It encourages curiosity, critical thinking,
              creativity and the ability to apply knowledge in real-life
              situations. Our focus is on creating meaningful learning
              experiences that prepare students for the opportunities and
              challenges of the modern world.
            </p>

            <p>
              Our dedicated faculty members work to support students in
              their academic and personal development. We encourage
              discipline, integrity, teamwork, respect and social
              responsibility so that our students grow into capable
              professionals and responsible citizens.
            </p>

            <p>
              At D.D. College, we value the partnership between students,
              parents and educators. Together, we strive to build a
              positive learning community that promotes excellence,
              innovation and lifelong learning.
            </p>

            <p>
              I encourage every student to remain curious, work
              consistently towards their goals and make the most of the
              opportunities available to them. Your dedication and
              perseverance will help shape a bright and successful future.
            </p>

            <p className="dd-principal-wishes">
              I wish all our students success in their academic journey
              and future endeavours.
            </p>
          </div>

          {/* PRINCIPAL SIGNATURE */}
          <div className="dd-principal-signature">
            <span className="dd-principal-signature-mark">
              With best wishes,
            </span>

            <h3>Principal</h3>
            <p>D.D. College, Dehradun</p>
          </div>
        </div>

        {/* PRINCIPAL PROFILE */}
        <aside className="dd-principal-profile">
          <div className="dd-principal-image-frame">
            <Image
              src="/images/principal.jpg"
              alt="Principal of D.D. College, Dehradun"
              width={650}
              height={820}
              priority
              className="dd-principal-profile-image"
              sizes="(max-width: 768px) 100vw, 38vw"
            />
          </div>

          <div className="dd-principal-profile-card">
            <span className="dd-principal-profile-accent" />

            <div className="dd-principal-profile-details">
              <h3>Principal</h3>
              <p>Academic Leadership</p>
              <span>D.D. College, Dehradun</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
