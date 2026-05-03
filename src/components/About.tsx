import { aboutHighlights } from "../data/hotelData";

export default function About() {
  return (
    <section id="about" className="bg-hotel-page py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="text-hotel-accent text-xs tracking-[0.4em] uppercase mb-3">About Us</p>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Home Away<br />
            <span className="text-hotel-accent">in the Mountains</span>
          </h2>
          <div className="w-16 h-px bg-hotel-accent mb-8" />
          <p className="text-slate-600 leading-relaxed mb-6 text-base">
            Stay O'Clock Hotel & Restaurant is Skardu's premier hospitality destination, perfectly positioned near Abdullah Hospital at Clifton Pul. We are a proud project of the Qadeeri Group of Businesses, committed to delivering exceptional comfort and authentic warmth to every traveler who walks through our doors.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8 text-base">
            Whether you're here to explore the mighty Karakoram, trek the legendary passes, or simply soak in the serene beauty of Skardu, our hotel serves as your perfect base camp — offering modern amenities, delicious cuisine, and panoramic mountain views that will take your breath away.
          </p>
          <a
            href="https://wa.me/923111556691"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-hotel-accent hover:bg-hotel-accent-hover text-black font-bold text-xs tracking-widest uppercase px-7 py-3.5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutHighlights.map(({ image, label, desc }) => (
            <article
              key={label}
              className="group relative aspect-[3/4] overflow-hidden border border-slate-200/90 bg-slate-900 shadow-md"
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-5 pt-16">
                <div className="mb-2 h-px w-10 bg-hotel-accent" />
                <h3 className="text-white font-semibold text-sm tracking-wide uppercase">{label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/80">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
