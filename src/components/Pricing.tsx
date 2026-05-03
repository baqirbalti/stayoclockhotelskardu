import { Check, MessageCircle } from "lucide-react";
import { rooms } from "../data/hotelData";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-hotel-page py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-3">Tariff 2025</p>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold mb-4">Room Rates</h2>
          <div className="w-16 h-px bg-hotel-accent mx-auto mb-4" />
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Transparent pricing with no hidden charges — just honest hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`group relative border transition-all duration-300 hover:-translate-y-1 ${
                room.featured
                  ? "border-hotel-accent bg-gradient-to-b from-hotel-accent/12 to-white shadow-md"
                  : "border-slate-200 bg-white hover:border-hotel-accent/50"
              }`}
            >
              {room.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-hotel-accent text-black text-[10px] font-bold tracking-widest uppercase px-4 py-1">
                  Best Value
                </div>
              )}
              <div className="p-8">
                <h3 className="text-slate-800 text-xl font-bold mb-1">{room.name}</h3>
                <p className="text-slate-500 text-xs mb-6">{room.beds} &bull; {room.capacity}</p>

                <div className="mb-6">
                  <span className="text-hotel-accent text-4xl font-bold">
                    {room.pricePKR.toLocaleString()}
                  </span>
                  <span className="text-slate-500 text-sm ml-1">PKR</span>
                  <p className="text-slate-400 text-xs mt-1">per night &bull; ${room.priceUSD} USD</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {room.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-hotel-accent flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-slate-600 text-sm">
                    <Check className="w-4 h-4 text-hotel-accent flex-shrink-0" />
                    24-hour Services
                  </li>
                </ul>

                <a
                  href={`https://wa.me/923111556691?text=Hello! I'd like to book the ${encodeURIComponent(room.name)} at Stay O'Clock Hotel. Please confirm availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    room.featured
                      ? "bg-hotel-accent hover:bg-hotel-accent-hover text-black"
                      : "border border-hotel-accent/40 text-hotel-accent hover:bg-hotel-accent/10"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-hotel-accent/30 bg-hotel-accent/10 p-6 text-center">
          <p className="text-hotel-accent-muted font-semibold text-sm mb-1">Important Note</p>
          <p className="text-slate-600 text-sm">
            An additional charge of <span className="font-semibold text-slate-800">Rs. 1,000/-</span> applies for extra Mattress & Breakfast.
            &nbsp;&bull;&nbsp; 50% advance payment required to confirm your reservation.
          </p>
        </div>
      </div>
    </section>
  );
}
