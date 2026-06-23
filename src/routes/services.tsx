import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SALON, SERVICES, SITE_URL, abs, breadcrumb } from "../lib/salon";
import g2 from "../assets/g2.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Service", name: s.title, description: s.desc, provider: { "@type": "BeautySalon", name: "LOVE LIVE UNISEX" }, areaServed: { "@type": "City", name: "Jaipur" } },
  })),
};

const crumbs = breadcrumb([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]);

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Salon Services in Jaipur | Haircut, Color, Facial, Bridal — LOVE LIVE UNISEX" },
      { name: "description", content: "Full menu of premium salon services in Mahesh Nagar Jaipur — haircut & styling, hair color, hair spa, facial, makeup, bridal looks, manicure, pedicure and grooming packages." },
      { name: "keywords", content: "salon services Jaipur, haircut Mahesh Nagar, hair color Jaipur, bridal makeup Jaipur, facial Jaipur, hair spa, manicure pedicure" },
      { property: "og:title", content: "Salon Services in Jaipur | LOVE LIVE UNISEX" },
      { property: "og:description", content: "Haircut, color, facial, makeup, bridal & grooming services in Mahesh Nagar Jaipur." },
      { property: "og:url", content: SITE_URL + "/services" },
      { property: "og:image", content: abs(g2) },
      { name: "twitter:image", content: abs(g2) },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/services" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
      { type: "application/ld+json", children: JSON.stringify(crumbs) },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Crafted for <span className="text-gradient-gold italic">You</span></>}
        subtitle="From everyday grooming to bridal transformations — premium hair, beauty and skincare services for men and women."
      />

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 3) * 80}>
                <article className="group h-full rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold text-charcoal transition-transform group-hover:rotate-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <a href={SALON.wa} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:scale-105">
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
