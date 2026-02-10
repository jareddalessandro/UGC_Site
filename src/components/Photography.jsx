import ScrollReveal from "./ScrollReveal";
import photographyData from "../data/photographyData";

export default function Photography() {
  return (
    <section
      id="photography"
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
              Photography
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
              Visual Stories
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
              Beautiful, lifestyle-driven photography that tells your brand's
              story and connects with your audience.
            </p>
          </div>
        </ScrollReveal>

        {/* Photo Grid */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {photographyData.map((photo, index) => (
            <ScrollReveal key={photo.id} delay={index * 0.05}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                  borderRadius: "0.75rem",
                  backgroundColor: "var(--color-cream-dark)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />

                {/* Hover Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.75rem",
                    background:
                      "linear-gradient(to top, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.15) 50%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    {photo.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
