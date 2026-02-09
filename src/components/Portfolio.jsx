import { useState } from "react";
import { AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../data/portfolioData";

const categories = ["All", "Beauty", "Lifestyle", "Food"];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Selected Work
          </h2>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
                active === cat
                  ? "bg-gold text-white"
                  : "bg-sand/40 text-charcoal/60 hover:bg-sand/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
