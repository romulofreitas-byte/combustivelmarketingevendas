"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import {
  buildBrazilDots,
  insideBrazil,
  levels,
  passos,
  regionOf,
  type MapLens,
  type RegionName
} from "@/data/brazil";

export function useBrazilMap(canvasRef: RefObject<HTMLCanvasElement | null>) {
  const [lens, setLensState] = useState<MapLens>("v");
  const [selected, setSelected] = useState<RegionName>("Sudeste");
  const lensRef = useRef<MapLens>("v");
  const selectedRef = useRef<RegionName>("Sudeste");
  const hoverRef = useRef<RegionName | null>(null);
  const drawRef = useRef<() => void>(() => {});

  const setLens = (next: MapLens) => {
    lensRef.current = next;
    setLensState(next);
    drawRef.current();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const dots = buildBrazilDots();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let tt = 0;
    let frameId = 0;
    let visible = true;

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      canvas.width = width * dpr;
      canvas.height = width * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const projectX = (lon: number) => ((lon + 74) / 40) * width;
    const projectY = (lat: number) => ((5.8 - lat) / 40) * width;

    const draw = () => {
      if (!width) return;
      tt += 0.03;
      context.clearRect(0, 0, width, width);
      const lensNow = lensRef.current;
      const selectedNow = selectedRef.current;
      const hover = hoverRef.current;
      for (const dot of dots) {
        const [vende, procura] = levels[dot.r];
        const level = lensNow === "v" ? vende : procura;
        let alpha = [0.16, 0.5, 1][level];
        const radius = (width / 110) * (dot.r === selectedNow ? 1.25 : 1);
        if (dot.r === hover) alpha = Math.min(1, alpha + 0.25);
        if (dot.r === selectedNow && level === 0) alpha = 0.3;
        context.fillStyle = lensNow === "v" ? `rgba(245,179,1,${alpha})` : `rgba(127,176,255,${alpha})`;
        context.beginPath();
        context.arc(projectX(dot.lo), projectY(dot.la), radius, 0, Math.PI * 2);
        context.fill();
      }
      const pinX = projectX(passos.lo);
      const pinY = projectY(passos.la);
      const pulse = (Math.sin(tt) + 1) / 2;
      context.strokeStyle = `rgba(127,176,255,${lensNow === "p" ? 0.9 : 0.5})`;
      context.lineWidth = 2;
      context.beginPath();
      context.arc(pinX, pinY, width / 80 + pulse * (width / 30), 0, Math.PI * 2);
      context.stroke();
      context.fillStyle = "#7FB0FF";
      context.beginPath();
      context.arc(pinX, pinY, (width / 110) * 1.6, 0, Math.PI * 2);
      context.fill();
    };

    drawRef.current = () => {
      if (reduce) draw();
    };

    const loop = () => {
      if (!visible) return;
      draw();
      frameId = requestAnimationFrame(loop);
    };

    const regionAt = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * width;
      const y = ((event.clientY - rect.top) / rect.height) * width;
      const lon = (x / width) * 40 - 74;
      const lat = 5.8 - (y / width) * 40;
      return insideBrazil(lon, lat) ? regionOf(lon, lat) : null;
    };

    const onMove = (event: PointerEvent) => {
      hoverRef.current = regionAt(event);
      if (reduce) draw();
    };
    const onLeave = () => {
      hoverRef.current = null;
      if (reduce) draw();
    };
    const onClick = (event: PointerEvent) => {
      const region = regionAt(event);
      if (!region) return;
      selectedRef.current = region;
      setSelected(region);
      if (reduce) draw();
    };
    const onResize = () => {
      size();
      draw();
    };

    size();
    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("click", onClick);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduce) {
        cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(loop);
      }
    });
    observer.observe(canvas);

    if (reduce) draw();
    else frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      drawRef.current = () => {};
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, [canvasRef]);

  return { lens, setLens, selected };
}
