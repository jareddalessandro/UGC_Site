import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { icon: FiInstagram, label: "Instagram", href: "#" },
  { icon: FaTiktok, label: "TikTok", href: "#" },
  { icon: FiMail, label: "Email", href: "mailto:hello@example.com" },
];

const inputStyles = {
  width: "100%",
  padding: "1.125rem 1.5rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "var(--color-charcoal)",
  backgroundColor: "var(--color-cream)",
  border: "2px solid var(--color-sand)",
  borderRadius: "0.75rem",
  outline: "none",
  transition: "border-color 0.2s ease",
  fontFamily: "var(--font-sans)",
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "var(--color-gold)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "var(--color-sand)";
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p
              style={{
                marginBottom: "1rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--color-gold)",
              }}
            >
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 600,
                color: "var(--color-ink)",
                lineHeight: 1.1,
              }}
            >
              Let&rsquo;s Work Together
            </h2>
            <p
              style={{
                maxWidth: "540px",
                margin: "1.5rem auto 0",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "var(--color-stone)",
              }}
            >
              Have a brand or product you&rsquo;d like featured? I&rsquo;d love
              to hear about it.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gap: "5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Info column */}
          <ScrollReveal>
            <div style={{ paddingTop: "0.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  marginBottom: "1.25rem",
                }}
              >
                Let&rsquo;s create something amazing
              </h3>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.8,
                  color: "var(--color-stone)",
                }}
              >
                Drop me a message and I&rsquo;ll get back to you within 24
                hours. I&rsquo;m always excited to discuss new projects and
                collaborations.
              </p>

              {/* Socials */}
              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  gap: "1.25rem",
                }}
              >
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "50%",
                      border: "2px solid var(--color-sand)",
                      color: "var(--color-stone)",
                      fontSize: "1.25rem",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-gold)";
                      e.currentTarget.style.color = "var(--color-gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-sand)";
                      e.currentTarget.style.color = "var(--color-stone)";
                    }}
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form column */}
          <ScrollReveal delay={0.15}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <label
                  htmlFor="user_name"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Jane Smith"
                  required
                  style={inputStyles}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="jane@company.com"
                  required
                  style={inputStyles}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, timeline, and goals..."
                  rows={8}
                  required
                  style={{
                    ...inputStyles,
                    resize: "none",
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  marginTop: "0.75rem",
                  padding: "1.125rem 2rem",
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: "var(--color-gold)",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  cursor: status === "sending" ? "default" : "pointer",
                  opacity: status === "sending" ? 0.6 : 1,
                  transition: "all 0.3s ease",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending") {
                    e.target.style.backgroundColor = "var(--color-gold-dark)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--color-gold)";
                }}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Sent!"
                    : status === "error"
                      ? "Error \u2014 Try Again"
                      : "Send Message"}
              </button>

              {status === "sent" && (
                <p style={{ fontSize: "0.9375rem", color: "#15803d" }}>
                  Thanks! I&rsquo;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p style={{ fontSize: "0.9375rem", color: "#dc2626" }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
