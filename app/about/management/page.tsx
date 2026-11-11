
import Image from "next/image";
import "./management.css";

const managementMembers = [
  {
    name: "Governing Body",
    designation: "Institutional Governance",
    image: "/images/management/governing-body.jpg",
    description:
      "Provides institutional oversight, supports policy decisions and guides the long-term development of the college.",
  },
  {
    name: "Director",
    designation: "Institutional Administration",
    image: "/images/management/director.jpg",
    description:
      "Supports institutional planning, coordination and the effective implementation of college initiatives.",
  },
  {
    name: "Registrar",
    designation: "Academic Administration",
    image: "/images/management/registrar.jpg",
    description:
      "Coordinates administrative records, official documentation and institutional processes.",
  },
  {
    name: "Academic Coordinator",
    designation: "Academic Coordination",
    image: "/images/management/academic-coordinator.jpg",
    description:
      "Supports academic planning, coordination of learning activities and communication between departments.",
  },
  {
    name: "Administrative Officer",
    designation: "Administration & Operations",
    image: "/images/management/administrative-officer.jpg",
    description:
      "Helps coordinate daily administrative activities and supports the smooth functioning of the campus.",
  },
  {
    name: "Student Welfare Team",
    designation: "Student Support",
    image: "/images/management/student-welfare.jpg",
    description:
      "Supports student welfare initiatives, campus engagement and a positive learning environment.",
  },
];

export default function ManagementPage() {
  return (
    <main className="management-page">
  
      {/* MANAGEMENT MEMBERS */}
      <section className="management-team-section">
        <div className="management-section-heading">
          <div className="management-intro-label">
            <span className="management-small-line" />
            <span>MANAGEMENT &amp; ADMINISTRATION</span>
          </div>

       

          <p>
            Different responsibilities, one shared commitment
            to the smooth functioning and continued development
            of our institution.
          </p>
        </div>

        <div className="management-grid">
          {managementMembers.map((member) => (
            <article
              className="management-card"
              key={member.designation}
            >
              <div className="management-card-image">
                <Image
                  src={member.image}
                  alt={member.designation}
                  width={500}
                  height={420}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="management-image"
                />
              </div>

              <div className="management-card-content">
                <span className="management-card-role">
                  {member.designation}
                </span>

                <h3>{member.name}</h3>

                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="management-commitment">
        <div className="management-commitment-content">
          <span>ONE INSTITUTION, ONE VISION</span>

          <h2>
            Collaboration Builds
            <br />
            <strong>A Stronger Future.</strong>
          </h2>

          <p>
            Through coordinated efforts, responsible administration
            and student-focused initiatives, our college community
            works together to support learning, growth and
            institutional progress.
          </p>
        </div>

        <div
          className="management-commitment-mark"
          aria-hidden="true"
        >
          DD
        </div>
      </section>
    </main>
  );
}
