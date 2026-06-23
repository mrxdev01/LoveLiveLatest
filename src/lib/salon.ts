import {
  Scissors, Sparkles, Palette, Droplet, Heart, Brush, Hand, Crown, Leaf, Gift,
  Award, Users, ShieldCheck, Star,
} from "lucide-react";

export const SALON = {
  name: "LOVE LIVE UNISEX",
  phone: "8890497015",
  tel: "tel:+918890497015",
  wa: "https://wa.me/918890497015",
  address:
    "D 21 Mahesh Nagar, 80 Feet Road Near JDA Park, opp. Kiran Success Point, Jaipur, Rajasthan 302015",
  map: "https://www.google.com/maps/dir/?api=1&destination=D+21+Mahesh+Nagar+80+Feet+Road+Near+JDA+Park+Jaipur+Rajasthan+302015",
  mapEmbed:
    "https://www.google.com/maps?q=D+21+Mahesh+Nagar+80+Feet+Road+Near+JDA+Park+Jaipur+Rajasthan+302015&output=embed",
  rating: "4.7",
  reviews: "195",
  hours: "Mon – Sun · 9:00 AM to 9:00 PM",
};

export const NAV = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
] as const;

export const SERVICES = [
  { icon: Scissors, title: "Haircut & Styling", desc: "Precision cuts and modern styling for men and women." },
  { icon: Droplet,  title: "Hair Spa",          desc: "Deep nourishing treatments for healthy, shiny hair." },
  { icon: Palette,  title: "Hair Color",        desc: "Global color, highlights, balayage and root touch-ups." },
  { icon: Brush,    title: "Beard Styling",     desc: "Sharp beard shaping, trims and luxury hot-towel shaves." },
  { icon: Sparkles, title: "Facial & Cleanup",  desc: "Glow-boosting facials with premium skincare brands." },
  { icon: Heart,    title: "Makeup",            desc: "Party, engagement and HD makeup by trained artists." },
  { icon: Hand,     title: "Manicure & Pedicure", desc: "Relaxing hand and foot care with spa-grade products." },
  { icon: Crown,    title: "Bridal & Party Look", desc: "Complete bridal packages, trials included." },
  { icon: Leaf,     title: "Skin Care",         desc: "Targeted treatments for tan, acne, glow and anti-aging." },
  { icon: Gift,     title: "Grooming Packages", desc: "Curated combo packages with the best value." },
];

export const REASONS = [
  { icon: Award,       title: "Professional Experience", desc: "Skilled stylists trained on the latest techniques." },
  { icon: Users,       title: "Unisex Services",         desc: "A welcoming space for men and women alike." },
  { icon: ShieldCheck, title: "Hygiene First",           desc: "Sterilised tools and a spotless premium setup." },
  { icon: Sparkles,    title: "Modern Ambience",         desc: "Stylish, comfortable interiors designed to relax." },
  { icon: Heart,       title: "Loved Locally",           desc: "Trusted by hundreds of customers across Jaipur." },
  { icon: Star,        title: "4.7 ★ Rating",            desc: "Rated 4.7 by 195 verified Google reviews." },
];

export const TESTIMONIALS = [
  { name: "Priya Sharma",  role: "Bridal Client",      text: "Got my bridal makeup done here and it was flawless. The team is so professional and the ambience is gorgeous!" },
  { name: "Rahul Verma",   role: "Regular Client",     text: "Best haircut and beard styling in Mahesh Nagar. Clean place, friendly staff and very reasonable pricing." },
  { name: "Neha Agarwal",  role: "Hair Color Client",  text: "Loved my balayage! They understood exactly what I wanted. My go-to salon now for everything hair and skin." },
  { name: "Aman Gupta",    role: "Grooming Client",    text: "The hot-towel shave is so relaxing. I drive across the city for my monthly grooming session here." },
  { name: "Sneha Joshi",   role: "Facial Client",      text: "My skin glows for weeks after their facial. Premium products, gentle hands, beautiful setup." },
  { name: "Kavita Mehra",  role: "Party Makeup",       text: "Got party makeup done last week. So many compliments! Will definitely come back for my sister's wedding." },
];

export const SITE_URL = "https://lovelivesalon.lovable.app";

export const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const salonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${SITE_URL}/#salon`,
  name: SALON.name,
  url: SITE_URL,
  telephone: "+91-8890497015",
  email: "loveliveunisex@gmail.com",
  priceRange: "₹₹",
  image: `${SITE_URL}/og-cover.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "D 21 Mahesh Nagar, 80 Feet Road Near JDA Park, opp. Kiran Success Point",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302015",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.8467,
    longitude: 75.7920,
  },
  hasMap: SALON.map,
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "Place", name: "Mahesh Nagar" },
    { "@type": "Place", name: "Mansarovar" },
    { "@type": "Place", name: "Tonk Road" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SALON.rating,
    reviewCount: SALON.reviews,
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  openingHours: "Mo-Su 09:00-21:00",
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.desc },
  })),
  sameAs: [
    "https://www.google.com/search?q=LOVE+LIVE+UNISEX+Jaipur",
  ],
};

export const FAQS = [
  { q: "Where is LOVE LIVE UNISEX salon located in Jaipur?", a: "We are at D 21 Mahesh Nagar, 80 Feet Road, near JDA Park, opposite Kiran Success Point, Jaipur, Rajasthan 302015." },
  { q: "What are your opening hours?", a: "We are open every day from 9:00 AM to 9:00 PM, including Sundays." },
  { q: "Do I need an appointment or can I walk in?", a: "Walk-ins are welcome, but we recommend calling 8890497015 or messaging on WhatsApp to book your preferred slot." },
  { q: "Is LOVE LIVE UNISEX for both men and women?", a: "Yes, we are a fully unisex salon offering hair, beauty, grooming and bridal services for both men and women." },
  { q: "Do you offer bridal makeup packages?", a: "Yes — we offer complete bridal and pre-bridal packages with trials included, by trained makeup artists." },
  { q: "Which payment methods do you accept?", a: "We accept cash, UPI, all major debit/credit cards and digital wallets." },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});
