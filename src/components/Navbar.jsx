import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { label: "About", href: "#about" },
  { label: "Videography", href: "#videography" },
  { label: "Photography", href: "#photography" },
  { label: "Services", href: "#services" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(250, 248, 245, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2rem",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Caitlyn D.
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            listStyle: "none",
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "var(--color-stone)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--color-gold)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--color-stone)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden"
          style={{
            fontSize: "1.75rem",
            color: "var(--color-charcoal)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid var(--color-sand)",
            backgroundColor: "rgba(250, 248, 245, 0.97)",
            backdropFilter: "blur(12px)",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.75rem",
              padding: "2.5rem 0",
              listStyle: "none",
            }}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
