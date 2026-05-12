import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  const googleMapsUrl =
  "https://www.google.com/maps/place/Stay+O+Clock+Hotel/@35.2893901,75.6194413,539m/data=!3m1!1e3!4m9!3m8!1s0x38e4630061cabb4d:0x7fdcbc6dbaa2a6f7!5m2!4m1!1i2!8m2!3d35.2893901!4d75.6220162!16s%2Fg%2F11xs2v3thv?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="location" className="bg-hotel-page py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-3">Find Us</p>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold mb-4">Our Location</h2>
          <div className="w-16 h-px bg-hotel-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-full border border-hotel-accent/40 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-hotel-accent" />
              </div>
              <div>
                <h3 className="text-slate-800 font-bold text-lg mb-1">Stay O'Clock Hotel & Restaurant</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Near Abdullah Hospital, Clifton Pul,<br />
                  Skardu, Gilgit-Baltistan, Pakistan
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <span className="text-hotel-accent font-semibold text-xs uppercase tracking-widest w-28">Landmark</span>
                <span>Near Abdullah Hospital</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <span className="text-hotel-accent font-semibold text-xs uppercase tracking-widest w-28">Area</span>
                <span>Clifton Pul, Skardu</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <span className="text-hotel-accent font-semibold text-xs uppercase tracking-widest w-28">Region</span>
                <span>Gilgit-Baltistan, Pakistan</span>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-hotel-accent hover:bg-hotel-accent-hover text-black font-bold text-xs tracking-widest uppercase px-6 py-3.5 transition-all duration-300"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          <div className="relative h-80 overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=75.6100%2C35.2800%2C75.6600%2C35.3100&layer=mapnik&marker=35.2971%2C75.6379"
              className="w-full h-full border-0"
              title="Stay O'Clock Hotel Location"
              loading="lazy"
            />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/75 to-transparent p-4">
              <p className="text-white/90 text-xs">Stay O'Clock Hotel &bull; Skardu, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
