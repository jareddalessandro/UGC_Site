import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "50+", label: "Brand Collaborations" },
  { value: "2M+", label: "Content Views" },
  { value: "3+", label: "Years Creating" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "white",
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          alignItems: "center",
          gap: "4rem",
        }}
        className="md:grid-cols-2"
      >
        {/* Photo */}
        <ScrollReveal>
          <div
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              maxWidth: "420px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "1rem",
              backgroundColor: "var(--color-cream-dark)",
            }}
          >
            <img
              src="https://placehold.co/480x600/E0D5C5/A89B8C?text=Caitlyn"
              alt="Caitlyn Dalessandro"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "100px",
                height: "100px",
                borderLeft: "4px solid var(--color-gold)",
                borderTop: "4px solid var(--color-gold)",
                borderTopLeftRadius: "1rem",
              }}
            />
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.15}>
          <p
            style={{
              marginBottom: "0.75rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--color-gold)",
            }}
          >
            About Me
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.15,
            }}
          >
            Hey, I&rsquo;m Caitlyn!
          </h2>
          <p
            style={{
              marginTop: "1.75rem",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "var(--color-stone)",
            }}
          >
            I&rsquo;m a UGC creator specializing in beauty, lifestyle, and food
            content. I help brands tell their story through authentic,
            relatable content that resonates with real people. From unboxings
            to tutorials, I craft scroll-stopping videos and photos that drive
            engagement and build trust.
          </p>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "var(--color-stone)",
            }}
          >
            Based in the US, I&rsquo;ve partnered with brands of all sizes to
            create content that feels native to the platform and genuine to the
            audience.
          </p>

          {/* Stats */}
          <div style={{ marginTop: "3rem", display: "flex", gap: "3rem" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "var(--color-gold)",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-stone)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
