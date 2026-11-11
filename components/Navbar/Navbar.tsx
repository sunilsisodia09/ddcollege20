
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import "./Navbar.css";

type MenuItem = {
  label: string;
  href: string;
  description: string;
  image: string;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

const menuGroups: MenuGroup[] = [
  {
    label: "About Us",
    items: [
      {
        label: "About the College",
        href: "/about",
        description:
          "Discover D.D. College, our educational journey, academic environment and commitment to excellence.",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?w=1000&q=85",
      },
      {
        label: "Vision & Mission",
        href: "/about/vision-mission",
        description:
          "Our vision and mission guide us towards quality education, innovation and holistic development.",
        image:
          "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000&q=85",
      },
      {
        label: "Chairman's Message",
        href: "/about/chairman-message",
        description:
          "Read the chairman's message and our commitment to creating opportunities for every student.",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=85",
      },
      {
        label: "Principal's Message",
        href: "/about/principal-message",
        description:
          "A message from our principal about academic excellence, discipline and student development.",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=85",
      },
      {
        label: "Management",
        href: "/about/management",
        description:
          "Meet the leadership and management team working to strengthen the college community.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85",
      },
    ],
  },

  {
    label: "Admission",
    items: [
      {
        label: "Admission Overview",
        href: "/admission",
        description:
          "Explore admission information, eligibility and the process to become a part of D.D. College.",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&q=85",
      },
      {
        label: "Courses & Programs",
        href: "/courses",
        description:
          "Explore undergraduate and postgraduate programs across different academic disciplines.",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=85",
      },
      {
        label: "Eligibility Criteria",
        href: "/admission/eligibility",
        description:
          "Check course-wise eligibility requirements and academic qualifications.",
        image:
          "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1000&q=85",
      },
     
      
    ],
  },

  {
    label: "Departments",
    items: [
      {
        label: "Computer Science & Engineering",
        href: "/departments/cse",
        description:
          "Build your future in computing, software development, programming and emerging technologies.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=85",
      },
      {
        label: "Computer Applications",
        href: "/departments/computer-applications",
        description:
          "Develop practical knowledge in computer applications, IT systems and modern software.",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=85",
      },
      {
        label: "Management Studies",
        href: "/departments/management",
        description:
          "Learn business management, leadership, entrepreneurship and professional skills.",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=85",
      },
      {
        label: "Commerce",
        href: "/departments/commerce",
        description:
          "Explore accounting, finance, taxation, economics and business fundamentals.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85",
      },
      {
        label: "Science",
        href: "/departments/science",
        description:
          "Discover scientific learning through practical education, research and experimentation.",
        image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=85",
      },
      {
        label: "Humanities",
        href: "/departments/humanities",
        description:
          "Explore society, culture, communication and the humanities through academic learning.",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&q=85",
      },
    ],
  },

  {
    label: "Placements",
    items: [
      {
        label: "Placement Overview",
        href: "/placements",
        description:
          "Explore our placement support, career development activities and employment opportunities.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=85",
      },
      {
        label: "Recruiters",
        href: "/placements/recruiters",
        description:
          "Discover the organizations and recruiters connected with our students.",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=85",
      },
      {
        label: "Training & Development",
        href: "/placements/training",
        description:
          "Learn about career training, interview preparation and professional development.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=85",
      },
      {
        label: "Placement Records",
        href: "/placements/records",
        description:
          "Explore placement achievements and student career milestones.",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=85",
      },
    ],
  },

  {
    label: "Campus Life",
    items: [
      {
        label: "Campus Overview",
        href: "/campus-life",
        description:
          "Experience campus life, student activities and the learning environment at D.D. College.",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?w=1000&q=85",
      },
     
      {
        label: "Library",
        href: "/campus-life/library",
        description:
          "Discover learning resources, books and study spaces available to students.",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000&q=85",
      },
      {
        label: "Computer Labs",
        href: "/campus-life/computer-labs",
        description:
          "Explore practical learning facilities and computer laboratories.",
        image:
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1000&q=85",
      },
      {
        label: "Sports & Recreation",
        href: "/campus-life/sports",
        description:
          "Discover sports, recreation and activities that encourage fitness and teamwork.",
        image:
          "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000&q=85",
      },
    
     
      {
        label: "Clubs & Societies",
        href: "/campus-life/clubs",
        description:
          "Participate in clubs, societies and extracurricular activities.",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=85",
      },
      {
        label: "Events & Activities",
        href: "/campus-life/events",
        description:
          "Stay connected with campus events, celebrations, workshops and activities.",
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&q=85",
      },
      {
        label: "Photo Gallery",
        href: "/gallery",
        description:
          "Explore photographs capturing campus events, achievements and college memories.",
        image:
          "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1000&q=85",
      },
    ],
  },

  {
    label: "Student Corner",
    items: [
      {
        label: "Student Portal",
        href: "/student-corner/portal",
        description:
          "Access student-related information, academic resources and important updates.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=85",
      },
  {
  label: "Syllabus",
  href: "/student-corner/syllabus",
  description:
    "Find department-wise and year-wise syllabus PDFs and academic resources.",
  image:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=85",
},
      {
        label: "Anti-Ragging Cell",
        href: "/student-corner/anti-ragging",
        description:
          "Learn about our commitment to a safe, respectful and ragging-free campus.",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=85",
      },
      {
        label: "Grievance Redressal",
        href: "/student-corner/grievance",
        description:
          "Find information about student grievance support and redressal procedures.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=85",
      },
      {
        label: "Internal Complaints Committee",
        href: "/student-corner/icc",
        description:
          "Explore institutional support and complaint redressal information.",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=85",
      },
      {
        label: "NSS & Social Activities",
        href: "/student-corner/nss",
        description:
          "Discover volunteering, social responsibility and community engagement activities.",
        image:
          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&q=85",
      },
      {
        label: "Alumni Association",
        href: "/student-corner/alumni",
        description:
          "Stay connected with alumni and the wider D.D. College community.",
        image:
          "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1000&q=85",
      },
   
    ],
  },
];

const directLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [selectedItems, setSelectedItems] = useState<
    Record<string, number>
  >({});

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getSelectedItem = (group: MenuGroup) => {
    const index = selectedItems[group.label] ?? 0;
    return group.items[index] || group.items[0];
  };

  const openMenu = (label: string) => {
    setActiveMenu((current) => current === label ? null : label);
  };

  const selectItem = (group: string, index: number) => {
    setSelectedItems((previous) => ({
      ...previous,
      [group]: index,
    }));
  };

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`dd-navbar ${isScrolled ? "is-scrolled" : ""}`}
        onMouseLeave={() => {
          if (!mobileOpen) setActiveMenu(null);
        }}
      >
        <div className="dd-navbar-inner">

          {/* LOGO */}
          <Link
            href="/"
            className="dd-brand"
            onClick={closeAll}
            aria-label="D.D. College Home"
          >
            <img src="/logos/college.png" alt="D.D. College Logo" />

            <span className="dd-brand-text">
              <strong>D.D. COLLEGE</strong>
              <small>DEHRADUN</small>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="dd-desktop-nav" aria-label="Main navigation">

            {directLinks.slice(0, 1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`dd-nav-link ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            {menuGroups.map((group) => (
              <button
                key={group.label}
                type="button"
                className={`dd-nav-link dd-dropdown-trigger ${
                  activeMenu === group.label ? "active" : ""
                }`}
                onClick={() => openMenu(group.label)}
                onMouseEnter={() => setActiveMenu(group.label)}
                aria-expanded={activeMenu === group.label}
              >
                {group.label}
                <ChevronDown
                  size={15}
                  className={activeMenu === group.label ? "rotate" : ""}
                />
              </button>
            ))}

            <Link
              href="/contact"
              className={`dd-nav-link ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>

          </nav>

          {/* ADMISSION BUTTON */}
          <Link
            href="/admission"
            className="dd-admission-btn"
            onClick={closeAll}
          >
            Apply Now <ArrowUpRight size={16} />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="dd-mobile-toggle"
            type="button"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setActiveMenu(null);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>

        {/* DESKTOP MEGA MENU */}
        {activeMenu && (
          <div
            className="dd-mega-menu"
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            {menuGroups
              .filter((group) => group.label === activeMenu)
              .map((group) => {
                const selected = getSelectedItem(group);

                return (
                  <div className="dd-mega-inner" key={group.label}>

                    {/* LEFT MENU */}
                    <div className="dd-mega-left">

                      <div className="dd-mega-heading">
                        <span>EXPLORE D.D. COLLEGE</span>
                        <h3>{group.label}</h3>
                        <p>
                          Discover more about our college and opportunities.
                        </p>
                      </div>

                      <div className="dd-mega-list">
                        {group.items.map((item, index) => (
                          <button
                            type="button"
                            key={item.label}
                            className={`dd-mega-item ${
                              (selectedItems[group.label] ?? 0) === index
                                ? "selected"
                                : ""
                            }`}
                            onMouseEnter={() =>
                              selectItem(group.label, index)
                            }
                            onFocus={() =>
                              selectItem(group.label, index)
                            }
                            onClick={() =>
                              selectItem(group.label, index)
                            }
                          >
                            <span>{item.label}</span>
                            <ArrowUpRight size={16} />
                          </button>
                        ))}
                      </div>

                    </div>

                    {/* RIGHT IMAGE PREVIEW */}
                    <div className="dd-mega-preview" key={selected.label}>

                      <div className="dd-preview-image">
                        <img
                          src={selected.image}
                          alt={selected.label}
                        />
                        <span className="dd-preview-overlay" />
                      </div>

                      <div className="dd-preview-content">
                        <span className="dd-preview-label">
                          D.D. COLLEGE DEHRADUN
                        </span>

                        <h2>{selected.label}</h2>

                        <p>{selected.description}</p>

                        <Link
                          href={selected.href}
                          className="dd-preview-btn"
                          onClick={closeAll}
                        >
                          Explore More
                          <ArrowUpRight size={17} />
                        </Link>
                      </div>

                    </div>

                  </div>
                );
              })}
          </div>
        )}

      </header>

      {/* DESKTOP BACKDROP */}
      {activeMenu && !mobileOpen && (
        <div
          className="dd-navbar-backdrop"
          onClick={() => setActiveMenu(null)}
          aria-hidden="true"
        />
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="dd-mobile-overlay" onClick={closeAll}>
          <div
            className="dd-mobile-panel"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="dd-mobile-header">
              <div className="dd-mobile-brand">
                <img src="/logo.jpeg" alt="D.D. College Logo" />
                <div>
                  <strong>D.D. COLLEGE</strong>
                  <small>DEHRADUN</small>
                </div>
              </div>

              <button
                type="button"
                onClick={closeAll}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="dd-mobile-links">

              <Link href="/" onClick={closeAll}>
                Home
              </Link>

              {menuGroups.map((group) => {
                const selected = getSelectedItem(group);

                return (
                  <div className="dd-mobile-group" key={group.label}>

                    <button
                      type="button"
                      className={`dd-mobile-group-trigger ${
                        activeMenu === group.label ? "active" : ""
                      }`}
                      onClick={() => openMenu(group.label)}
                    >
                      {group.label}
                      <ChevronDown
                        size={19}
                        className={
                          activeMenu === group.label ? "rotate" : ""
                        }
                      />
                    </button>

                    {activeMenu === group.label && (
                      <div className="dd-mobile-submenu">

                        {group.items.map((item, index) => (
                          <button
                            type="button"
                            key={item.label}
                            className={`dd-mobile-item ${
                              (selectedItems[group.label] ?? 0) === index
                                ? "selected"
                                : ""
                            }`}
                            onClick={() =>
                              selectItem(group.label, index)
                            }
                          >
                            {item.label}
                            <ArrowUpRight size={15} />
                          </button>
                        ))}

                        <div className="dd-mobile-preview">
                          <img
                            src={selected.image}
                            alt={selected.label}
                          />

                          <div>
                            <h4>{selected.label}</h4>
                            <p>{selected.description}</p>
                            <Link
                              href={selected.href}
                              onClick={closeAll}
                            >
                              Explore More <ArrowUpRight size={15} />
                            </Link>
                          </div>
                        </div>

                      </div>
                    )}

                  </div>
                );
              })}

              <Link href="/contact" onClick={closeAll}>
                Contact
              </Link>

              <Link
                href="/admission"
                className="dd-mobile-apply"
                onClick={closeAll}
              >
                Apply Now <ArrowUpRight size={17} />
              </Link>

            </div>

            <div className="dd-mobile-footer">
              D.D. College Dehradun
            </div>

          </div>
        </div>
      )}
    </>
  );
}
