import Link from "next/link";
import { Camera, ExternalLink } from "lucide-react";
import { getGalleryPhotos } from "@/lib/photos";
import { GalleryGrid } from "@/components/ui/gallery-grid";

export default async function GalleryPage() {
  const photos = await getGalleryPhotos();

  return (
    <div className="space-y-16 pb-24 pt-8">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-accent cursor-blink rounded-none"></span>
            <span className="text-xs font-mono text-neutral tracking-widest uppercase">
              Event Archive
            </span>
          </div>
          <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-4 uppercase">
            Photo <br />
            <span className="text-neutral">Gallery</span>
          </h1>
          <p className="font-sans text-lg text-ink/80 max-w-2xl text-balance">
            Every moment from Hack Days 2026 — the builds, the chaos, the
            winners. Relive the day.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="bg-ink text-bg px-5 py-3 font-mono text-xs uppercase tracking-widest flex items-center gap-3 shadow-struct">
            <Camera className="w-4 h-4 text-accent" />
            {String(photos.length).padStart(3, "0")} SHOTS
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section>
        <GalleryGrid photos={photos} />
      </section>

      <section className="flex justify-center pb-8">
        <Link
          href="https://stopme.in/event/bf1c97c6-6caf-4664-91d5-cbd63d22cd21"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border-2 border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:bg-accent hover:text-ink"
        >
          View Full Album
          <ExternalLink className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
