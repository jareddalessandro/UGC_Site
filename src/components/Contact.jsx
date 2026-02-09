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

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

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

  return (
    <section id="contact" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Let&rsquo;s Work Together
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Info column */}
          <ScrollReveal>
            <p className="leading-relaxed text-charcoal/70">
              Have a brand or product you&rsquo;d like featured? I&rsquo;d love
              to hear about it. Drop me a message and I&rsquo;ll get back to you
              within 24 hours.
            </p>

            <div className="mt-8 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-sand text-charcoal/50 transition-colors hover:border-gold hover:text-gold"
                >
                  <s.icon className="text-lg" />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Form column */}
          <ScrollReveal delay={0.15}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="rounded-lg border border-sand bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-stone focus:border-gold"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="rounded-lg border border-sand bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-stone focus:border-gold"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="resize-none rounded-lg border border-sand bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-stone focus:border-gold"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Sent!"
                    : status === "error"
                      ? "Error — Try Again"
                      : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-green-700">
                  Thanks! I&rsquo;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
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
