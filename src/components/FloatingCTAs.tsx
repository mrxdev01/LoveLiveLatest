import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { SALON } from "../lib/salon";

export function FloatingCTAs() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setShow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={SALON.tel}
        aria-label={`Call ${SALON.phone}`}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-charcoal shadow-2xl shadow-gold/30 transition-transform hover:scale-110 sm:hidden"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
        <Phone className="relative h-6 w-6" />
      </a>
      <a
        href={SALON.wa}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}
