import { useEffect, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { hotelInfo } from "../data/hotelData";

/** Files in `public/images/gallery/` are served at `/images/gallery/...` */
const GALLERY = "/images/gallery";

const slides = [
  {
    image: `${GALLERY}/exterior-dusk.png`,
    headline: "Where Mountains Meet Luxury",
    sub: "Experience the finest hospitality in the heart of Skardu",
  },
  {
    image: `${GALLERY}/${encodeURIComponent("WhatsApp Image 2026-05-12 at 5.03.52 PM.jpeg")}`,
    headline: "Your Gateway to the Karakoram",
    sub: "Comfort, elegance, and breathtaking views await you",
  },
  {
    image: `${GALLERY}/exterior-night.png`,
    headline: "Rest. Explore. Return.",
    sub: "A project of Qadeeri Group of Businesses, Skardu",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setAnimating(false);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover"
            decoding="async"
            fetchPriority={i === 0 ? "high" : "low"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div
          className={`transition-all duration-700 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Stay O'Clock Hotel & Restaurant
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 max-w-4xl">
            {slides[current].headline}
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {slides[current].sub}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href={`https://wa.me/${hotelInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-hotel-accent hover:bg-hotel-accent-hover text-black font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,160,68,0.5)] min-w-[200px] text-center"
            >
              Book via WhatsApp
            </a>
            <button
              onClick={() => document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/40 hover:border-hotel-accent text-white hover:text-hotel-accent font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 min-w-[200px]"
            >
              View Rooms
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <MapPin className="w-3.5 h-3.5 text-hotel-accent" />
          <span className="text-white/60 text-xs tracking-widest uppercase">
            Near Abdullah Hospital, Clifton Pul, Skardu
          </span>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-1.5 bg-hotel-accent" : "w-1.5 h-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-6 right-8 text-white/40 hover:text-hotel-accent transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
