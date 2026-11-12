
import Link from "next/link";
import styles from "./events.module.css";

const events = [
  {
    category: "CULTURAL",
    title: "Freshers Party",
    date: "NEW BEGINNINGS",
    description:
      "Welcome to the DD College family! A memorable celebration for our new students with music, dance, performances and fun activities.",
    image: "/events/freshers.jpg",
    number: "01",
  },
  {
    category: "SPORTS",
    title: "Annual Sports Meet",
    date: "SPORTS & FITNESS",
    description:
      "A celebration of sportsmanship, teamwork and determination with exciting competitions and athletic events.",
    image: "/events/sports.jpg",
    number: "02",
  },
  {
    category: "WELLNESS",
    title: "International Yoga Day",
    date: "HEALTH & WELLNESS",
    description:
      "Promoting a healthy lifestyle through yoga sessions, meditation and wellness activities for students and faculty.",
    image: "/events/yoga.jpg",
    number: "03",
  },
  {
    category: "CULTURAL",
    title: "Cultural Fest",
    date: "TALENT & CREATIVITY",
    description:
      "Experience the spirit of creativity through music, dance, art, theatre and amazing student performances.",
    image: "/events/cultural.jpg",
    number: "04",
  },
  {
    category: "CELEBRATION",
    title: "Annual Function",
    date: "CELEBRATING ACHIEVEMENTS",
    description:
      "A special celebration recognizing student achievements, talent, hard work and memorable college moments.",
    image: "/events/annual.jpg",
    number: "05",
  },
  {
    category: "NATIONAL",
    title: "Independence Day",
    date: "UNITY & PATRIOTISM",
    description:
      "Celebrating the spirit of freedom with flag hoisting, cultural performances and patriotic activities.",
    image: "/events/independence.jpg",
    number: "06",
  },
  {
    category: "EDUCATION",
    title: "Seminars & Workshops",
    date: "LEARN & GROW",
    description:
      "Interactive sessions, expert talks and practical workshops that help students build knowledge and skills.",
    image: "/events/workshop.jpg",
    number: "07",
  },
  {
    category: "COMMUNITY",
    title: "Social Activities",
    date: "GIVING BACK",
    description:
      "Student participation in awareness campaigns, environmental initiatives and community development activities.",
    image: "/events/social.jpg",
    number: "08",
  },
];

export default function EventsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>LIFE AT DD COLLEGE</span>
          <h1>
            Events & <span>Celebrations</span>
          </h1>
          <p>
            Beyond classrooms, discover experiences, friendships,
            achievements and unforgettable memories.
          </p>
          <Link href="#all-events" className={styles.heroButton}>
            EXPLORE EVENTS <span>↗</span>
          </Link>
        </div>
        <div className={styles.heroBottom}>LEARN · CELEBRATE · GROW</div>
      </section>

      <section className={styles.intro}>
        <div>
          <span className={styles.sectionTag}>CAMPUS EXPERIENCES</span>
          <h2>
            Every Event Creates
            <br />
            <span>A New Memory.</span>
          </h2>
        </div>
        <p>
          At DD College, campus life is full of energy and opportunities.
          From welcoming freshers to celebrating sports, yoga, culture
          and achievements, every event brings our college community
          together.
        </p>
      </section>

      <section className={styles.eventsSection} id="all-events">
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionTag}>EXPLORE CAMPUS LIFE</span>
            <h2>Our College Events</h2>
          </div>
          <span className={styles.eventCount}>08 EXPERIENCES</span>
        </div>

        <div className={styles.grid}>
          {events.map((event) => (
            <article className={styles.card} key={event.number}>
              <div className={styles.imageWrap}>
                <img
                  src={event.image}
                  alt={event.title}
                  className={styles.eventImage}
                />
                <span className={styles.number}>{event.number}</span>
                <span className={styles.category}>{event.category}</span>
              </div>

              <div className={styles.cardContent}>
                <span className={styles.date}>{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className={styles.cardFooter}>
                  <span>DD COLLEGE</span>
                  <span className={styles.arrow}>↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.highlight}>
        <div className={styles.highlightContent}>
          <span className={styles.sectionTag}>MORE THAN EDUCATION</span>
          <h2>
            Make Your College
            <br />
            Years <span>Unforgettable.</span>
          </h2>
          <p>
            Discover your talent, participate in activities,
            make new friends and become part of the DD College community.
          </p>
          <Link href="/CampusLife/campusoverview" className={styles.heroButton}>
            EXPLORE CAMPUS <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
