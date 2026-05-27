"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex items-baseline gap-1 px-4 md:px-8">
    <span className="text-2xl md:text-3xl font-mono font-bold text-ink">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral font-medium">
      {label}
    </span>
  </div>
);

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const targetDate = new Date("2026-06-15T00:00:00").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0"
    >
      <div className="flex items-center gap-2 pr-0 md:pr-8 md:border-r border-ink/10 mb-2 md:mb-0">
        <span className="w-2 h-2 bg-accent cursor-blink"></span>
        <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase font-bold whitespace-nowrap">
          Live Countdown
        </span>
      </div>

      <div className="flex items-center divide-x divide-ink/5">
        <TimeUnit value={timeLeft.days} label="d" />
        <TimeUnit value={timeLeft.hours} label="h" />
        <TimeUnit value={timeLeft.minutes} label="m" />
        <TimeUnit value={timeLeft.seconds} label="s" />
      </div>
    </motion.div>
  );
}
