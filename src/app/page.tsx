import { Hero3D } from "@/components/ui/hero-3d";
import { Countdown } from "@/components/ui/countdown";
import { ArrowRight, Terminal, Cpu, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION */}
      <section id="intro" className="pt-0">
        {/* Countdown Banner */}
        <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] border-b border-ink/10 bg-white/50 backdrop-blur-md py-4 mb-8">
          <Countdown />
        </div>

        <div className="relative w-full h-[65vh] min-h-[500px] md:h-[75vh] md:min-h-[650px] flex items-center justify-center mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-20 pointer-events-none z-0"></div>

          {/* 3D Interactive Artifact */}
          <div className="absolute inset-0 flex items-center justify-center z-10 scale-[1.1] md:scale-[1.4]">
            <Hero3D />
          </div>

          {/* Typography Layout */}
          {/* Top Left: WHERE */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 pointer-events-none">
            <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-none tracking-tighter uppercase text-ink">
              Where
            </h1>
          </div>

          {/* Top Right: CODE */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 pointer-events-none text-right">
            <h1
              className="font-display font-bold text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-none tracking-tighter uppercase text-transparent"
              style={{ WebkitTextStroke: "1.5px #1e1b4b" }}
            >
              Code
            </h1>
          </div>

          {/* Bottom Left: MEETS */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 pointer-events-none">
            <h1
              className="font-display font-bold text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-none tracking-tighter uppercase text-transparent"
              style={{ WebkitTextStroke: "1.5px #1e1b4b" }}
            >
              Meets
            </h1>
          </div>

          {/* Bottom Right: CHAOS */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 pointer-events-none text-right">
            <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-none tracking-tighter uppercase text-ink">
              Chaos
            </h1>
          </div>
        </div>

        {/* Text and CTAs below */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <p className="font-sans text-neutral text-xl md:text-2xl leading-relaxed max-w-xl text-balance">
            An 8-hour MLH Hack Day designed for builders, creators, and
            innovators. Executed jointly by AWS Student Builder Group and OSCode
            Atria Chapter.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
            <Link
              href="https://events.mlh.io/events/13939-hack-days-by-atria-summer-of-code"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-bg px-10 py-5 font-mono text-base uppercase tracking-wider hover:bg-accent transition-colors flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/schedule"
              className="bg-ink/5 px-10 py-5 font-mono text-base text-ink uppercase tracking-wider hover:bg-ink/10 transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / TRACKS SECTION */}
      <section className="pt-16 relative">
        <div className="flex flex-col mb-12">
          <h2 className="text-4xl font-display font-medium uppercase tracking-widest text-ink mb-2">
            Event Tracks
          </h2>
          <p className="text-neutral font-sans max-w-lg">
            Choose your domain and build the future. We've curated the most
            impactful technical tracks for this year's Hack Days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Generative AI",
              desc: "Build next-gen agents, RAG-powered systems, or creative tools using the latest LLMs and multi-modal models.",
            },
            {
              icon: Shield,
              title: "Cybersecurity",
              desc: "Architect zero-trust systems, privacy-preserving tools, and resilient infrastructure to defend against modern threats.",
            },
            {
              icon: Cpu,
              title: "Cloud-Native",
              desc: "Leverage serverless architectures, edge computing, and auto-scaling systems to build globally distributed applications.",
            },
            {
              icon: Terminal,
              title: "Web3 & DeFi",
              desc: "Develop decentralized finance protocols, smart contracts, or blockchain-based identity solutions for a trustless web.",
            },
            {
              icon: Globe,
              title: "Sustainability",
              desc: "Create green tech solutions, energy-efficient algorithms, or climate monitoring tools to drive environmental impact.",
            },
            {
              icon: Zap,
              title: "FinTech",
              desc: "Innovate in digital payments, open banking APIs, and automated financial management tools for the next economy.",
            },
          ].map((track, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-structural hover:border-ink transition-all shadow-sm hover:shadow-struct flex flex-col h-full group relative overflow-hidden bento-card"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <track.icon className="w-24 h-24 transform translate-x-4 -translate-y-4 text-ink" />
              </div>
              <div className="w-12 h-12 bg-ink/5 flex items-center justify-center mb-6">
                <track.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-mono mb-3 text-ink font-bold">
                {track.title}
              </h3>
              <p className="text-sm text-neutral font-sans leading-relaxed flex-1">
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. METRICS / STATS SECTION */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
        {[
          {
            label: "Duration",
            val: "8H",
            icon: <Terminal className="w-5 h-5" />,
            color: "text-ink",
          },
          {
            label: "Prizes",
            val: "$2,500",
            icon: <Zap className="w-5 h-5" />,
            color: "text-accent",
          },
          {
            label: "Capacity",
            val: "125+",
            icon: <Cpu className="w-5 h-5" />,
            color: "text-indigo",
          },
          {
            label: "Status",
            val: "LIVE",
            icon: <Shield className="w-5 h-5" />,
            color: "text-green-600",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="group p-8 flex flex-col items-start justify-between bg-white border border-structural hover:border-ink transition-all relative overflow-hidden bento-card"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {stat.icon}
            </div>
            <div
              className={`text-4xl md:text-5xl font-display ${stat.color} mb-4 font-bold relative z-10`}
            >
              {stat.val}
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <span className="text-[10px] font-mono text-neutral tracking-widest uppercase">
                {stat.label}
              </span>
              <div className="h-[1px] w-4 bg-structural group-hover:w-8 transition-all" />
            </div>
          </div>
        ))}
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="p-12 md:p-20 bg-ink text-bg relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-10" />
        <div className="absolute right-0 top-0 w-64 h-64 bg-accent/20 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 uppercase">
            Ready to{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #faf9f6" }}
            >
              Build?
            </span>
          </h2>
          <p className="text-lg font-sans text-bg/70 mb-10 text-balance">
            Join elite student engineers building the next generation of
            scalable infrastructure and intelligent systems. Registration is
            open for a limited time.
          </p>
          <Link
            href="https://events.mlh.io/events/13939-hack-days-by-atria-summer-of-code"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-bg px-10 py-5 font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-ink transition-all flex items-center gap-3 group"
          >
            Register Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
