import { Utensils, Car, Mountain, CarFront, Shirt, Wifi } from "lucide-react";
import { amenities } from "../data/hotelData";

const iconMap: Record<string, React.ReactNode> = {
  utensils: <Utensils className="w-6 h-6" />,
  car: <Car className="w-6 h-6" />,
  mountain: <Mountain className="w-6 h-6" />,
  carFront: <CarFront className="w-6 h-6" />,
  shirt: <Shirt className="w-6 h-6" />,
  wifi: <Wifi className="w-6 h-6" />,
};

export default function Amenities() {
  return (
    <section id="amenities" className="relative overflow-hidden bg-hotel-section py-24 px-6">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-hotel-section/92" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-3">What We Offer</p>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold mb-4">Amenities & Services</h2>
          <div className="w-16 h-px bg-hotel-accent mx-auto mb-4" />
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Everything you need for a perfect stay in Skardu — all under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="group border border-slate-200 bg-white/90 p-8 shadow-sm transition-all duration-400 hover:border-hotel-accent/60"
            >
              <div className="w-12 h-12 rounded-full border border-hotel-accent/30 flex items-center justify-center text-hotel-accent mb-5 group-hover:border-hotel-accent group-hover:bg-hotel-accent/10 transition-all duration-300">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-slate-800 font-bold text-base mb-2 tracking-wide">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
