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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6">
      {/* Subtle decorative circle */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-gold/5" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gold"
        >
          UGC Creator
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl font-semibold leading-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Caitlyn
          <br />
          Dalessandro
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-md text-base text-charcoal/60 sm:text-lg"
        >
          Authentic, scroll-stopping content that connects brands with their
          audience.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href="#portfolio"
          className="mt-10 inline-block rounded-full border-2 border-gold bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-white"
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
}
