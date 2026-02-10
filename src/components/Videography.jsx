import ScrollReveal from "./ScrollReveal";
import videographyData from "../data/videographyData";

export default function Videography() {
  return (
    <section
      id="videography"
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
              Videography
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
              My Video Work
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
              Engaging, authentic video content crafted to captivate audiences
              and showcase brands at their best.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Grid */}
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {videographyData.map((video, index) => (
            <ScrollReveal key={video.id} delay={index * 0.1}>
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "1rem",
                  backgroundColor: "white",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* 16:9 Embed */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 9",
                    backgroundColor: "var(--color-cream-dark)",
                  }}
                >
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>

                {/* Video Info */}
                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--color-gold)",
                    }}
                  >
                    {video.brand}
                  </p>
                  <h3
                    style={{
                      marginTop: "0.375rem",
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--color-ink)",
                    }}
                  >
                    {video.title}
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
