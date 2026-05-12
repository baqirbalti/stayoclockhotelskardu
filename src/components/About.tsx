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
          Stay O'Clock Hotel & Restaurant is one of Skardu’s finest hospitality destinations owned by Balti family, ideally located near Abdullah Hospital at Clifton Pul, Alamdar Chowk. Designed for comfort and built with care, we welcome guests with the warmth, simplicity, and genuine hospitality that Baltistan is known for.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Whether you’re visiting to explore the mighty Karakoram mountains, experience Skardu’s breathtaking valleys, or begin your trekking journey across legendary routes, Stay O'Clock Hotel & Restaurant serves as your perfect base — offering modern rooms, delicious cuisine, peaceful surroundings, and unforgettable panoramic views.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8 text-base">
          We take pride in providing every guest a relaxing stay, personalized service, and an experience that feels like home.
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
