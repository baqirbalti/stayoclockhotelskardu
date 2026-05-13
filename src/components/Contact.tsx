import { Phone, MessageCircle } from "lucide-react";
import { hotelInfo, pkPhoneTelHref } from "../data/hotelData";

export default function Contact() {
  const primaryPhone = hotelInfo.phones[0];

  return (
    <section id="contact" className="bg-hotel-section py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden border border-hotel-accent/35 bg-gradient-to-r from-hotel-accent/12 to-hotel-page/90 p-8 shadow-sm md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-hotel-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-2">Book Your Stay</p>
              <h2 className="text-slate-800 text-2xl md:text-3xl font-bold mb-3">
                Ready to Experience Skardu?
              </h2>
              <p className="text-slate-600 text-sm max-w-lg leading-relaxed">
                WhatsApp is the fastest way to confirm dates and rates. For phone, email, and address, scroll to the footer.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[280px]">
              <a
                href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello! I would like to make a reservation at Stay O'Clock Hotel, Skardu. Please help me with booking details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 whitespace-nowrap hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Booking
              </a>
              <a
                href={pkPhoneTelHref(primaryPhone)}
                className="flex items-center justify-center gap-3 border border-slate-300 bg-hotel-card/90 font-semibold text-sm uppercase tracking-widest text-slate-800 transition-all duration-300 hover:border-hotel-accent hover:text-hotel-accent whitespace-nowrap px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
