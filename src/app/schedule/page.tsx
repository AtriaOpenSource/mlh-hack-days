export default function SchedulePage() {
  return (
    <div className="space-y-16 pb-24 pt-8">
      {/* Intro Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-indigo cursor-blink rounded-none"></span>
          <span className="text-xs font-mono text-neutral tracking-widest uppercase">
            Protocol Timeline
          </span>
        </div>
        <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-4 uppercase">
          Operational <br /><span className="text-neutral">Timeline</span>
        </h1>
        <p className="font-sans text-lg text-ink/80 max-w-2xl text-balance">
          Strict execution schedules for Hack Days. All nodes are expected to synchronize and follow the deployment protocol accurately.
        </p>
      </section>

      <section id="timeline" className="relative mt-16">
        <div className="timeline-rail"></div>

        {/* 08:00 AM - Registration */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-bg border-2 border-ink rounded-full z-10"></div>
          <div className="font-mono text-sm font-bold text-ink md:text-right pt-1">
            08:00 AM - 08:45 AM
          </div>
          <div className="bg-bg border border-structural p-8 shadow-sm hover:shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all border-l-4 border-l-ink">
            <h3 className="font-display text-xl font-bold uppercase mb-2">
              Check-in & Registration
            </h3>
            <p className="font-sans text-sm text-neutral">
              Welcome hackers, distribute kits, team formation. Sector doors open.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="font-mono text-[10px] bg-ink/5 text-ink px-2 py-1 uppercase">Lobby</span>
            </div>
          </div>
        </div>

        {/* 08:45 AM - Opening Ceremony */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-bg border-2 border-neutral rounded-full z-10"></div>
          <div className="font-mono text-sm font-bold text-neutral md:text-right pt-1">
            08:45 AM - 09:00 AM
          </div>
          <div className="bg-bg border border-structural p-8 shadow-sm hover:shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all border-l-4 border-l-neutral">
            <h3 className="font-display text-xl font-bold uppercase mb-2">
              Opening Ceremony
            </h3>
            <p className="font-sans text-sm text-neutral">
              Welcome note, event rules, and vision.
            </p>
          </div>
        </div>

        {/* 09:00 AM - Session 1 */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-bg border-2 border-accent rounded-full z-10"></div>
          <div className="font-mono text-sm font-bold text-accent md:text-right pt-1">
            09:00 AM - 09:30 AM
          </div>
          <div className="bg-bg border border-structural p-8 shadow-sm hover:shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all border-l-4 border-l-accent">
            <h3 className="font-display text-xl font-bold uppercase mb-2">
              Session 1: Intro to Open Source + GitHub + AWS Deployment
            </h3>
            <p className="font-sans text-sm text-neutral">
              Led by Darshan B (AWS Student Builder Group Leader). High-level briefing on scalable deployment architecture, cloud primitives, and repository management.
            </p>
            <div className="mt-4 font-mono text-[10px] bg-accent/10 text-accent px-2 py-1 inline-block font-bold uppercase">
              MANDATORY_BRIEFING
            </div>
          </div>
        </div>

        {/* 09:30 AM - Hacking Hours */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-accent border-2 border-bg rounded-full z-10 animate-pulse"></div>
          <div className="font-mono text-sm font-bold text-accent md:text-right pt-1">
            09:30 AM - 05:00 PM
          </div>
          <div className="bg-ink border-thick text-bg p-8 shadow-struct relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.3)_0%,transparent_70%)] rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/30"></div>
            <h3 className="font-display text-xl font-bold uppercase mb-2 relative z-10">
              Official Hacking Hours
            </h3>
            <p className="font-sans text-sm text-bg/70 relative z-10">
              Mainframe unlocked. Uninterrupted execution phase. Build time + mentor support on the floor. Runs until 5:00 PM.
            </p>
            <div className="mt-4 flex gap-3">
              <div className="font-mono text-[10px] bg-accent text-bg px-2 py-1 inline-block font-bold uppercase relative z-10">
                ACTIVE_HACKING
              </div>
              <div className="font-mono text-[10px] border border-bg/30 text-bg/70 px-2 py-1 inline-block font-bold uppercase relative z-10">
                MENTOR_SUPPORT_AVAILABLE
              </div>
            </div>
          </div>
        </div>

        {/* 11:30 AM - Quiz 1 */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-accent border-2 border-bg rounded-full z-10"></div>
          <div className="font-mono text-sm font-bold text-accent md:text-right pt-1">
            11:30 AM - 11:50 AM
          </div>
          <div className="bg-bg border-thick border-accent p-8 shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <h3 className="font-display text-xl font-bold uppercase mb-2 text-accent">
              Kahoot Quiz 1
            </h3>
            <p className="font-sans text-sm text-neutral group-hover:text-ink transition-colors">
              Fun tech quizzes with exciting swag for winners. Stay alert.
            </p>
            <div className="mt-4 font-mono text-[9px] text-accent tracking-tighter font-black opacity-40">
              // REWARD_MODULE_ACTIVE
            </div>
          </div>
        </div>

        {/* 12:00 PM - Lunch */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-bg border-2 border-neutral rounded-full z-10 shadow-[0_0_8px_rgba(163,163,163,0.3)]"></div>
          <div className="font-mono text-sm font-bold text-neutral md:text-right pt-1">
            12:00 PM - 01:00 PM
          </div>
          <div className="bg-bg border-thick border-structural p-8 shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-full bg-neutral/5 -skew-x-12 translate-x-16 group-hover:translate-x-12 transition-transform"></div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <h3 className="font-display text-xl font-bold uppercase mb-2 flex items-center gap-3">
                  Lunch Break
                  <span className="text-[10px] bg-neutral/10 text-neutral px-2 py-0.5 font-mono animate-pulse border border-neutral/20">RECHARGING...</span>
                </h3>
                <p className="font-sans text-sm text-neutral/80">
                  Systems offline for energy replenishment. Mandatory biomass intake protocol. All nodes stand by.
                </p>
              </div>
              <div className="hidden sm:block opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1" y="6" width="18" height="12" rx="2"/><path d="M23 10v4"/><line x1="5" y1="10" x2="5" y2="14" strokeWidth="2" className="text-neutral"/></svg>
              </div>
            </div>
            <div className="mt-4 font-mono text-[9px] text-neutral/40 tracking-widest uppercase">
              // energy_replenishment_in_progress
            </div>
          </div>
        </div>

        {/* 01:00 PM - Technical Workshop */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-bg border-2 border-indigo rounded-full z-10"></div>
          <div className="font-mono text-sm font-bold text-indigo md:text-right pt-1">
            01:00 PM - 01:30 PM
          </div>
          <div className="bg-bg border border-structural p-8 shadow-sm hover:shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all border-l-4 border-l-indigo">
            <h3 className="font-display text-xl font-bold uppercase mb-2">
              Technical Workshop
            </h3>
            <p className="font-sans text-sm text-neutral">
              Hands-on session on emerging tech / tools (TBD).
            </p>
          </div>
        </div>

        {/* 01:30 PM - Quiz 2 */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-accent border-2 border-bg rounded-full z-10"></div>
          <div className="font-mono text-sm font-bold text-accent md:text-right pt-1">
            01:30 PM - 01:50 PM
          </div>
          <div className="bg-bg border-thick border-accent p-8 shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <h3 className="font-display text-xl font-bold uppercase mb-2 text-accent">
              Kahoot Quiz 2
            </h3>
            <p className="font-sans text-sm text-neutral group-hover:text-ink transition-colors">
              Fun tech quizzes with exciting swag for winners. Stay alert.
            </p>
            <div className="mt-4 font-mono text-[9px] text-accent tracking-tighter font-black opacity-40">
              // REWARD_MODULE_ACTIVE
            </div>
          </div>
        </div>

        {/* 03:30 PM - Quiz 3 */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-accent border-2 border-bg rounded-full z-10"></div>
          <div className="font-mono text-sm font-bold text-accent md:text-right pt-1">
            03:30 PM - 03:50 PM
          </div>
          <div className="bg-bg border-thick border-accent p-8 shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <h3 className="font-display text-xl font-bold uppercase mb-2 text-accent">
              Kahoot Quiz 3
            </h3>
            <p className="font-sans text-sm text-neutral group-hover:text-ink transition-colors">
              Fun tech quizzes with exciting swag for winners. Stay alert.
            </p>
            <div className="mt-4 font-mono text-[9px] text-accent tracking-tighter font-black opacity-40">
              // REWARD_MODULE_ACTIVE
            </div>
          </div>
        </div>

        {/* 05:00 PM - Judging */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-indigo border-2 border-bg rounded-full z-10 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
          <div className="font-mono text-sm font-bold text-indigo md:text-right pt-1">
            05:00 PM - 05:30 PM
          </div>
          <div className="bg-bg border-thick border-indigo p-8 shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo via-accent to-indigo opacity-30"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 border-indigo/10 border-thick rotate-45"></div>
            <h3 className="font-display text-xl font-bold uppercase mb-2">
              Project Judging
            </h3>
            <p className="font-sans text-sm text-neutral">
              Demo round + evaluation by judges. Performance metrics analysis and final review of all deployed artifacts.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="w-2 h-2 bg-indigo rounded-full animate-pulse"></span>
              <span className="font-mono text-[9px] text-indigo uppercase font-bold">Protocol: Critical_Review</span>
            </div>
          </div>
        </div>

        {/* 05:30 PM - Closing Ceremony */}
        <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 mb-10 pl-8 md:pl-0">
          <div className="absolute left-[10px] md:left-[138px] top-2 w-3 h-3 bg-bg border-2 border-ink rounded-full z-10"></div>
          <div className="font-mono text-sm font-bold text-ink md:text-right pt-1">
            05:30 PM - 06:00 PM
          </div>
          <div className="bg-bg border-thick border-ink p-8 shadow-sm hover:shadow-struct hover:-translate-y-1 hover:-translate-x-1 transition-all border-l-4 border-l-ink">
            <h3 className="font-display text-xl font-bold uppercase mb-2">
              Winner Announcement & Closing Ceremony
            </h3>
            <p className="font-sans text-sm text-neutral">
              Prizes, certificates, and vote of thanks. End of transmission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
