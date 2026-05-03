import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "../data/hotelData";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-hotel-page py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-3">Visual Story</p>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h2>
          <div className="w-16 h-px bg-hotel-accent mx-auto mb-4" />
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            A glimpse into the comfort, beauty, and character of Stay O'Clock Hotel & Restaurant
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(img.src)}
              className={`relative overflow-hidden cursor-pointer group ${
                img.span === "col-span-2" ? "col-span-2" : "col-span-1"
              } ${img.span === "col-span-2" ? "min-h-[14rem] sm:min-h-[16rem]" : "min-h-[12rem] sm:h-52"}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs tracking-wide">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-300"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
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
