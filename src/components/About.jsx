import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "50+", label: "Brand Collaborations" },
  { value: "2M+", label: "Content Views" },
  { value: "3+", label: "Years Creating" },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Photo */}
        <ScrollReveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-cream-dark">
            <img
              src="https://placehold.co/480x600/E0D5C5/A89B8C?text=Caitlyn"
              alt="Caitlyn Dalessandro"
              className="h-full w-full object-cover"
            />
            {/* Gold accent corner */}
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-tl-2xl border-l-4 border-t-4 border-gold" />
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.15}>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            About Me
          </p>
          <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Hey, I&rsquo;m Caitlyn!
          </h2>
          <p className="mt-6 leading-relaxed text-charcoal/70">
            I&rsquo;m a UGC creator specializing in beauty, lifestyle, and food
            content. I help brands tell their story through authentic,
            relatable content that resonates with real people. From unboxings
            to tutorials, I craft scroll-stopping videos and photos that drive
            engagement and build trust.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal/70">
            Based in the US, I&rsquo;ve partnered with brands of all sizes to
            create content that feels native to the platform and genuine to the
            audience.
          </p>

          {/* Stats */}
          <div className="mt-10 flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-2xl font-semibold text-gold">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-stone">
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
