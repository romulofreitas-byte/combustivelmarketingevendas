"use client";

import { useEffect } from "react";

export function ProtectImages() {
  useEffect(() => {
    const block = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest("img")) return;
      event.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
}
