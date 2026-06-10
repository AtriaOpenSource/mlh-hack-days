import {
  Package,
  Globe,
  Database,
  Network,
  Trophy,
  Medal,
  Award,
  Download,
  ArrowRight,
  Zap,
  Star,
  Gift,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { sponsorsData } from "@/lib/data";

export default function SponsorsPage() {
  const sections = [
    {
      key: "platinum",
      data: sponsorsData.platinum,
      icon: Trophy,
      colorClass: "text-indigo",
      borderClass: "hover:border-indigo",
      layout: "featured",
    },
    {
      key: "gold",
      data: sponsorsData.gold,
      icon: Medal,
      colorClass: "text-accent",
      borderClass: "hover:border-accent",
      layout: "grid",
    },
    {
      key: "silver",
      data: sponsorsData.silver,
      icon: Award,
      colorClass: "text-neutral",
      borderClass: "hover:border-ink",
      layout: "small-grid",
      showAvailable: true,
    },
    {
      key: "ecosystem",
      data: sponsorsData.ecosystem,
      icon: Share2,
      colorClass: "text-indigo",
      borderClass: "hover:border-indigo",
      layout: "small-grid",
    },
  ];

  return (
    <div className="space-y-24 pb-24 pt-8">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-ink cursor-blink rounded-none"></span>
            <span className="text-xs font-mono text-neutral tracking-widest uppercase">
              Resource Logistics
            </span>
          </div>
          <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-4 uppercase">
            Partners <br />
            <span className="text-neutral">& Rewards</span>
          </h1>
        </div>

        <Link
          href="/docs/Hack%20Days%20Sponsorship%20Brochure.pdf"
          target="_blank"
          className="bg-ink text-bg px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-accent transition-colors flex items-center justify-center gap-3 group shrink-0"
        >
          <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          View Prospectus
        </Link>
      </section>

      {/* Partners Grid */}
      <section id="partners" className="space-y-16">
        {sections.map((section) => (
          <div key={section.key}>
            <div
              className={`font-mono text-[10px] ${section.colorClass} mb-4 flex items-center gap-2 uppercase tracking-widest`}
            >
              <section.icon className="w-3 h-3" />
              {section.data.title}
            </div>

            {section.layout === "featured" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {section.data.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className={`relative w-full h-32 md:h-40 flex items-center justify-center p-8 group transition-colors bg-bg border border-structural ${section.borderClass} shadow-sm hover:shadow-struct`}
                  >
                    {sponsor.label && (
                      <div className="absolute top-4 right-4 px-2 py-1 border border-structural font-mono text-[8px] uppercase tracking-tighter text-neutral opacity-60 group-hover:opacity-100 group-hover:border-accent group-hover:text-accent transition-all">
                        {sponsor.label}
                      </div>
                    )}
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={sponsor.width}
                      height={sponsor.height}
                      className="h-16 md:h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}

            {section.layout === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.data.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className={`relative w-full h-32 flex items-center justify-center p-8 group transition-colors bg-bg border border-structural ${section.borderClass} shadow-sm hover:shadow-struct`}
                  >
                    {sponsor.label && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 border border-structural font-mono text-[8px] uppercase tracking-tighter text-neutral opacity-60 group-hover:opacity-100 group-hover:border-indigo group-hover:text-indigo transition-all">
                        {sponsor.label}
                      </div>
                    )}
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={sponsor.width}
                      height={sponsor.height}
                      className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
                {section.showAvailable && (
                  <Link
                    href="mailto:realdarshan@outlook.com"
                    className="w-full h-32 p-6 text-center bg-bg border-2 border-dashed border-structural hover:bg-ink/[0.02] transition-colors cursor-crosshair flex flex-col justify-center items-center"
                  >
                    <div className="font-mono text-[10px] sm:text-xs text-neutral mb-1">
                      AVAILABLE_SLOT
                    </div>
                    <p className="font-sans text-sm text-ink font-bold uppercase flex items-center gap-2">
                      RESERVE NOW
                      <ArrowRight className="w-3 h-3" />
                    </p>
                  </Link>
                )}
              </div>
            )}

            {section.layout === "small-grid" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {section.data.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className={`relative w-full h-28 flex items-center justify-center p-6 group transition-colors bg-bg border border-structural ${section.borderClass} shadow-sm hover:shadow-struct`}
                  >
                    {sponsor.label && (
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 border border-structural font-mono text-[7px] uppercase tracking-tighter text-neutral opacity-60 group-hover:opacity-100 group-hover:border-ink group-hover:text-ink transition-all">
                        {sponsor.label}
                      </div>
                    )}
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={sponsor.width}
                      height={sponsor.height}
                      className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="pt-16 pb-24">
        <div className="font-mono text-xs text-neutral mb-8 flex items-center gap-2">
          <Package className="w-4 h-4" />
          &gt; PRIZES_AND_REWARDS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Top 1 */}
          <div className="bg-ink text-bg p-10 relative overflow-hidden flex flex-col h-full shadow-struct bento-card border border-ink">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.4)_0%,transparent_70%)] rounded-bl-full pointer-events-none"></div>
            <div className="flex justify-between items-start mb-8 relative z-10">
              <Trophy className="w-12 h-12 text-accent" />
              <div className="font-mono text-[10px] bg-accent text-bg px-3 py-1 font-bold uppercase">
                1ST_PLACE
              </div>
            </div>
            <h3 className="font-display font-bold uppercase text-3xl mb-4 relative z-10">
              Top 1 Team
            </h3>
            <div className="space-y-3 mb-8 flex-grow relative z-10">
              <div className="flex items-center gap-3 text-bg/90">
                <Package className="w-5 h-5 text-accent" />
                <span className="font-sans">MLH Swag Kits (worth $300)</span>
              </div>
              <div className="flex items-center gap-3 text-bg/90">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-sans">$800 Render Credits</span>
              </div>
            </div>
          </div>

          {/* Top 2 */}
          <div className="bg-white border-2 border-ink p-10 relative overflow-hidden flex flex-col h-full shadow-struct bento-card">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <Medal className="w-12 h-12 text-indigo" />
              <div className="font-mono text-[10px] bg-indigo text-white px-3 py-1 font-bold uppercase">
                2ND_PLACE
              </div>
            </div>
            <h3 className="font-display font-bold uppercase text-3xl mb-4 text-ink relative z-10">
              Top 2 Team
            </h3>
            <div className="space-y-3 mb-8 flex-grow relative z-10 text-neutral">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-indigo" />
                <span className="font-sans">MLH Swag Kits (worth $300)</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-indigo" />
                <span className="font-sans">$600 Render Credits</span>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="bg-white border border-structural p-10 relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-struct transition-all bento-card">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <Award className="w-12 h-12 text-neutral" />
              <div className="font-mono text-[10px] bg-neutral text-white px-3 py-1 font-bold uppercase">
                3RD_PLACE
              </div>
            </div>
            <h3 className="font-display font-bold uppercase text-3xl mb-4 text-ink relative z-10">
              3rd Place
            </h3>
            <div className="space-y-3 mb-8 flex-grow relative z-10 text-neutral">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-neutral" />
                <span className="font-sans">$500 Render Credits</span>
              </div>
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-neutral" />
                <span className="font-sans">Event Swags</span>
              </div>
            </div>
          </div>

          {/* Quiz Winners */}
          <div className="bg-bg border border-structural p-10 relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-struct transition-all bento-card">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <Star className="w-10 h-10 text-accent" />
              <div className="font-mono text-[10px] border border-accent text-accent px-3 py-1 font-bold uppercase">
                BONUS
              </div>
            </div>
            <h3 className="font-display font-bold uppercase text-3xl mb-4 text-ink relative z-10">
              Quiz Winners
            </h3>
            <div className="space-y-3 mb-8 flex-grow relative z-10 text-neutral">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-accent" />
                <span className="font-sans text-balance">
                  Swags (by HulChul)
                </span>
              </div>
            </div>
          </div>

          {/* All Participants */}
          <div className="lg:col-span-2 bg-white border border-structural p-10 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-8 shadow-sm hover:shadow-struct transition-all bento-card">
            <div className="flex-shrink-0">
              <Globe className="w-16 h-16 text-indigo opacity-20" />
            </div>
            <div className="flex-grow">
              <h3 className="font-display font-bold uppercase text-3xl mb-4 text-ink relative z-10">
                All Participants
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo rounded-full" />
                  <span className="font-sans">Event Stickers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo rounded-full" />
                  <span className="font-sans">$50 Render Credits</span>
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="w-2 h-2 bg-indigo rounded-full" />
                  <span className="font-sans font-bold">
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
