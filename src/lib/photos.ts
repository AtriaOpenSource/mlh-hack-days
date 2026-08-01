import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PHOTO_DIR = path.join(process.cwd(), "public", "images", "photos");

export interface GalleryPhoto {
  src: string;
  ratio: number;
}

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const files = fs
    .readdirSync(PHOTO_DIR)
    .filter((file) => /\.(jpe?g|png|webp|gif|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const photos: GalleryPhoto[] = [];

  for (const file of files) {
    try {
      const meta = await sharp(path.join(PHOTO_DIR, file)).metadata();
      if (meta.width && meta.height) {
        photos.push({
          src: `/images/photos/${encodeURIComponent(file)}`,
          ratio: meta.width / meta.height,
        });
      }
    } catch {
      // skip unsupported / corrupt files
    }
  }

  return photos;
}
