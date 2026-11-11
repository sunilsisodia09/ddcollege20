"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import "./AnnouncementBar.css";

type Announcement = {
  id: number;
  date: string;
  month: string;
  category: string;
  title: string;
  description: string;
  important?: boolean;
  pdf?: string;
};

const announcements: Announcement[] = [
  {
    id: 1,
    date: "24",
    month: "SEP 2026",
    category: "Admissions",
    title: "Admissions Open for Academic Session 2026–27",
    description:
      "Applications are now open for various undergraduate and postgraduate programmes at DD College.",
    important: true,
  },
  {
    id: 2,
    date: "20",
    month: "SEP 2026",
    category: "Examination",
    title: "Semester Examination Schedule",
    description:
      "Students are requested to check the examination schedule and prepare accordingly.",
    pdf: "/documents/examination-schedule.pdf",
  },
  {
    id: 3,
    date: "18",
    month: "SEP 2026",
    category: "Events",
    title: "Orientation Programme 2026",
    description:
      "DD College welcomes new students to the Orientation Programme for the academic session 2026–27.",
  },
  {
    id: 4,
    date: "15",
    month: "SEP 2026",
    category: "Placement",
    title: "Placement Drive Announcement",
    description:
      "Students are invited to participate in the upcoming campus placement drive.",
  },
  {
    id: 5,
    date: "12",
    month: "SEP 2026",
    category: "Admissions",
    title: "Important Admission Guidelines",
    description:
      "Students are advised to carefully read the admission guidelines before submitting their application.",
    pdf: "/documents/admission-guidelines.pdf",
  },
  {
    id: 6,
    date: "08",
    month: "SEP 2026",
    category: "General",
    title: "College Notice for Students",
    description:
      "Important information and updates for all students of DD College.",
  },
];

const categories = [
  "All",
  "Admissions",
  "Examination",
  "Events",
  "Placement",
  "General",
];

export default function Announcements() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((announcement) => {
      const categoryMatch =
        activeCategory === "All" ||
        announcement.category === activeCategory;

      const searchMatch =
        announcement.title.toLowerCase().includes(search.toLowerCase()) ||
        announcement.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const importantAnnouncement = announcements.find(
    (announcement) => announcement.important
  );

  return (
    <main className="announcement-page">


      

      {/* NOTICE SECTION */}
      <section className="notices-section">
        <div className="announcement-container">

          {/* SECTION HEADER */}
          <div className="notice-header">
            <div>
              <span className="section-small-title">
                Stay Informed
              </span>

              <h2>
                Latest <span>Announcements</span>
              </h2>

              <p>
                Find all the latest updates and important notices
                from DD College.
              </p>
            </div>

            {/* SEARCH */}
            <div className="announcement-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search announcements..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ANNOUNCEMENTS */}
          <div className="announcement-list">

            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <article
                  className="announcement-card"
                  key={announcement.id}
                >

                  {/* DATE */}
                  <div className="announcement-date">
                    <strong>{announcement.date}</strong>
                    <span>{announcement.month}</span>
                  </div>

                  {/* CONTENT */}
                  <div className="announcement-content">

                    <div className="announcement-top">
                      <span className="announcement-category">
                        {announcement.category}
                      </span>

                      {announcement.important && (
                        <span className="important-badge">
                          Important
                        </span>
                      )}
                    </div>

                    <h3>{announcement.title}</h3>

                    <p>{announcement.description}</p>
                  </div>

                  {/* ACTION */}
                  <div className="announcement-action">
                    {announcement.pdf ? (
                      <a
                        href={announcement.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="notice-button"
                      >
                        <span>View / Download</span>
                        <b>↗</b>
                      </a>
                    ) : (
                      <button className="notice-button">
                        <span>View Details</span>
                        <b>→</b>
                      </button>
                    )}
                  </div>

                </article>
              ))
            ) : (
              <div className="no-results">
               
              </div>
            )}

          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
 

    </main>
  );
}