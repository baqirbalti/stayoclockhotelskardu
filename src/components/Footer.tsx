import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { hotelInfo } from "../data/hotelData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-700/80 bg-hotel-footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt=""
                className="h-12 w-auto max-w-[120px] shrink-0 object-contain object-left"
                width={120}
                height={48}
                decoding="async"
              />
              <div>
                <span className="block text-slate-100 text-base font-bold uppercase tracking-widest">
                  Stay <span className="text-hotel-accent">O'Clock</span>
                </span>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-hotel-accent-muted">
                  Hotel & Restaurant
                </span>
              </div>
            </div>
            <p className="mb-5 text-xs leading-relaxed text-slate-400">
              A project of Qadeeri Group of Businesses. Your premier hospitality destination in the heart of Skardu, Pakistan.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={hotelInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center border border-slate-600 text-slate-400 transition-all duration-300 hover:border-hotel-accent/60 hover:text-hotel-accent"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={hotelInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center border border-slate-600 text-slate-400 transition-all duration-300 hover:border-hotel-accent/60 hover:text-hotel-accent"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${hotelInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center border border-slate-600 text-slate-400 transition-all duration-300 hover:border-[#25D366]/50 hover:text-[#25D366]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">{hotelInfo.social.handle}</p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-hotel-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              Contact
            </h4>
            <ul className="space-y-4">
              {hotelInfo.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="w-3.5 h-3.5 text-hotel-accent flex-shrink-0" />
                  <a
                    href={`tel:+92${phone}`}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-hotel-accent"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-hotel-accent flex-shrink-0" />
                <a
                  href={`mailto:${hotelInfo.email}`}
                  className="break-all text-xs text-slate-400 transition-colors duration-300 hover:text-hotel-accent"
                >
                  {hotelInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-hotel-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-400">{hotelInfo.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              Book Now
            </h4>
            <p className="mb-5 text-xs leading-relaxed text-slate-400">
              Reserve your room directly through WhatsApp for instant confirmation and the best rates.
            </p>
            <a
              href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello! I'd like to book a room at Stay O'Clock Hotel, Skardu.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-hotel-accent hover:bg-hotel-accent-hover text-black font-bold text-xs tracking-widest uppercase px-5 py-3.5 transition-all duration-300 w-full text-center"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Booking
            </a>
            <div className="mt-5 border border-slate-600 bg-slate-800/50 p-4">
              <p className="mb-2 text-[10px] uppercase tracking-widest text-slate-500">Check-in / Check-out</p>
              <p className="text-xs text-slate-300">Check-in: 2:00 PM</p>
              <p className="text-xs text-slate-300">Check-out: 12:00 PM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-700 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Stay O'Clock Hotel & Restaurant, Skardu. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            A Project of Qadeeri Group of Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
