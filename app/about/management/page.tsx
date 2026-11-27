import Image from "next/image";
import "./management.css";

const managementMembers = [
  // {
  //   name: "Ms. Parul Goel",
  //   designation: "HOD (Commerce and Management)",
  //   image: "/gallery/Parul.png",
  //   description:
  //     "Provides institutional oversight, supports policy decisions and guides the long-term development of the college.",
  // },
  
// {
//   name: "Dr. Divyanshi Dubey",
//   designation: "Principal (Faculty of Law)",
//   image: "/gallery/div.png",
//   description:
//     "Provides academic leadership and strategic guidance to the Faculty of Law, promoting legal education, professional ethics, practical learning and the overall development of future legal professionals.",
// },

  {
    name: "Dr. Divyanshi Dubey",
    designation: "HOD (Department of Arts)",
    image: "/gallery/div.png",
    description:
      "Supports institutional planning, coordination and the effective implementation of college initiatives.",
  },
  {
    name: "Dr. Prerna Negi",
    designation: "HOD (Agriculture)",
    image: "/gallery/PRENA.png",
    description:
      "Supports academic planning, coordination of learning activities and communication between departments.",
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
              key={member.name}
            >
              <div className="management-card-image">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={420}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="management-image"
                  priority={false}
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