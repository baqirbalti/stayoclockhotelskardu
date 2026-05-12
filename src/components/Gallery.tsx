import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "../data/hotelData";

const FALLBACK_SRC: string[] = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0c9a7bcc6a?w=1200&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
];

function GalleryImage({ index, src, alt }: { index: number; src: string; alt: string }) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      draggable={false}
      onError={() => {
        const fb = FALLBACK_SRC[index % FALLBACK_SRC.length];
        if (fb && current !== fb) setCurrent(fb);
      }}
    />
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const n = galleryImages.length;

  return (
    <section id="gallery" className="bg-hotel-page py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-hotel-accent">Visual Story</p>
          <h2 className="mb-4 text-4xl font-bold text-slate-800 md:text-5xl">Photo Gallery</h2>
          <div className="mx-auto mb-4 h-px w-16 bg-hotel-accent" />
          <p className="mx-auto max-w-lg text-sm text-slate-600">
            A glimpse into the comfort, beauty, and character of Stay O'Clock Hotel & Restaurant
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-lg shadow-slate-200/60 sm:p-6 md:p-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {galleryImages.map((img, i) => {
              const isWide = img.span === "col-span-2";
              const isLastWide = isWide && i === n - 1;

              const colClass = !isWide
                ? "col-span-1"
                : isLastWide
                  ? "col-span-2 lg:col-span-3"
                  : "col-span-2 lg:col-span-2";

              const aspectClass = !isWide
                ? "aspect-[4/3]"
                : isLastWide
                  ? "aspect-[5/4] sm:aspect-[16/10] lg:aspect-[21/9]"
                  : "aspect-[5/4] sm:aspect-[16/10] lg:aspect-[2/1]";

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(img.src)}
                  className={`group flex w-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white text-left shadow-md shadow-slate-200/40 transition-shadow duration-300 hover:border-hotel-accent/40 hover:shadow-lg ${colClass}`}
                >
                  <div className={`relative w-full overflow-hidden bg-slate-100 ${aspectClass}`}>
                    <GalleryImage index={i} src={img.src} alt={img.alt} />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/45">
                      <ZoomIn className="h-7 w-7 text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover:opacity-100 sm:h-8 sm:w-8" />
                    </div>
                  </div>
                  <div className="border-t border-slate-100 px-3 py-2.5 sm:px-4 sm:py-3">
                    <p className="text-[11px] leading-snug text-slate-600 sm:text-xs md:text-sm">{img.alt}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-white/60 transition-colors hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
