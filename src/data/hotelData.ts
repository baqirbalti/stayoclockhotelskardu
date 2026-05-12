/**
 * Images live under `public/images/rooms/` and `public/images/gallery/`.
 */

/** Local PK mobile (03xx…) → `tel:+92…` */
export function pkPhoneTelHref(local: string): string {
  const digits = local.replace(/\D/g, "");
  const national = digits.startsWith("0") ? digits.slice(1) : digits;
  return `tel:+92${national}`;
}

export const hotelInfo = {
  name: "Stay O'Clock",
  tagline: "Hotel & Restaurant",
  location: "Skardu, Pakistan",
  address: "Near Abdullah Hospital, Clifton Pul, Skardu",
  phones: ["03111556691", "03554439318", "03433331222"],
  email: "Stayoclockhotel@gmail.com",
  whatsapp: "923433331222",
  social: {
    instagram: "https://www.instagram.com/stayoclockhotel",
    facebook: "https://facebook.com/stayoclock",
    tiktok: "https://tiktok.com/@stayoclock",
    handle: "@Stayoclock",
  },
  checkin: "2:00 PM",
  checkout: "12:00 PM",
};

export const aboutHighlights = [
  {
    image: "/images/gallery/exterior-dusk.png",
    label: "Scenic Location",
    desc: "Set in Skardu near Clifton Pul — your base for valleys, glaciers, and the Karakoram.",
  },
  {
    image: "/images/rooms/deluxe.png",
    label: "Premium Comfort",
    desc: "Spacious rooms, quality bedding, and thoughtful details for a restorative stay.",
  },
  {
    image: "/images/rooms/couple.png",
    label: "Warm Hospitality",
    desc: "Attentive staff and a relaxed atmosphere — we treat every guest like family.",
  },
  {
    image: "/images/gallery/exterior-night.png",
    label: "Evening Welcome",
    desc: "Return from the mountains to a property that feels safe, refined, and lit for comfort.",
  },
];

export const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description:
      "Spacious and elegantly appointed room perfect for small families or groups, featuring premium furnishings with stunning mountain views from Skardu.",
    beds: "1 Kingsize + Single Bed",
    capacity: "3 Persons",
    pricePKR: 10500,
    priceUSD: 34,
    image: "/images/rooms/deluxe.png",
    amenities: ["Electricity", "WiFi", "Warm Water", "Breakfast"],
    featured: true,
  },
  {
    id: 2,
    name: "Couple Room",
    description:
      "A romantic and cozy retreat designed for couples, with warm ambient lighting, plush king-size bed, and a peaceful atmosphere in the heart of Skardu.",
    beds: "1 Kingsize Bed",
    capacity: "2 Persons",
    pricePKR: 8500,
    priceUSD: 28,
    image: "/images/rooms/couple.png",
    amenities: ["Electricity", "WiFi", "Warm Water", "Breakfast"],
    featured: false,
  },
  {
    id: 3,
    name: "Single Room",
    description:
      "A compact, modern room ideal for solo travellers or short stays — clean lines, a restful bed, and everything you need within reach.",
    beds: "1 Single Bed",
    capacity: "1 Person",
    pricePKR: 7500,
    priceUSD: 23,
    image: "/images/rooms/single.png",
    amenities: ["Electricity", "WiFi", "Warm Water", "Breakfast"],
    featured: false,
  },
];

export const amenities = [
  {
    icon: "utensils",
    title: "Dine-In Restaurant",
    description: "Savor authentic local and continental cuisine at our in-house restaurant.",
  },
  {
    icon: "car",
    title: "Parking Area",
    description: "Secure and spacious parking available for all our guests at no extra charge.",
  },
  {
    icon: "mountain",
    title: "Rooftop Seating",
    description: "Breathtaking mountain views from our exclusive rooftop seating area.",
  },
  {
    icon: "carFront",
    title: "Rent a Car Service",
    description: "Explore Skardu and surrounding areas with our reliable car rental service.",
  },
  {
    icon: "shirt",
    title: "Laundry Service",
    description: "Professional laundry and dry cleaning service available on request.",
  },
  {
    icon: "wifi",
    title: "Free WiFi",
    description: "High-speed internet connectivity throughout the hotel premises.",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery/exterior-dusk.png",
    alt: "Hotel exterior at dusk",
    span: "col-span-2" as const,
  },
  {
    src: "/images/gallery/exterior-night.png",
    alt: "Hotel at night",
    span: "col-span-1" as const,
  },
  {
    src: "/images/gallery/corridor.png",
    alt: "Guest corridor",
    span: "col-span-1" as const,
  },
  {
    src: "/images/rooms/deluxe.png",
    alt: "Deluxe room",
    span: "col-span-1" as const,
  },
  {
    src: "/images/rooms/couple.png",
    alt: "Couple room",
    span: "col-span-1" as const,
  },
  {
    src: "/images/rooms/single.png",
    alt: "Single room",
    span: "col-span-2" as const,
  },
];

export const terms = [
  "Check-in: 2:00 PM | Check-out: 12:00 PM",
  "Reservation: Online and phone bookings accepted. Advance 50% payment required for confirmation.",
  "Cancellation: Free up to 72 hours before arrival. 50% charge after. No refund for no-shows.",
  "Children: Under 5 stay free. Extra Mattress available (charges apply).",
  "Pets & Smoking: No pets allowed. Smoking only in designated areas.",
  "Damage: Guests are responsible for any damage caused during their stay.",
];
