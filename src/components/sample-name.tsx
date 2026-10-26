"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { convertText, type TextStyleId } from "@/lib/text-styles";

const SampleNameContext = createContext("");

const INTERVAL_MS = 2600;

export function SampleNameProvider({
  names,
  children,
}: {
  names: readonly string[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (names.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % names.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [names]);

  return (
    <SampleNameContext.Provider value={names[index] ?? ""}>{children}</SampleNameContext.Provider>
  );
}

export function SampleStyledName({
  styleId,
  className,
}: {
  styleId: TextStyleId;
  className?: string;
}) {
  const name = useContext(SampleNameContext);
  return (
    <span key={name} className={`sample-name-in ${className ?? ""}`}>
      {convertText(name, styleId)}
    </span>
  );
}
