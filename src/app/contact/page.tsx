import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";

const contacts = [
  {
    name: "Darshan B",
    role: "ORGANIZER · AWS SBG Leader",
    image: "/images/team/Darshan.webp",
    linkedin: "https://linkedin.com/in/darshanb05",
    email: "realdarshan@outlook.com",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24 pt-8">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-accent cursor-blink rounded-none"></span>
            <span className="text-xs font-mono text-neutral tracking-widest uppercase">
              Reach Out
            </span>
          </div>
          <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-4 uppercase">
            Contact <br />
            <span className="text-neutral">Us</span>
          </h1>
          <p className="font-sans text-lg text-ink/80 max-w-2xl text-balance">
            Questions, feedback, or partnership inquiries — the organizing
            team is one message away.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="bg-ink text-bg px-5 py-3 font-mono text-xs uppercase tracking-widest flex items-center gap-3 shadow-struct">
            <MapPin className="w-4 h-4 text-accent" />
            Atria IT · Bangalore
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {contacts.map((person) => (
          <div
            key={person.name}
            className="bg-bg border-2 border-ink p-6 group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-struct"
          >
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 shrink-0 overflow-hidden border-2 border-ink bg-neutral/10">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl uppercase leading-none mb-1">
                  {person.name}
                </h3>
                <div className="font-mono text-xs text-indigo">{person.role}</div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-structural space-y-3">
              <a
                href={`mailto:${person.email}`}
                className="flex items-center justify-between w-full p-3 bg-ink text-bg font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-ink transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  {person.email}
                </span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-3 border border-structural font-mono text-xs uppercase tracking-wider text-ink hover:bg-ink hover:text-bg transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  LinkedIn
                </span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        ))}

        {/* Note card */}
        <div className="md:col-span-1 bg-ink text-bg p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.4)_0%,transparent_70%)] rounded-bl-full" />
          <div className="relative z-10">
            <div className="font-mono text-[10px] text-bg/60 mb-3 uppercase tracking-widest">
              Looking for the team?
            </div>
            <p className="font-sans text-sm text-bg/80 text-balance">
              For press, partnerships, or anything else — email Darshan and the
              team will get back to you.
            </p>
          </div>
          <div className="relative z-10 mt-8 font-mono text-[10px] text-bg/40">
            ALL SYSTEMS NOMINAL.
          </div>
        </div>
      </section>
    </div>
  );
}
