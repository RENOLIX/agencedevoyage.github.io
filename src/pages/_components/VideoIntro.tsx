import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function VideoIntro({ onComplete }: { onComplete: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setFadeOut(true);
      window.setTimeout(onComplete, 900);
    }, 5200);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div className="intro" animate={{ opacity: fadeOut ? 0 : 1 }} transition={{ duration: 0.9 }}>
      <video ref={videoRef} className="intro-video" autoPlay muted playsInline>
        <source src="/agencedevoyage.github.io/pc2.mp4" media="(max-width: 760px)" type="video/mp4" />
        <source src="/agencedevoyage.github.io/pc1.mp4" type="video/mp4" />
      </video>
      <div className="intro-shade" />
      <div className="letterbox top" />
      <div className="letterbox bottom" />
      <div className="intro-brand">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Bienvenue chez</motion.p>
        <motion.h1 initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1.1 }}>Horizons</motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }}>Voyages</motion.h2>
        <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 1 }} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>Le monde vous attend</motion.p>
      </div>
    </motion.div>
  );
}
