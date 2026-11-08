"use client";

// 小型 SSR 安全的 localStorage 辅助,带跨组件同步。
// 支撑收藏、最近复制——一切留在用户设备上,无需注册账号。

import { useCallback, useEffect, useState } from "react";

const EVENT_NAME = "fontdrafts:local-list";

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
    // 存储可能不可用(隐私模式、配额满)——静默失败。
  }
}

export interface LocalList {
  items: string[];
  /** 添加条目(去重、最新在前)并裁剪到上限。 */
  add: (item: string) => void;
  /** 切换条目:不存在则添加,存在则移除。 */
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
