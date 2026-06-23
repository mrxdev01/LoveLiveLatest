import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SALON, SITE_URL, breadcrumb, faqJsonLd, FAQS } from "../lib/salon";

const crumbs = breadcrumb([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LOVE LIVE UNISEX | Salon in Mahesh Nagar, Jaipur" },
      { name: "description", content: "Visit LOVE LIVE UNISEX salon in Mahesh Nagar, Jaipur. Call 8890497015, message on WhatsApp or get directions. Open Mon–Sun, 9 AM – 9 PM." },
      { property: "og:title", content: "Contact LOVE LIVE UNISEX | Mahesh Nagar Jaipur" },
      { property: "og:description", content: "Call, WhatsApp or visit our premium unisex salon in Mahesh Nagar, Jaipur." },
      { property: "og:url", content: SITE_URL + "/contact" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(crumbs) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title={<>Book Your <span className="text-gradient-gold italic">Appointment</span></>}
        subtitle="We'd love to welcome you. Call, WhatsApp or drop by our salon in Mahesh Nagar, Jaipur."
      />

      <section className="relative overflow-hidden bg-charcoal px-4 py-20 text-cream sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.2),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: <a href={SALON.tel} className="font-display text-3xl font-bold text-cream">{SALON.phone}</a> },
                { icon: MapPin, label: "Address", value: <p className="text-sm leading-relaxed text-cream/85">{SALON.address}</p> },
                { icon: Clock, label: "Open Hours", value: <p className="text-sm text-cream/85">{SALON.hours}</p> },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition-colors hover:border-gold/40">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-charcoal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gold">{label}</div>
                      <div className="mt-1">{value}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-wrap gap-3 pt-2">
                <a href={SALON.tel} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-charcoal transition-transform hover:scale-105">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={SALON.wa} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={SALON.map} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/20">
                  <MapPin className="h-4 w-4" /> Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl border border-cream/10 h-full min-h-[460px]">
              <iframe
                title="LOVE LIVE UNISEX Salon Location Jaipur"
                src={SALON.mapEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[460px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-gold">FAQs</p>
            <h2 className="text-center font-display text-4xl font-bold sm:text-5xl">
              Frequently <span className="text-gradient-gold italic">Asked</span>
            </h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm transition-colors hover:border-gold/40">
                  <summary className="cursor-pointer list-none font-display text-lg font-semibold text-charcoal marker:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {f.q}
                      <span className="text-gold transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
