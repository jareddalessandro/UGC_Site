import { motion } from "motion/react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--color-cream)",
        padding: "6rem 2rem",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "-8rem",
          right: "-4rem",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "var(--color-gold)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ position: "relative", zIndex: 10, textAlign: "center" }}
      >
        <motion.p
          variants={fadeUp}
          style={{
            marginBottom: "1.25rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "var(--color-gold)",
          }}
        >
          UGC Creator
        </motion.p>

        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            color: "var(--color-ink)",
          }}
        >
          Caitlyn
          <br />
          Dalessandro
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            margin: "2rem auto 0",
            maxWidth: "480px",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: "var(--color-stone)",
          }}
        >
          Authentic, scroll-stopping content that connects brands with their
          audience.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href="#videography"
          style={{
            display: "inline-block",
            marginTop: "3rem",
            padding: "1rem 2.5rem",
            border: "2px solid var(--color-gold)",
            borderRadius: "999px",
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-gold)",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "var(--color-gold)";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "var(--color-gold)";
          }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
}
