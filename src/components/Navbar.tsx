import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { hotelInfo } from "../data/hotelData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = scrolled
    ? "text-slate-600 hover:text-hotel-accent"
    : "text-white/85 hover:text-hotel-accent";
  const brandMain = scrolled ? "text-slate-800" : "text-white";
  const brandSub = scrolled ? "text-hotel-accent-muted" : "text-hotel-accent/80";
  const iconBtn = scrolled ? "text-slate-800" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200/90 bg-hotel-page/95 py-3 shadow-md backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => handleNav("#home")}
          className="group flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-10 w-auto max-w-[min(140px,42vw)] shrink-0 object-contain object-left"
            width={140}
            height={40}
            decoding="async"
          />
          <div className="leading-tight">
            <span className={`block text-lg font-bold uppercase tracking-widest ${brandMain}`}>
              Stay <span className="text-hotel-accent">O'Clock</span>
            </span>
            <span className={`block text-[9px] uppercase tracking-[0.2em] ${brandSub}`}>
              Hotel & Restaurant
            </span>
          </div>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className={`group relative text-sm uppercase tracking-widest transition-colors duration-300 ${linkClass}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-hotel-accent transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${hotelInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 bg-hotel-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-hotel-accent-hover hover:shadow-[0_0_20px_rgba(201,160,68,0.35)] md:flex"
        >
          Book Now
        </a>

        <button className={`md:hidden ${iconBtn}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-hotel-page/98 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left text-sm uppercase tracking-widest text-slate-700 transition-colors duration-300 hover:text-hotel-accent"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${hotelInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block bg-hotel-accent px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-black"
              >
                Book Now via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
