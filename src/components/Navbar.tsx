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

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const onLightBar = scrolled || menuOpen;
  const linkClass = onLightBar
    ? "text-slate-600 hover:text-hotel-accent"
    : "text-white/85 hover:text-hotel-accent";
  const brandMain = onLightBar ? "text-slate-800" : "text-white";
  const brandSub = onLightBar ? "text-hotel-accent-muted" : "text-hotel-accent/80";
  const iconBtn = onLightBar ? "text-slate-800" : "text-white";

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        menuOpen
          ? "border-b border-slate-200 bg-hotel-page py-3 shadow-lg"
          : scrolled
            ? "border-b border-slate-200/90 bg-hotel-page/95 py-3 shadow-md backdrop-blur-md"
            : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="group flex items-center gap-3"
        >
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 shadow-sm ${
              onLightBar ? "border-slate-200 bg-white" : "border-white/50 bg-black/25 backdrop-blur-sm"
            }`}
          >
            <img
              src="/logo.png"
              alt=""
              className="h-full w-full object-contain p-1.5"
              width={44}
              height={44}
              decoding="async"
            />
          </div>
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
                type="button"
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

        <button
          type="button"
          className={`md:hidden ${iconBtn}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200/80 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="w-full py-3.5 text-left text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition-colors hover:text-hotel-accent-muted active:text-hotel-accent"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={`https://wa.me/${hotelInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-hotel-accent px-5 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-hotel-accent-hover"
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
