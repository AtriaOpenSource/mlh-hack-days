import { Package, Globe, Database, Network, Trophy, Medal, Award, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { sponsorsData } from "@/lib/data";

export default function SponsorsPage() {
  const sections = [
    {
      key: "league",
      data: sponsorsData.league,
      icon: Globe,
      colorClass: "text-accent",
      borderClass: "hover:border-accent",
      layout: "featured"
    },
    {
      key: "platinum",
      data: sponsorsData.platinum,
      icon: Trophy,
      colorClass: "text-indigo",
      borderClass: "hover:border-indigo",
      layout: "grid",
      showAvailable: true
    },
    {
      key: "ecosystem",
      data: sponsorsData.ecosystem,
      icon: Network,
      colorClass: "text-neutral",
      borderClass: "hover:border-ink",
      layout: "small-grid"
    },
    {
      key: "venue",
      data: sponsorsData.venue,
      icon: Database,
      colorClass: "text-neutral",
      borderClass: "hover:border-ink",
      layout: "venue"
    }
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
            Partners <br /><span className="text-neutral">& Rewards</span>
          </h1>
        </div>

        <Link
          href="/Hack%20Days%20Sponsorship%20Brochure.pdf"
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
            <div className={`font-mono text-[10px] ${section.colorClass} mb-4 flex items-center gap-2`}>
              <section.icon className="w-3 h-3" />
              {section.data.title}
            </div>

            {section.layout === "featured" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {section.data.sponsors.map((sponsor) => (
                  <div key={sponsor.name} className={`w-full h-32 md:h-40 flex items-center justify-center p-8 group transition-colors bg-bg border border-structural ${section.borderClass} shadow-sm hover:shadow-struct`}>
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
                  <div key={sponsor.name} className={`w-full h-32 flex items-center justify-center p-8 group transition-colors bg-bg border border-structural ${section.borderClass} shadow-sm hover:shadow-struct`}>
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
                  <Link href="mailto:realdarshan@outlook.com" className="w-full h-32 p-6 text-center bg-bg border-2 border-dashed border-structural hover:bg-ink/[0.02] transition-colors cursor-crosshair flex flex-col justify-center items-center">
                    <div className="font-mono text-[10px] sm:text-xs text-neutral mb-1">AVAILABLE_SLOT</div>
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
                  <div key={sponsor.name} className={`w-full h-28 flex items-center justify-center p-6 group transition-colors bg-bg border border-structural ${section.borderClass} shadow-sm hover:shadow-struct`}>
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

            {section.layout === "venue" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.data.sponsors.map((sponsor) => (
                  <div key={sponsor.name} className={`w-full h-28 flex items-center justify-center p-8 group transition-colors bg-bg border border-structural ${section.borderClass} shadow-sm hover:shadow-struct`}>
                    {sponsor.src ? (
                      <Image
                        src={sponsor.src}
                        alt={sponsor.alt}
                        width={sponsor.width}
                        height={sponsor.height}
                        className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <div className="font-display font-bold text-2xl uppercase text-ink/80 group-hover:text-ink transition-colors text-center">{sponsor.name}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="pt-16">
        <div className="font-mono text-xs text-neutral mb-8 flex items-center gap-2">
          <Package className="w-4 h-4" />
          &gt; ARTIFACT_REQUISITIONS [REWARDS]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Top 2 */}
          <div className="bg-ink text-bg p-10 relative overflow-hidden flex flex-col h-full shadow-struct">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.3)_0%,transparent_70%)] rounded-bl-full pointer-events-none"></div>
            <Trophy className="w-10 h-10 text-accent mb-8 relative z-10" />
            <h3 className="font-display font-bold uppercase text-3xl mb-4 relative z-10">Top 2 Teams</h3>
            <p className="font-sans text-base text-bg/80 relative z-10 mb-8 flex-grow">
              Exclusive hardware kits provided by Major League Hacking, alongside priority deployment status.
            </p>
            <div className="font-mono text-[10px] bg-accent text-bg px-3 py-1.5 inline-block font-bold uppercase relative z-10 w-max">
              PRIORITY_01
            </div>
          </div>

          {/* Quiz Winners */}
          <div className="bg-bg border border-structural p-10 relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-struct transition-all">
            <Medal className="w-10 h-10 text-indigo mb-8 relative z-10" />
            <h3 className="font-display font-bold uppercase text-3xl mb-4 relative z-10">Quiz Winners</h3>
            <p className="font-sans text-base text-neutral relative z-10 mb-8 flex-grow">
              Specialized swag packages and limited-edition merchandise for dominant performance in the trivia nodes.
            </p>
            <div className="font-mono text-[10px] text-indigo px-3 py-1.5 inline-block font-bold uppercase relative z-10 w-max">
              PRIORITY_02
            </div>
          </div>

          {/* All Participants */}
          <div className="bg-bg border border-structural p-10 relative overflow-hidden transition-all flex flex-col h-full shadow-sm hover:shadow-struct">
            <Award className="w-10 h-10 text-neutral mb-8 relative z-10" />
            <h3 className="font-display font-bold uppercase text-3xl mb-4 relative z-10">All Nodes</h3>
            <p className="font-sans text-base text-neutral relative z-10 mb-8 flex-grow">
              Cryptographic certificates of participation and minimal physical goodies to commemorate deployment.
            </p>
            <div className="font-mono text-[10px] text-neutral px-3 py-1.5 inline-block font-bold uppercase relative z-10 w-max">
              BASE_ACCESS
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
