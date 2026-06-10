import { Shield, Code2, Cpu, Link2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const organizers = [
    {
      name: "Darshan B",
      role: "ORGANIZER",
      org: "AWS SBG Leader",
      linkedin: "https://linkedin.com/in/darshanb05",
      image: "/images/team/Darshan.webp",
      icon: Shield,
    },
    {
      name: "Pratham S",
      role: "ORGANIZER",
      org: "OSCode Lead",
      linkedin: "https://linkedin.com/in/pratham-is-a-dev",
      image: "/images/team/Pratham.webp",
      icon: Code2,
    },
    {
      name: "Aniket R",
      role: "MARKETING",
      org: "Marketing Lead",
      linkedin: "https://linkedin.com/in/aniket-rajj",
      image: "/images/team/Aniket.webp",
      icon: Cpu,
    },
  ];

  return (
    <div className="space-y-16 pb-24 pt-8">
      {/* Intro Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-accent cursor-blink rounded-none"></span>
          <span className="text-xs font-mono text-neutral tracking-widest uppercase">
            Organizing Team
          </span>
        </div>
        <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-4 uppercase">
          Meet the <br />
          <span className="text-neutral">Organizers</span>
        </h1>
        <p className="font-sans text-lg text-ink/80 max-w-2xl text-balance">
          Meet the dedicated team working behind the scenes to make Hack Days an
          exceptional experience for all participants.
        </p>
      </section>

      <section id="personnel" className="mt-16">
        <div className="flex items-center justify-between mb-8 border-b pb-2">
          <h2 className="font-display text-2xl font-bold uppercase">
            Team Members
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((op) => (
            <div
              key={op.name}
              className="bg-bg border border-structural p-6 group transition-colors relative overflow-hidden hover:border-ink shadow-sm hover:-translate-y-1 hover:shadow-struct"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <op.icon className="w-32 h-32 transform translate-x-8 -translate-y-8 text-ink" />
              </div>

              <div className="aspect-square bg-neutral/10 mb-6 border border-structural relative overflow-hidden flex items-center justify-center">
                <Image
                  src={op.image}
                  alt={op.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors"></div>
                <div className="font-mono text-[10px] text-bg absolute top-2 right-2 border border-ink px-1 bg-ink z-10">
                  {op.role}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-display font-bold text-xl uppercase leading-none mb-1">
                    {op.name}
                  </h4>
                  <div className="font-mono text-xs text-indigo">{op.org}</div>
                </div>

                <div className="pt-4 border-t border-structural">
                  <Link
                    href={op.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-2 bg-ink text-bg font-mono text-[10px] uppercase hover:bg-accent hover:text-ink transition-colors group/link"
                  >
                    <span className="flex items-center gap-2">
                      <Link2 className="w-3 h-3" />
                      View Profile
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover/link:opacity-100" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
