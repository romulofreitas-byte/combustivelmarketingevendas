"use client";

import { RefObject, useEffect, useRef } from "react";
import type { ChainMode } from "@/data/canal";

export function useChainDots(
  pathRef: RefObject<SVGPathElement | null>,
  groupRef: RefObject<SVGGElement | null>,
  mode: ChainMode
) {
  const modeRef = useRef(mode);
  const drawRef = useRef<() => void>(() => {});
  modeRef.current = mode;

  useEffect(() => {
    drawRef.current();
  }, [mode]);

  useEffect(() => {
    const path = pathRef.current;
    const group = groupRef.current;
    if (!path || !group) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ns = "http://www.w3.org/2000/svg";
    const count = 18;
    const dots: SVGCircleElement[] = [];
    group.replaceChildren();
    for (let i = 0; i < count; i++) {
      const circle = document.createElementNS(ns, "circle");
      circle.setAttribute("r", "5");
      group.appendChild(circle);
      dots.push(circle);
    }

    let t = 0;
    let frameId = 0;
    let visible = true;

    const draw = () => {
      const length = path.getTotalLength();
      if (!length) return;
      t += 0.0016;
      const current = modeRef.current;
      dots.forEach((dot, index) => {
        const back = current === "out" || (current === "both" && index % 2 === 1);
        let u = (index / count + t) % 1;
        if (back) u = 1 - u;
        const point = path.getPointAtLength(u * length);
        dot.setAttribute("cx", String(point.x));
        dot.setAttribute("cy", String(point.y));
        dot.setAttribute("opacity", String(0.35 + 0.65 * Math.sin(u * Math.PI)));
        dot.setAttribute("fill", back ? "#7FB0FF" : "#F5B301");
      });
    };

    drawRef.current = draw;

    const loop = () => {
      if (!visible) return;
      draw();
      frameId = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduce) {
        cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(loop);
      }
    });
    const svg = path.ownerSVGElement;
    if (svg) observer.observe(svg);

    if (reduce) draw();
    else {
      visible = true;
      frameId = requestAnimationFrame(loop);
    }

    return () => {
      drawRef.current = () => {};
      cancelAnimationFrame(frameId);
      observer.disconnect();
      group.replaceChildren();
    };
  }, [pathRef, groupRef]);
}
