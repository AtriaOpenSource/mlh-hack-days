import {
  Package,
  Trophy,
  Medal,
  Award,
  Star,
  Gift,
  Share2,
  Zap,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { sponsorsData } from "@/lib/data";

const tiers = [
  {
    title: "PLATINUM",
    data: sponsorsData.platinum,
    accent: "bg-ink text-bg",
    border: "border-ink",
    tag: "Lead Sponsor",
    desc: "Major League Hacking — the global hacker community powering the event.",
  },
  {
    title: "GOLD",
    data: sponsorsData.gold,
    accent: "bg-accent text-bg",
    border: "border-accent",
    tag: "Featured Partners",
    desc: "The partners who fueled the build, the food, and the fun.",
  },
  {
    title: "SILVER",
    data: sponsorsData.silver,
    accent: "bg-neutral text-white",
    border: "border-neutral",
    tag: "Community",
    desc: "Community partners helping hackers level up.",
  },
  {
    title: "ECOSYSTEM",
    data: sponsorsData.ecosystem,
    accent: "bg-indigo text-white",
    border: "border-indigo",
    tag: "Co-Organizers",
    desc: "The chapters behind the scenes making Hack Days happen.",
  },
];

const rewards = [
  {
    icon: Trophy,
    place: "1ST_PLACE",
    title: "Top 1 Team",
    accent: "bg-ink text-bg",
    badge: "bg-accent text-bg",
    items: [
      { icon: Package, text: "MLH Swag Kits (worth $300)" },
      { icon: Zap, text: "$800 Render Credits" },
    ],
  },
  {
    icon: Medal,
    place: "2ND_PLACE",
    title: "Top 2 Team",
    accent: "bg-white text-ink border-2 border-ink",
    badge: "bg-indigo text-white",
    items: [
      { icon: Package, text: "MLH Swag Kits (worth $300)" },
      { icon: Zap, text: "$600 Render Credits" },
    ],
  },
  {
    icon: Award,
    place: "3RD_PLACE",
    title: "3rd Place",
    accent: "bg-white text-ink border border-structural",
    badge: "bg-neutral text-white",
    items: [
      { icon: Zap, text: "$500 Render Credits" },
      { icon: Gift, text: "Event Swags" },
    ],
  },
  {
    icon: Star,
    place: "BONUS",
    title: "Quiz Winners",
    accent: "bg-bg text-ink border border-structural",
    badge: "border border-accent text-accent",
    items: [{ icon: Gift, text: "Swags (by HulChul)" }],
  },
];

export default function SponsorsPage() {
  return (
    <div className="space-y-24 pb-24 pt-8">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-ink cursor-blink rounded-none"></span>
            <span className="text-xs font-mono text-neutral tracking-widest uppercase">
              Post-Event
            </span>
          </div>
          <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-4 uppercase">
            Rewards & <br />
            <span className="text-neutral">Sponsors</span>
          </h1>
          <p className="font-sans text-lg text-ink/80 max-w-2xl text-balance">
            The partners who made Hack Days possible, and the rewards every
            hacker walked away with.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="bg-ink text-bg px-5 py-3 font-mono text-xs uppercase tracking-widest flex items-center gap-3 shadow-struct">
            <Share2 className="w-4 h-4 text-accent" />
            THANK YOU
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="space-y-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 bg-ink"></span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-widest">
            Sponsors & Partners
          </h2>
        </div>

        <div className="space-y-12">
          {tiers.map((tier) => (
            <div key={tier.title}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`font-mono text-[10px] px-2 py-1 uppercase tracking-widest ${tier.accent}`}
                >
                  {tier.title}
                </span>
                <span className="font-mono text-[10px] text-neutral uppercase tracking-widest">
                  {tier.tag} · {tier.data.sponsors.length}
                </span>
              </div>
              <p className="font-sans text-sm text-neutral mb-6 max-w-xl">
                {tier.desc}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {tier.data.sponsors.map((sponsor, idx) => (
                  <div
                    key={sponsor.name}
                    className={`relative w-full h-28 md:h-32 flex items-center justify-center p-6 md:p-8 group bg-bg border ${tier.border} transition-all hover:-translate-y-1 hover:shadow-struct`}
                  >
                    {sponsor.label && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-ink text-bg font-mono text-[8px] uppercase tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">
                        {sponsor.label}
                      </div>
                    )}
                    <span className="absolute bottom-2 left-2 font-mono text-[8px] text-neutral/50">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={sponsor.width}
                      height={sponsor.height}
                      className="h-10 md:h-12 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards */}
      <section id="rewards" className="pt-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 bg-accent"></span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-widest">
            Prizes & Rewards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rewards.map((reward) => (
            <div
              key={reward.place}
              className={`p-8 relative overflow-hidden flex flex-col h-full transition-all hover:-translate-y-1 hover:shadow-struct ${reward.accent}`}
            >
              <div className="flex justify-between items-start mb-6">
                <reward.icon className="w-10 h-10 opacity-90" />
                <div
                  className={`font-mono text-[10px] px-2 py-1 font-bold uppercase ${reward.badge}`}
                >
                  {reward.place}
                </div>
              </div>
              <h3 className="font-display font-bold uppercase text-2xl mb-4">
                {reward.title}
              </h3>
              <div className="space-y-3 mt-auto">
                {reward.items.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span className="font-sans text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* All Participants */}
          <div className="lg:col-span-2 bg-white border border-structural p-8 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-6 transition-all hover:-translate-y-1 hover:shadow-struct">
            <div className="flex-shrink-0">
              <Globe className="w-16 h-16 text-indigo opacity-20" />
            </div>
            <div className="flex-grow">
              <h3 className="font-display font-bold uppercase text-2xl mb-4">
                All Participants
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo rounded-full" />
                  <span className="font-sans text-sm">Event Stickers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo rounded-full" />
                  <span className="font-sans text-sm">$50 Render Credits</span>
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="w-2 h-2 bg-indigo rounded-full" />
                  <span className="font-sans text-sm font-bold">
                    n8n Cloud Pro License
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
