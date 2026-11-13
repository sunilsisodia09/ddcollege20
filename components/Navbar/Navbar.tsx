
"use client";

import { useEffect, useState } from "react";
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
              image: "/campus/build.webp",
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
        image: "/gallery/chairmansira.jpg",
      },
      {
        label: "Principal's Message",
        href: "/about/principal-message",
        description:
          "A message from our principal about academic excellence, discipline and student development.",
        image: "/campus/prin.jpg",
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
    label: "Departments",
    items: [
      {
        label: "DEPARTMENT OF SCIENCE",
        href: "/Departments/schoolofscience",
        description:
          "Explore scientific knowledge, laboratory learning, research, innovation and practical understanding of the natural world at DD College.",
        image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=85",
      },
      {
        label: "LAW",
        href: "/Departments/LAW",
        description:
          "Explore legal education, constitutional law, criminal law, human rights, justice and legal awareness at DD College.",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&q=85",
      },
      {
        label: "Management Studies",
        href: "/Departments/SCHOOLOFCOMMERCE&MANAGEMENT",
        description:
          "Learn business management, leadership, entrepreneurship and professional skills.",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=85",
      },
      {
        label: "YOGA",
        href: "/Departments/SCHOOLOFYOGA",
        description:
          "Explore yoga, meditation, wellness, breathing exercises and holistic learning at DD College.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=85",
      },
      {
        label: "HEALTH SCIENCES",
        href: "/Departments/HEALTHSCIENCES",
        description:
          "Explore human health, healthcare awareness, medical sciences, wellness, disease prevention and practical scientific learning at DD College.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=85",
      },
      {
        label: "DEPARTMENT OF COMPUTER SCIENCE",
        href: "/Departments/COMPUTERSCIENCE",
        description:
          "Explore computer science, programming, software development, web technologies, databases, artificial intelligence and modern IT skills at DD College.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=85",
      },
      {
        label: "DEPARTMENT OF HUMANITIES & SOCIAL SCIENCES",
        href: "/Departments/HUMANITIESSOCIALSCIENCES",
        description:
          "Explore history, political science, sociology, psychology, literature, culture and social development through interdisciplinary learning at DD College.",
        image:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1000&q=85",
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
    ],
  },
  {
    label: "Campus Life",
    items: [
      {
        label: "Campus Overview",
        href: "/CampusLife/campusoverview",
        description:
          "Experience campus life, student activities and the learning environment at D.D. College.",
        image: "/campus/build.webp",
      },
      {
        label: "Labs",
        href: "/CampusLife/labs",
        description:
          "Explore practical learning facilities and computer laboratories.",
        image:
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1000&q=85",
      },
      {
        label: "Clubs & Societies",
        href: "/CampusLife/clubs",
        description:
          "Participate in clubs, societies and extracurricular activities.",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=85",
      },
      {
        label: "Events & Activities",
        href: "/CampusLife/events",
        description:
          "Stay connected with campus events, celebrations, workshops and activities.",
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&q=85",
      },
      {
        label: "Photo Gallery",
        href: "/CampusLife/gallery",
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
        href: "/student-corner/studentportal",
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
  const [isScrolled, setIsScrolled] = useState(false);

  const [selectedItems, setSelectedItems] = useState<
    Record<string, number>
  >({});

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus using Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const getSelectedItem = (group: MenuGroup): MenuItem => {
    const index = selectedItems[group.label] ?? 0;
    return group.items[index] || group.items[0];
  };

  const openMenu = (label: string) => {
    setActiveMenu((current) =>
      current === label ? null : label
    );
  };

  const selectItem = (group: string, index: number) => {
    setSelectedItems((previous) => ({
      ...previous,
      [group]: index,
    }));
  };

  return (
    <>
      <header
        className={`dd-navbar ${isScrolled ? "is-scrolled" : ""}`}
        onMouseLeave={() => {
          if (!mobileOpen) {
            setActiveMenu(null);
          }
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
            <img
              src="/logos/college.png"
              alt="D.D. College Logo"
            />

            <span className="dd-brand-text">
              <strong>D.D. COLLEGE</strong>
              <small>DEHRADUN</small>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="dd-desktop-nav"
            aria-label="Main navigation"
          >
            {directLinks.slice(0, 1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeAll}
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
                aria-haspopup="true"
              >
                {group.label}

                <ChevronDown
                  size={15}
                  className={
                    activeMenu === group.label ? "rotate" : ""
                  }
                />
              </button>
            ))}

            <Link
              href={directLinks[1].href}
              onClick={closeAll}
              className={`dd-nav-link ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* ADMISSION BUTTON */}
          <Link
            href="/admissions"
            className="dd-admission-btn"
            onClick={closeAll}
          >
            Apply Now
            <ArrowUpRight size={16} />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="dd-mobile-toggle"
            type="button"
            onClick={() => {
              setMobileOpen((previous) => !previous);
              setActiveMenu(null);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* DESKTOP MEGA MENU */}
        {activeMenu && !mobileOpen && (
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
                          Discover more about our college and
                          opportunities.
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
                    <div
                      className="dd-mega-preview"
                      key={selected.label}
                    >
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
        <div
          className="dd-mobile-overlay"
          onClick={closeAll}
        >
          <div
            className="dd-mobile-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="dd-mobile-header">
              <div className="dd-mobile-brand">
                <img
                  src="/logos/college.png"
                  alt="D.D. College Logo"
                />

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
                  <div
                    className="dd-mobile-group"
                    key={group.label}
                  >
                    <button
                      type="button"
                      className={`dd-mobile-group-trigger ${
                        activeMenu === group.label ? "active" : ""
                      }`}
                      onClick={() => openMenu(group.label)}
                      aria-expanded={activeMenu === group.label}
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
                              Explore More
                              <ArrowUpRight size={15} />
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
                href="/admissions"
                className="dd-mobile-apply"
                onClick={closeAll}
              >
                Apply Now
                <ArrowUpRight size={17} />
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
