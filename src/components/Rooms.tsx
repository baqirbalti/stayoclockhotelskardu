import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, BedDouble, Wifi, Zap, Droplets, Coffee } from "lucide-react";
import { rooms } from "../data/hotelData";

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="w-4 h-4" />,
  Electricity: <Zap className="w-4 h-4" />,
  "Warm Water": <Droplets className="w-4 h-4" />,
  Breakfast: <Coffee className="w-4 h-4" />,
};

export default function Rooms() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const go = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => {
        if (dir === "right") return (prev + 1) % rooms.length;
        return (prev - 1 + rooms.length) % rooms.length;
      });
      setAnimating(false);
    }, 400);
  };

  const room = rooms[active];

  return (
    <section id="rooms" className="bg-hotel-section py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-3">Accommodations</p>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold mb-4">Our Rooms</h2>
          <div className="w-16 h-px bg-hotel-accent mx-auto" />
        </div>

        <div className="relative">
          <div
            className={`grid lg:grid-cols-2 gap-0 overflow-hidden transition-all duration-400 ${
              animating
                ? direction === "right"
                  ? "-translate-x-4 opacity-0"
                  : "translate-x-4 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
            style={{ transition: "opacity 0.4s, transform 0.4s" }}
          >
            <div className="relative overflow-hidden group h-[420px] lg:h-auto">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {room.featured && (
                <div className="absolute top-4 left-4 bg-hotel-accent text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                  Most Popular
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between border border-slate-200 bg-white p-10 shadow-sm">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-slate-800 text-3xl font-bold mb-1">{room.name}</h3>
                    <div className="w-10 h-px bg-hotel-accent mb-4" />
                  </div>
                  <div className="text-right">
                    <p className="text-hotel-accent text-2xl font-bold">
                      {room.pricePKR.toLocaleString()} PKR
                    </p>
                    <p className="text-slate-500 text-sm">/ {room.priceUSD} USD per night</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 text-sm">{room.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-700">
                    <BedDouble className="w-4 h-4 text-hotel-accent" />
                    <span className="text-sm">{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Users className="w-4 h-4 text-hotel-accent" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-slate-500 text-xs tracking-widest uppercase mb-3">Includes</p>
                  <div className="flex flex-wrap gap-3">
                    {room.amenities.map((a) => (
                      <div
                        key={a}
                        className="flex items-center gap-2 border border-slate-200 bg-hotel-page text-xs text-slate-600 px-3 py-2 transition-colors duration-300 hover:border-hotel-accent/50"
                      >
                        <span className="text-hotel-accent">{amenityIcons[a]}</span>
                        {a}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-400 text-xs mb-6">
                  * Extra Rs.1,500/- charged for additional Mattress & Breakfast
                </p>
              </div>

              <a
                href={`https://wa.me/923111556691?text=Hello! I'd like to book the ${encodeURIComponent(room.name)} at Stay O'Clock Hotel, Skardu.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-hotel-accent hover:bg-hotel-accent-hover text-black font-bold text-xs tracking-widest uppercase px-6 py-4 transition-all duration-300 text-center hover:shadow-[0_0_20px_rgba(201,160,68,0.4)]"
              >
                Book This Room via WhatsApp
              </a>
            </div>
          </div>

          <button
            onClick={() => go("left")}
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-slate-800/80 text-white transition-all duration-300 hover:bg-hotel-accent hover:text-black"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go("right")}
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-slate-800/80 text-white transition-all duration-300 hover:bg-hotel-accent hover:text-black"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {rooms.map((r, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > active ? "right" : "left"); setActive(i); }}
              className={`text-xs tracking-widest uppercase py-2 px-4 border transition-all duration-300 ${
                i === active
                  ? "border-hotel-accent bg-hotel-accent/15 text-hotel-accent-muted"
                  : "border-slate-300 text-slate-500 hover:border-slate-400"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
