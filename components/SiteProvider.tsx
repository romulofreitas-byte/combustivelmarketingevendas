"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type SiteState = {
  segment: string;
  result: string;
  weak: string;
  setSegment: (segment: string) => void;
  setDiagnosis: (result: string, weak: string) => void;
  clearDiagnosis: () => void;
};

const SiteContext = createContext<SiteState | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [segment, setSegment] = useState("Química");
  const [result, setResult] = useState("");
  const [weak, setWeak] = useState("");
  const setDiagnosis = useCallback((nextResult: string, nextWeak: string) => {
    setResult(nextResult);
    setWeak(nextWeak);
  }, []);
  const clearDiagnosis = useCallback(() => {
    setResult("");
    setWeak("");
  }, []);

  const value = useMemo<SiteState>(
    () => ({
      segment,
      result,
      weak,
      setSegment,
      setDiagnosis,
      clearDiagnosis
    }),
    [segment, result, weak, setDiagnosis, clearDiagnosis]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite precisa estar dentro de SiteProvider");
  return value;
}
