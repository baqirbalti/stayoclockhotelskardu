import { useState } from "react";
import { Users, BedDouble, Wifi, Zap, Droplets, Coffee } from "lucide-react";
import { rooms } from "../data/hotelData";
import type { ReactNode } from "react";

const amenityIcons: Record<string, ReactNode> = {
  WiFi: <Wifi className="w-4 h-4" />,
  Electricity: <Zap className="w-4 h-4" />,
  "Warm Water": <Droplets className="w-4 h-4" />,
  Breakfast: <Coffee className="w-4 h-4" />,
};

/** Shown if `public/images/rooms/*.png` are missing or fail to load */
const ROOM_IMAGE_FALLBACK: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=80",
  2: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1400&q=80",
  3: "https://images.unsplash.com/photo-1631049307264-da0c9a7bcc6a?w=1400&q=80",
};

function RoomImage({ roomId, src, alt }: { roomId: number; src: string; alt: string }) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-center"
      onError={() => {
        const fallback = ROOM_IMAGE_FALLBACK[roomId];
        if (fallback && current !== fallback) setCurrent(fallback);
      }}
    />
  );
}

export default function Rooms() {
  return (
    <section id="rooms" className="bg-hotel-section py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-hotel-accent">Accommodations</p>
          <h2 className="mb-4 text-4xl font-bold text-slate-800 md:text-5xl">Our Rooms</h2>
          <div className="mx-auto h-px w-16 bg-hotel-accent" />
        </div>

        <div className="flex flex-col gap-10">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="overflow-hidden rounded-xl border border-slate-200/80 bg-hotel-card shadow-md shadow-slate-200/50"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 md:aspect-[2/1]">
                <RoomImage roomId={room.id} src={room.image} alt={room.name} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {room.featured && (
                  <div className="absolute left-4 top-4 bg-hotel-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                    Most Popular
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-6 p-8 md:p-10">
                <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 md:text-3xl">{room.name}</h3>
                    <div className="mt-2 h-px w-10 bg-hotel-accent" />
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="text-2xl font-bold text-hotel-accent">
                      {room.pricePKR.toLocaleString()} PKR
                    </p>
                    <p className="text-sm text-slate-500">/ {room.priceUSD} USD per night</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">{room.description}</p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 text-slate-700">
                    <BedDouble className="h-4 w-4 shrink-0 text-hotel-accent" />
                    <span className="text-sm">{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Users className="h-4 w-4 shrink-0 text-hotel-accent" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">Includes</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((a) => (
                      <div
                        key={a}
                        className="flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 transition-colors duration-300 hover:border-hotel-accent/50"
                      >
                        <span className="text-hotel-accent">{amenityIcons[a]}</span>
                        {a}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/923111556691?text=Hello! I'd like to book the ${encodeURIComponent(room.name)} at Stay O'Clock Hotel, Skardu.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-hotel-accent py-4 text-center text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-hotel-accent-hover hover:shadow-[0_0_20px_rgba(201,160,68,0.4)]"
                >
                  Book This Room via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
