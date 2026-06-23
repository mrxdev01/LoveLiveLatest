import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Star, Sparkles, Clock, ShieldCheck, Award, Users, ArrowRight } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import { SALON, SERVICES, salonJsonLd, faqJsonLd, SITE_URL, abs } from "../lib/salon";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOVE LIVE UNISEX | Premium Unisex Salon in Mahesh Nagar Jaipur" },
      { name: "description", content: "Premium unisex salon in Mahesh Nagar, Jaipur. Professional haircut, hair color, facial, makeup, bridal and grooming services. Rated 4.7 ★ by 195 customers. Call 8890497015." },
      { name: "keywords", content: "unisex salon Jaipur, salon Mahesh Nagar, salon near JDA Park, best salon Jaipur, bridal makeup Jaipur, hair color Jaipur, LOVE LIVE UNISEX" },
      { property: "og:title", content: "LOVE LIVE UNISEX | Premium Unisex Salon in Mahesh Nagar Jaipur" },
      { property: "og:description", content: "Premium unisex salon in Mahesh Nagar Jaipur. Hair, beauty, grooming & bridal services. Rated 4.7 ★ by 195 customers." },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: abs(heroImg) },
      { property: "og:image:alt", content: "LOVE LIVE UNISEX salon interior in Jaipur" },
      { name: "twitter:image", content: abs(heroImg) },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(salonJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-24">
        <img
          src={heroImg}
          alt="Interior of LOVE LIVE UNISEX premium salon in Mahesh Nagar, Jaipur"
          width={1600}
          height={1100}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-charcoal/85 via-charcoal/70 to-charcoal/85" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_50%)]" />

        <div className="mx-auto grid max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-charcoal/40 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Mahesh Nagar · Jaipur
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] text-cream sm:text-7xl lg:text-8xl">
              Premium <span className="text-gradient-gold italic">Unisex Salon</span>
              <br />in Jaipur
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
              Experience professional hair, beauty, grooming and styling services at
              <span className="font-semibold text-cream"> LOVE LIVE UNISEX</span> — a modern,
              hygienic and welcoming space for men and women.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold" />)}
              </div>
              <span className="text-sm font-medium text-cream/90">4.7 Rating · 195 Reviews</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SALON.tel} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-charcoal shadow-lg shadow-gold/20 transition-transform hover:scale-105">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={SALON.wa} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href={SALON.map} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/20">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-cream/15 bg-charcoal/40 p-5 backdrop-blur sm:grid-cols-4">
            {[
              { icon: Clock, label: "Open 9 AM – 9 PM" },
              { icon: ShieldCheck, label: "Hygienic Setup" },
              { icon: Award, label: "Trained Stylists" },
              { icon: Users, label: "Men & Women" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-cream/90">
                <Icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">About Us</p>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Where Style Meets <span className="text-gradient-gold italic">Comfort</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/75 sm:text-lg">
              LOVE LIVE UNISEX is a modern unisex salon in Mahesh Nagar, Jaipur. Professional
              grooming, hair styling, beauty and salon services for men and women in a clean,
              comfortable and stylish environment.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-20 blur-2xl animate-float-slow" />
              <img src={g3} alt="Premium facial treatment at LOVE LIVE UNISEX salon Jaipur" width={800} height={900} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-charcoal px-4 py-20 text-cream sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Our Services</p>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                Crafted for <span className="text-gradient-gold italic">You</span>
              </h2>
              <p className="mt-4 text-cream/70">A complete menu of premium salon, beauty and grooming services.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group h-full overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/[0.06]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-charcoal">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-cream">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:scale-105">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="bg-secondary px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Gallery</p>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                Step Inside <span className="text-gradient-gold italic">Our Salon</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {[g1, g2, g3].map((src, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl">
                  <img src={src} alt={`LOVE LIVE UNISEX salon Jaipur ${i + 1}`} loading="lazy" width={800} height={900} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:gap-3 transition-all">
              See full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-charcoal px-4 py-20 text-cream sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Ready to <span className="text-gradient-gold italic">Glow?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/75">
              Book your appointment today — call, WhatsApp or drop by.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={SALON.tel} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:scale-105">
                <Phone className="h-4 w-4" /> {SALON.phone}
              </a>
              <a href={SALON.wa} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
