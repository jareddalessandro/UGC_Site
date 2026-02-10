import { FiInstagram, FiMail } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const socials = [
  { icon: FiInstagram, label: "Instagram", href: "#" },
  { icon: FaTiktok, label: "TikTok", href: "#" },
  { icon: FiMail, label: "Email", href: "mailto:hello@example.com" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-sand)",
        backgroundColor: "white",
        padding: "3.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--color-ink)",
          }}
        >
          Caitlyn D.
        </p>

        <div style={{ display: "flex", gap: "1.25rem" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                color: "var(--color-stone)",
                fontSize: "1.125rem",
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-stone)")
              }
            >
              <s.icon />
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-stone)",
          }}
        >
          &copy; {new Date().getFullYear()} Caitlyn Dalessandro. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
