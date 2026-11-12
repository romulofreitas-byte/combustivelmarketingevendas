"use client";

import { waMessage, waNumber } from "@/lib/whatsapp";
import { useSite } from "./SiteProvider";

export function WhatsFloat() {
  const { segment, result, weak } = useSite();
  const number = waNumber();
  const message = waMessage(segment, result, weak);
  const href = number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "#cta";

  return (
    <a
      className="wa-float"
      href={href}
      target={number ? "_blank" : undefined}
      rel={number ? "noopener noreferrer" : undefined}
      aria-label="Chamar no WhatsApp"
      onClick={(event) => {
        if (number) return;
        event.preventDefault();
        navigator.clipboard?.writeText(message).catch(() => {});
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.95c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.3-1.64-.59-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.15-1.53-1.15-2.92s.73-2.07 1-2.35c.24-.26.64-.38.85-.38h.61c.2 0 .46-.07.72.55.27.64.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.15.34-.3.52-.15.18-.31.4-.44.54-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.17-.2.73-.85.93-1.14.2-.29.39-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.21.55.33.07.12.07.7-.17 1.38z"
        />
      </svg>
    </a>
  );
}
