"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Network, Fingerprint, Activity, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center [perspective:1200px] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_70%)]" />

      {/* Orbiting Rings */}
      <motion.div
        className="absolute w-[320px] h-[320px] border border-dashed border-ink/15 rounded-full"
        animate={{ rotateZ: 360, rotateX: 60, rotateY: 20 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] border border-ink/10 rounded-full"
        animate={{ rotateZ: -360, rotateX: 70, rotateY: -30 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* Core Interactive Cube */}
      <motion.div
        className="relative w-40 h-40 [transform-style:preserve-3d]"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 border-2 border-accent bg-bg/80 backdrop-blur-md flex items-center justify-center [transform:translateZ(80px)] shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          <Cpu className="w-10 h-10 text-accent cursor-blink" />
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 border border-ink/30 bg-ink/5 backdrop-blur-sm flex items-center justify-center [transform:rotateY(180deg)_translateZ(80px)]">
          <Network className="w-8 h-8 text-ink/50" />
        </div>
        {/* Right Face */}
        <div className="absolute inset-0 border border-ink/30 bg-ink/5 backdrop-blur-sm flex items-center justify-center [transform:rotateY(90deg)_translateZ(80px)]">
          <Terminal className="w-8 h-8 text-ink/50" />
        </div>
        {/* Left Face */}
        <div className="absolute inset-0 border border-ink/30 bg-ink/5 backdrop-blur-sm flex items-center justify-center [transform:rotateY(-90deg)_translateZ(80px)]">
          <Code2 className="w-8 h-8 text-ink/50" />
        </div>
        {/* Top Face */}
        <div className="absolute inset-0 border border-ink/30 bg-ink/5 backdrop-blur-sm flex items-center justify-center [transform:rotateX(90deg)_translateZ(80px)]">
          <Fingerprint className="w-8 h-8 text-ink/50" />
        </div>
        {/* Bottom Face */}
        <div className="absolute inset-0 border border-ink/30 bg-ink/5 backdrop-blur-sm flex items-center justify-center [transform:rotateX(-90deg)_translateZ(80px)]">
          <Activity className="w-8 h-8 text-ink/50" />
        </div>
      </motion.div>

      {/* Floating Data Points */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full"
          animate={{
            y: [-100, 100, -100],
            x: Math.sin(i) * 150,
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
