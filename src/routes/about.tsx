import { createFileRoute } from "@tanstack/react-router";
import { Crown } from "lucide-react";
import g3 from "../assets/g3.jpg";
import g5 from "../assets/g5.jpg";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { REASONS, SITE_URL, abs, breadcrumb } from "../lib/salon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LOVE LIVE UNISEX | Premium Unisex Salon in Jaipur" },
      { name: "description", content: "Learn about LOVE LIVE UNISEX salon in Mahesh Nagar, Jaipur. Trained stylists, premium products, hygienic setup and a modern unisex experience rated 4.7 ★." },
      { property: "og:title", content: "About LOVE LIVE UNISEX | Premium Unisex Salon in Jaipur" },
      { property: "og:description", content: "Trained stylists, premium products, hygienic setup. Mahesh Nagar, Jaipur. Rated 4.7 ★ by 195 customers." },
      { property: "og:url", content: SITE_URL + "/about" },
      { property: "og:image", content: abs(g3) },
      { name: "twitter:image", content: abs(g3) },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumb([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])),
    }],
  }),
  component: AboutPage,
});



function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Where Style Meets <span className="text-gradient-gold italic">Comfort</span></>}
        subtitle="A modern unisex salon in Mahesh Nagar, Jaipur, dedicated to making every visit a luxurious, personal experience."
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">A Salon Built on <span className="text-gradient-gold italic">Care</span></h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/75 sm:text-lg">
              LOVE LIVE UNISEX was founded with a simple belief — every guest deserves to leave
              feeling more confident than when they walked in. From a quick haircut to a complete
              bridal transformation, our trained team uses premium products and the latest techniques
              to make every visit truly special.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/75 sm:text-lg">
              Located near JDA Park on 80 Feet Road in Mahesh Nagar, we are proud to be one of
              Jaipur's most loved unisex salons — rated 4.7 ★ by 195 verified Google reviews.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
              {[["4.7★", "Google Rated"], ["195+", "Happy Reviews"], ["10+", "Service Categories"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl font-bold text-gold">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-charcoal/60">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-20 blur-2xl animate-float-slow" />
              <img src={g5} alt="LOVE LIVE UNISEX salon interior Jaipur" width={800} height={900} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gold/30 bg-charcoal p-5 text-cream shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <Crown className="h-8 w-8 text-gold" />
                  <div>
                    <div className="font-display text-xl font-bold">Premium Salon</div>
                    <div className="text-xs text-cream/70">in Mahesh Nagar, Jaipur</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">The <span className="text-gradient-gold italic">LOVE LIVE</span> Difference</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm transition-all hover:border-gold/40 hover:shadow-lg hover:-translate-y-1">
                  <Icon className="h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
