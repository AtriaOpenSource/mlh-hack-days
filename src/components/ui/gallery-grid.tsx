"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { GalleryPhoto } from "@/lib/photos";

const GAP = 6;
const BASE_ROW_HEIGHT = 250;

interface Row {
  photos: GalleryPhoto[];
  sum: number;
}

function buildRows(photos: GalleryPhoto[], width: number): Row[] {
  const count = photos.length;
  if (count === 0 || width <= 0) return [];

  const total = photos.reduce((acc, photo) => acc + photo.ratio, 0);
  const target = total / Math.max(1, Math.round(total / (width / BASE_ROW_HEIGHT)));

  const rows: Row[] = [];
  let index = 0;

  while (index < count) {
    const start = index;
    let sum = 0;

    while (index < count && sum < target) {
      sum += photos[index].ratio;
      index++;
    }

    if (index < count && index - start > 1) {
      const previousSum = sum - photos[index - 1].ratio;
      if (target - previousSum < sum - target) {
        index--;
        sum = previousSum;
      }
    }

    rows.push({ photos: photos.slice(start, index), sum });
  }

  return rows;
}

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setWidth(el.getBoundingClientRect().width);
    const observer = new ResizeObserver(() => requestAnimationFrame(update));

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rows = useMemo(() => buildRows(photos, width), [photos, width]);

  return (
    <div ref={containerRef} className="w-full">
      {width === 0 ? (
        <div className="h-[60vh] bg-grid bg-grid-pattern opacity-10" />
      ) : (
        <div className="space-y-2">
          {rows.map((row, rowIndex) => {
            const height =
              (width - GAP * (row.photos.length - 1)) / row.sum;

            return (
              <div key={rowIndex} className="flex" style={{ gap: GAP }}>
                {row.photos.map((photo, photoIndex) => (
                  <figure
                    key={photo.src}
                    className="relative overflow-hidden bg-bg border-2 border-ink group"
                    style={{ width: height * photo.ratio, height }}
                  >
                    <Image
                      src={photo.src}
                      alt={`Hack Days photo ${photoIndex + 1}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
                    <figcaption className="absolute top-3 left-3 font-mono text-[10px] text-bg bg-ink px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {String(photoIndex + 1).padStart(3, "0")}
                    </figcaption>
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-bg opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                      <ImageIcon className="w-3 h-3" />
                      <span>Photo</span>
                    </div>
                  </figure>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
