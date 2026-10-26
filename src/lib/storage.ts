"use client";

// Small SSR-safe localStorage helpers with cross-component sync.
// Backs favorites, recent symbols, saved names, and custom combos —
// everything stays on the user's device, no accounts needed.

import { useCallback, useEffect, useState } from "react";

const EVENT_NAME = "fancyfont:local-list";

export function readLocalList(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

export function writeLocalList(key: string, items: string[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { key } }));
  } catch {
    // Storage may be unavailable (private mode, quota) — fail silently.
  }
}

export interface LocalList {
  items: string[];
  /** Adds an item (dedup, newest first) and trims to max. */
  add: (item: string) => void;
  /** Toggles an item: adds it when missing, removes it when present. */
  toggle: (item: string) => void;
  remove: (item: string) => void;
  clear: () => void;
}

export function useLocalList(key: string, max = 50): LocalList {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(readLocalList(key));
    const sync = (event: Event) => {
      const detail = (event as CustomEvent<{ key: string }>).detail;
      if (!detail || detail.key === key) setItems(readLocalList(key));
    };
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, [key]);

  const commit = useCallback(
    (next: string[]) => {
      const trimmed = next.slice(0, max);
      setItems(trimmed);
      writeLocalList(key, trimmed);
    },
    [key, max],
  );

  const add = useCallback(
    (item: string) => {
      commit([item, ...readLocalList(key).filter((existing) => existing !== item)]);
    },
    [commit, key],
  );

  const toggle = useCallback(
    (item: string) => {
      const current = readLocalList(key);
      commit(
        current.includes(item)
          ? current.filter((existing) => existing !== item)
          : [item, ...current],
      );
    },
    [commit, key],
  );

  const remove = useCallback(
    (item: string) => {
      commit(readLocalList(key).filter((existing) => existing !== item));
    },
    [commit, key],
  );

  const clear = useCallback(() => {
    commit([]);
  }, [commit]);

  return { items, add, toggle, remove, clear };
}
