import { Link } from "@tanstack/react-router";
import { NAV, SALON } from "../lib/salon";
import logo from "../assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] px-4 py-12 text-cream/80 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-charcoal/60 ring-2 ring-gold/40">
              <img src={logo} alt="LOVE LIVE UNISEX logo" width={48} height={48} loading="lazy" className="h-10 w-10 object-contain" />
            </span>
            <div>
              <div className="font-display text-lg font-bold text-cream">{SALON.name}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                Premium Salon Jaipur
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Premium unisex salon in Mahesh Nagar, Jaipur. Hair, beauty, grooming and bridal
            services with the warmth you deserve.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-cream">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-cream">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={SALON.tel} className="hover:text-gold">📞 {SALON.phone}</a>
            </li>
            <li>📍 {SALON.address}</li>
            <li>🕘 {SALON.hours}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {SALON.name} · Premium Unisex Salon in Jaipur
      </div>
    </footer>
  );
}
