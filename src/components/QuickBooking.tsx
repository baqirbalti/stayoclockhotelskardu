import { useMemo, useState, type ReactNode } from "react";
import { Bed, CalendarDays, Users } from "lucide-react";
import { hotelInfo, rooms } from "../data/hotelData";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.123 1.034 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

function todayISODate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDays(iso: string, days: number) {
  const [y, mo, da] = iso.split("-").map(Number);
  const dt = new Date(y, mo - 1, da + days);
  const yy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  const dd = String(dt.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

const fieldBox =
  "w-full rounded-lg border border-slate-200/90 bg-hotel-card px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition-shadow focus:border-hotel-accent/60 focus:ring-2 focus:ring-hotel-accent/20";

export default function QuickBooking() {
  const minIn = todayISODate();
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const minOut = checkIn ? addDays(checkIn, 1) : addDays(minIn, 1);

  const waHref = useMemo(() => {
    const roomName = rooms.find((r) => String(r.id) === roomId)?.name ?? "Not specified";
    const lines = [
      "Hello Stay O'Clock — I'd like to book:",
      `Room: ${roomName}`,
      checkIn ? `Check-in: ${checkIn}` : "Check-in: (please confirm)",
      checkOut ? `Check-out: ${checkOut}` : "Check-out: (please confirm)",
      guests ? `Guests: ${guests}` : "Guests: (please confirm)",
    ];
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${hotelInfo.whatsapp}?text=${text}`;
  }, [roomId, checkIn, checkOut, guests]);

  const field = (icon: ReactNode, label: string, child: ReactNode) => (
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <div className="flex items-center gap-2 text-sm font-medium text-hotel-accent">
        <span className="text-hotel-accent opacity-90">{icon}</span>
        <span>{label}</span>
      </div>
      {child}
    </div>
  );

  return (
    <section
      className="relative z-20 -mt-16 bg-hotel-page px-4 pb-14 pt-6 sm:-mt-24 sm:pb-16 sm:pt-8 md:-mt-28"
      aria-label="Quick booking"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-slate-200/60 bg-hotel-card p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] sm:p-7 md:p-8">
          <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-hotel-accent">QUICK BOOKING</p>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {field(
                <Bed className="h-4 w-4 shrink-0" strokeWidth={1.75} />,
                "Room Type",
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className={`${fieldBox} text-slate-500`}
                >
                  <option value="">Select room</option>
                  {rooms.map((r) => (
                    <option key={r.id} value={String(r.id)} className="text-slate-800">
                      {r.name}
                    </option>
                  ))}
                </select>,
              )}
              {field(
                <CalendarDays className="h-4 w-4 shrink-0" strokeWidth={1.75} />,
                "Check-in",
                <input
                  type="date"
                  min={minIn}
                  value={checkIn}
                  onChange={(e) => {
                    const v = e.target.value;
                    setCheckIn(v);
                    if (checkOut && v && checkOut <= v) setCheckOut(addDays(v, 1));
                  }}
                  className={`${fieldBox} min-h-[42px]`}
                />,
              )}
              {field(
                <CalendarDays className="h-4 w-4 shrink-0" strokeWidth={1.75} />,
                "Check-out",
                <input
                  type="date"
                  min={minOut}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className={`${fieldBox} min-h-[42px]`}
                />,
              )}
              {field(
                <Users className="h-4 w-4 shrink-0" strokeWidth={1.75} />,
                "Guests",
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className={`${fieldBox} text-slate-500`}
                >
                  <option value="">How many?</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={String(n)} className="text-slate-800">
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>,
              )}
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-hotel-accent px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:bg-hotel-accent-hover hover:shadow-lg sm:py-4"
            >
              <WhatsAppGlyph className="h-5 w-5 text-white" />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
