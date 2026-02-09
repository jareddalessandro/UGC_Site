import { useRef, useState } from "react";
import { motion } from "motion/react";
import { HiPlay } from "react-icons/hi2";

export default function PortfolioItem({ item }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const isVideo = item.type === "video";

  const handleMouseEnter = () => {
    if (isVideo && item.videoSrc && videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (isVideo && item.videoSrc && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  const handleTap = () => {
    if (isVideo && item.videoSrc && videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl bg-cream-dark"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
    >
      {/* Image (always shown as poster) */}
      <img
        src={item.src}
        alt={item.title}
        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          isVideo && playing ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video layer */}
      {isVideo && item.videoSrc && (
        <video
          ref={videoRef}
          src={item.videoSrc}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Video badge */}
      {isVideo && !playing && (
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-ink/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <HiPlay className="text-sm" />
          Video
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm font-medium uppercase tracking-wider text-gold-light">
          {item.brand}
        </p>
        <h3 className="mt-1 font-serif text-lg font-semibold text-white">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}
