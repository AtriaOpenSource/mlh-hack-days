import React from "react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="space-y-16 pb-24 pt-8">
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-indigo cursor-blink rounded-none"></span>
          <span className="text-xs font-mono text-neutral tracking-widest uppercase">
            FAQ
          </span>
        </div>

        <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-4 uppercase">
          Frequently Asked <br />{" "}
          <span className="text-neutral">Questions</span>
        </h1>

        <p className="font-sans text-lg text-ink/80 max-w-2xl text-balance">
          Answers to common questions about Hack Days. If you still have a
          question, reach out to the organizers.
        </p>
      </section>

      <section className="space-y-8">
        <div className="bg-white border border-structural p-8 bento-card">
          <h2 className="text-lg font-mono font-bold mb-2">
            Is the registration free?
          </h2>
          <p className="text-neutral font-sans">Yes — it's completely free.</p>
        </div>

        <div className="bg-white border border-structural p-8 bento-card">
          <h2 className="text-lg font-mono font-bold mb-2">
            What is the team size?
          </h2>
          <p className="text-neutral font-sans">
            Registration is individual. You can form teams on the day of the
            event — teams should be 2–4 people.
          </p>
        </div>

        <div className="bg-white border border-structural p-8 bento-card">
          <h2 className="text-lg font-mono font-bold mb-2">
            Is the hackathon offline?
          </h2>
          <p className="text-neutral font-sans">
            Yes — this event is completely offline and hosted at{" "}
            <a
              className="text-accent underline"
              href="https://maps.app.goo.gl/WNTRtd3DkH6AxrjE8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atria Institute of Technology
            </a>
            .
          </p>
        </div>

        <div className="bg-white border border-structural p-8 bento-card">
          <h2 className="text-lg font-mono font-bold mb-2">
            Will lunch be provided?
          </h2>
          <p className="text-neutral font-sans">
            Yes — we're providing lunch to refuel everyone.
          </p>
        </div>

        <div className="bg-white border border-structural p-8 bento-card">
          <h2 className="text-lg font-mono font-bold mb-2">
            Can I bring a premade project?
          </h2>
          <p className="text-neutral font-sans">
            We do not encourage bringing premade projects. We're providing many
            resources during the hackathon and want you to make the best use of
            them to build something new and exciting.
          </p>
        </div>

        <div className="bg-white border border-structural p-8 bento-card">
          <h2 className="text-lg font-mono font-bold mb-2">
            Is there a selection criteria?
          </h2>
          <p className="text-neutral font-sans">
            No — everyone is welcome to take part. We do have a venue limit of
            125 participants, but we aim to accommodate everyone who wants to
            join.
          </p>
        </div>
      </section>

      <footer className="mt-12">
        <p className="text-sm text-neutral font-sans">
          Still have a question? Join our{" "}
          <Link
            href="https://chat.whatsapp.com/DJGSCNcFUqXD5jJw4a2YaO"
            className="text-accent underline"
            target="_blank"
          >
            WhatsApp community
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
