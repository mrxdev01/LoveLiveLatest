import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SALON } from "../lib/salon";
import logo from "../assets/logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] border-b border-gold/20"
          : "bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-charcoal/60 ring-2 ring-gold/40 shadow-lg shadow-gold/20 transition-transform group-hover:rotate-6">
            <img src={logo} alt="LOVE LIVE UNISEX logo" width={48} height={48} className="h-10 w-10 object-contain" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-wide text-cream sm:text-lg">
              LOVE LIVE
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Unisex Salon</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div className="flex items-center gap-1 rounded-full border border-cream/10 bg-charcoal/40 p-1.5 backdrop-blur-md">
            {NAV.map(([label, href]) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  to={href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-gradient-gold text-charcoal shadow-md"
                      : "text-cream/80 hover:text-charcoal hover:bg-gradient-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <a
            href={SALON.tel}
            className="group ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-charcoal shadow-lg shadow-gold/25 transition-all hover:scale-105 hover:shadow-gold/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-charcoal/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-charcoal" />
            </span>
            <Phone className="h-4 w-4" /> {SALON.phone}
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-full border border-gold/30 bg-charcoal/60 p-2.5 text-gold backdrop-blur-md transition-colors hover:bg-charcoal/80"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-charcoal/95 backdrop-blur-xl lg:hidden animate-fade-up">
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV.map(([label, href]) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  to={href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-gold/15 text-gold"
                      : "text-cream/85 hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href={SALON.tel}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-charcoal shadow-lg shadow-gold/25"
            >
              <Phone className="h-4 w-4" /> Call {SALON.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
