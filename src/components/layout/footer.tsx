"use client";

import Link from "next/link";
import { TerminalSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 mt-8 pb-4 border-t-4 border-ink">
      <div className="pt-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-4">
        
        {/* Brand & Systems */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-ink">
            <TerminalSquare className="w-5 h-5" />
            <span className="font-display font-bold text-lg uppercase tracking-widest">
              Hack Days
            </span>
          </div>
          <p className="font-sans text-neutral text-[10px] sm:text-xs max-w-xs mb-2">
            Initiated by AWS Student Builder Group × OSCode Atria Chapter.
          </p>
          <div className="font-mono text-[10px] text-neutral">
            STATUS: <span className="text-accent font-bold">ONLINE</span>
          </div>
        </div>
 
        {/* Links Array */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-left md:text-right font-sans text-xs text-neutral">
          <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">MLH Code of Conduct</Link>
          <Link href="https://events.mlh.io/events/13939-hack-days-by-atria-summer-of-code" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">MLH Portal</Link>
          <Link href="https://awsatria.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">AWS SBG Atria</Link>
          <Link href="https://osatria.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">OSCode</Link>
        </div>

      </div>

      <div className="mt-4 pt-2 border-t border-structural flex justify-between items-center font-mono text-[10px] text-neutral">
        <div>&copy; {new Date().getFullYear()} ASOC.</div>
        <div>ALL SYSTEMS NOMINAL.</div>
      </div>
    </footer>
  );
}
