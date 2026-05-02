import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function VideoIntro({ onComplete }: { onComplete: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState("/agencedevoyage.github.io/pc1.mp4");

  useEffect(() => {
    const pickVideo = () => {
      const isMobile = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
      setVideoSrc(isMobile ? "/agencedevoyage.github.io/pc2.mp4" : "/agencedevoyage.github.io/pc1.mp4");
    };

    pickVideo();
    window.addEventListener("resize", pickVideo);
    return () => window.removeEventListener("resize", pickVideo);
  }, []);

  useEffect(() => {
    const finish = () => {
      setFadeOut(true);
      window.setTimeout(onComplete, 260);
    };

    const video = videoRef.current;
    video?.addEventListener("ended", finish);
    video?.load();
    void video?.play().catch(() => {
      window.setTimeout(finish, 900);
    });

    const timer = window.setTimeout(() => {
      finish();
    }, 9000);

    return () => {
      window.clearTimeout(timer);
      video?.removeEventListener("ended", finish);
    };
  }, [onComplete, videoSrc]);

  return (
    <motion.div className="intro" animate={{ opacity: fadeOut ? 0 : 1 }} transition={{ duration: 0.24, ease: "easeOut" }}>
      <video
        ref={videoRef}
        className="intro-video"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        onError={() => window.setTimeout(onComplete, 450)}
      />
      <div className="intro-shade" />
      <div className="intro-brand">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Bienvenue chez</motion.p>
        <motion.h1 initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1.1 }}>Hamdi</motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }}>Voyage</motion.h2>
        <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 1 }} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>Le monde vous attend</motion.p>
      </div>
    </motion.div>
  );
}
