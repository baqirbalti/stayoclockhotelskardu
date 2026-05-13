import { Clock, CreditCard, XCircle, Baby, Cigarette, AlertTriangle } from "lucide-react";
import { terms } from "../data/hotelData";

const icons = [Clock, CreditCard, XCircle, Baby, Cigarette, AlertTriangle];

export default function Terms() {
  return (
    <section id="terms" className="bg-hotel-section py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-3">Policies</p>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h2>
          <div className="w-16 h-px bg-hotel-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {terms.map((term, i) => {
            const Icon = icons[i] || AlertTriangle;
            const [title, ...rest] = term.split(":");
            const hasColon = term.includes(":");
            return (
              <div
                key={i}
                className="flex gap-4 border border-slate-200 bg-hotel-card/90 p-6 shadow-sm transition-colors duration-300 hover:border-hotel-accent/40"
              >
                <div className="w-9 h-9 rounded-full border border-hotel-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-hotel-accent" />
                </div>
                <div>
                  {hasColon ? (
                    <>
                      <p className="text-slate-800 font-semibold text-sm mb-1">{title}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{rest.join(":").trim()}</p>
                    </>
                  ) : (
                    <p className="text-slate-600 text-sm leading-relaxed">{term}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
