import ScrollReveal from "./ScrollReveal";
import servicesData from "../data/servicesData";

export default function Services() {
  return (
    <section
      id="services"
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
              Services Offered
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
              What I Do
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
              From concept to delivery, I offer a range of content creation
              services tailored to your brand.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 0.08}>
                <div
                  style={{
                    height: "100%",
                    padding: "2.5rem 2rem",
                    borderRadius: "1rem",
                    border: "1px solid var(--color-sand)",
                    backgroundColor: "white",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-gold)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-sand)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "0.875rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "var(--color-cream)",
                      color: "var(--color-gold)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <IconComponent style={{ width: "1.5rem", height: "1.5rem" }} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.375rem",
                      fontWeight: 600,
                      color: "var(--color-ink)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      marginTop: "0.875rem",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "var(--color-stone)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
