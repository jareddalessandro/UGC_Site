import { FiInstagram, FiMail } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const socials = [
  { icon: FiInstagram, label: "Instagram", href: "#" },
  { icon: FaTiktok, label: "TikTok", href: "#" },
  { icon: FiMail, label: "Email", href: "mailto:hello@example.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand/50 bg-cream px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-stone transition-colors hover:text-gold"
            >
              <s.icon className="text-lg" />
            </a>
          ))}
        </div>

        <p className="text-xs text-stone">
          &copy; {new Date().getFullYear()} Caitlyn Dalessandro. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
