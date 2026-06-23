import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import { SITE_URL, abs, breadcrumb } from "../lib/salon";

const GALLERY = [g1, g2, g3, g4, g5, g6];

const crumbs = breadcrumb([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]);

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | LOVE LIVE UNISEX Salon Jaipur — Interior & Work" },
      { name: "description", content: "Take a visual tour of LOVE LIVE UNISEX salon in Mahesh Nagar, Jaipur. See our modern interior, stylist work, hair colors, bridal looks and facial treatments." },
      { property: "og:title", content: "Gallery | LOVE LIVE UNISEX Salon Jaipur" },
      { property: "og:description", content: "Modern salon interior & stylist work — Mahesh Nagar, Jaipur." },
      { property: "og:url", content: SITE_URL + "/gallery" },
      { property: "og:image", content: abs(g1) },
      { name: "twitter:image", content: abs(g1) },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/gallery" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(crumbs) }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>A Glimpse Inside <span className="text-gradient-gold italic">Our Salon</span></>}
        subtitle="A look at the work, the space and the moments that define LOVE LIVE UNISEX."
      />

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {GALLERY.map((src, i) => (
              <Reveal key={i} delay={(i % 4) * 80} className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt={`LOVE LIVE UNISEX salon Jaipur — photo ${i + 1}`}
                    loading="lazy"
                    width={800}
                    height={900}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      i === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-square"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
