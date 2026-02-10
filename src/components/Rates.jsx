import { HiCheck } from "react-icons/hi2";
import ScrollReveal from "./ScrollReveal";
import ratesData from "../data/ratesData";

export default function Rates() {
  return (
    <section
      id="rates"
      style={{
        backgroundColor: "white",
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
              Rates & Packages
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
              Investment Options
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
              Choose the package that fits your brand's needs. Custom packages
              are always available.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {ratesData.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.1} style={{ display: "flex" }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  padding: "2.75rem 2.25rem",
                  borderRadius: "1rem",
                  border: pkg.highlighted
                    ? "2px solid var(--color-gold)"
                    : "1px solid var(--color-sand)",
                  backgroundColor: "white",
                  boxShadow: pkg.highlighted
                    ? "0 12px 40px rgba(0,0,0,0.1)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                  transform: pkg.highlighted ? "scale(1.04)" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Popular Badge */}
                {pkg.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "0.375rem 1.25rem",
                      borderRadius: "999px",
                      backgroundColor: "var(--color-gold)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "white",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Popular
                  </div>
                )}

                {/* Package Name */}
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                  }}
                >
                  {pkg.packageName}
                </h3>

                {/* Price */}
                <div style={{ marginTop: "1.25rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "var(--color-gold)",
                      lineHeight: 1,
                    }}
                  >
                    {pkg.price}
                  </span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    height: "1px",
                    backgroundColor: "var(--color-sand)",
                  }}
                />

                {/* Features */}
                <ul
                  style={{
                    flex: 1,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <HiCheck
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          flexShrink: 0,
                          marginTop: "2px",
                          color: "var(--color-gold)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                          color: "var(--color-stone)",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  style={{
                    display: "block",
                    marginTop: "2.5rem",
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    backgroundColor: pkg.highlighted
                      ? "var(--color-gold)"
                      : "var(--color-cream)",
                    color: pkg.highlighted ? "white" : "var(--color-ink)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = pkg.highlighted
                      ? "var(--color-gold-dark)"
                      : "var(--color-gold)";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = pkg.highlighted
                      ? "var(--color-gold)"
                      : "var(--color-cream)";
                    e.target.style.color = pkg.highlighted
                      ? "white"
                      : "var(--color-ink)";
                  }}
                >
                  Get Started
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
