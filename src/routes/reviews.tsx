import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { TESTIMONIALS, SITE_URL, breadcrumb } from "../lib/salon";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "LOVE LIVE UNISEX",
  "@id": SITE_URL + "/#salon",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "195", bestRating: "5", worstRating: "1" },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: t.text,
    itemReviewed: { "@type": "BeautySalon", name: "LOVE LIVE UNISEX" },
  })),
};

const crumbs = breadcrumb([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]);

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Rated 4.7 ★ | LOVE LIVE UNISEX Jaipur" },
      { name: "description", content: "Read what our customers say about LOVE LIVE UNISEX salon in Mahesh Nagar, Jaipur. Rated 4.7 ★ by 195 verified Google reviews for haircut, color, facial and bridal services." },
      { property: "og:title", content: "Customer Reviews — Rated 4.7 ★ | LOVE LIVE UNISEX Jaipur" },
      { property: "og:description", content: "195 verified Google reviews. See why customers love our salon." },
      { property: "og:url", content: SITE_URL + "/reviews" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/reviews" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
      { type: "application/ld+json", children: JSON.stringify(crumbs) },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>Rated <span className="text-gradient-gold italic">4.7 ★</span> by 195 Customers</>}
        subtitle="Real words from real guests who chose LOVE LIVE UNISEX for their hair, beauty and bridal needs."
      />

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80}>
                <figure className="h-full rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex gap-1 text-gold">
                    {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-gold" />)}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-charcoal/80">"{t.text}"</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-charcoal/10 pt-5">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold font-display text-lg font-bold text-charcoal">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">{t.name}</div>
                      <div className="text-xs text-charcoal/60">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
