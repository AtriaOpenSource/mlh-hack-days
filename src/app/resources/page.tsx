import { FileText, Download, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Participant Handbook",
      description: "Everything you need to know about Hack Days: rules, logistics, and tips to help you build better.",
      path: "/docs/Hack_Days_Participants_Handbook_v2.pdf",
      icon: FileText,
      color: "bg-indigo",
    },
    {
      title: "Event Agenda",
      description: "Detailed schedule and timeline for the 8-hour sprint. Don't miss any sessions!",
      path: "/docs/Hack%20Days%20Agenda.pdf",
      icon: Calendar,
      color: "bg-accent",
    },
  ];

  return (
    <div className="space-y-16 pb-24 pt-8">
      {/* Intro Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-accent cursor-blink rounded-none"></span>
          <span className="text-xs font-mono text-neutral tracking-widest uppercase">
            Downloads
          </span>
        </div>
        <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-4 uppercase">
          Participant <br />
          <span className="text-neutral">Resources</span>
        </h1>
        <p className="font-sans text-lg text-ink/80 max-w-2xl text-balance">
          Access essential documents, guides, and schedules to help you navigate
          Hack Days and make the most of your experience.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((res) => (
          <div
            key={res.title}
            className="group bg-bg border border-structural p-8 shadow-sm hover:shadow-struct hover:-translate-y-1 transition-all relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${res.color} opacity-5 rounded-bl-full transform translate-x-8 -translate-y-8`} />
            
            <div className="flex items-start justify-between mb-8">
              <div className={`p-4 ${res.color} text-bg`}>
                <res.icon className="w-6 h-6" />
              </div>
              <div className="font-mono text-[10px] text-neutral uppercase tracking-widest">
                Resource_File
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold uppercase mb-3">
              {res.title}
            </h3>
            <p className="font-sans text-neutral mb-8 text-sm">
              {res.description}
            </p>

            <div className="flex gap-4">
              <Link
                href={res.path}
                target="_blank"
                className="flex-grow flex items-center justify-center gap-2 bg-ink text-bg px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-accent transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Link>
              <Link
                href={res.path}
                target="_blank"
                className="flex items-center justify-center bg-bg border border-structural px-4 py-3 hover:border-ink transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Help Note */}
      <section className="bg-structural/10 p-8 border-l-4 border-accent">
        <h4 className="font-display font-bold uppercase mb-2">Need Help?</h4>
        <p className="font-sans text-sm text-neutral">
          If you have trouble accessing these resources or need additional information,
          please reach out to the organizing team or find us at the Check-in desk.
        </p>
      </section>
    </div>
  );
}
