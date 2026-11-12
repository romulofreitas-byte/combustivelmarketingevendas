"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function FingerMarquee({
  className,
  trackClassName,
  children,
}: {
  className: string;
  trackClassName: string;
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const media = window.matchMedia("(max-width: 860px)");
    let drag: { id: number; x: number; y: number; anim: Animation; active: boolean } | null = null;

    const onDown = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === "mouse") return;
      const anim = track.getAnimations()[0];
      if (!anim) return;
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY, anim, active: false };
    };

    const onMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (!drag.active) {
        if (Math.hypot(dx, dy) < 8) return;
        if (Math.abs(dy) > Math.abs(dx)) {
          drag = null;
          return;
        }
        drag.active = true;
        drag.anim.pause();
        try {
          root.setPointerCapture(event.pointerId);
        } catch {
          // The pointer can already be gone if the gesture ends on the same frame.
        }
      }
      if (dx === 0) return;
      drag.x = event.clientX;
      drag.y = event.clientY;
      const distance = track.scrollWidth / 2;
      const duration = Number(drag.anim.effect?.getComputedTiming().duration ?? 0);
      if (!distance || !duration) return;
      const next = Number(drag.anim.currentTime ?? 0) + (-dx / distance) * duration;
      drag.anim.currentTime = ((next % duration) + duration) % duration;
    };

    const onUp = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return;
      if (drag.active) drag.anim.play();
      drag = null;
    };

    root.addEventListener("pointerdown", onDown);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerup", onUp);
    root.addEventListener("pointercancel", onUp);
    return () => {
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div className={className} ref={rootRef}>
      <div className={trackClassName} ref={trackRef}>
        {children}
      </div>
    </div>
  );
}
