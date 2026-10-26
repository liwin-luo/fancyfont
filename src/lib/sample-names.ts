// Homepage demo names, one list per locale. They rotate in the hero and
// the popular-styles grid.
//
// Only A–Z: the style engine leaves accents and Chinese characters
// unchanged, which makes a sample look broken. Spanish and Portuguese
// skip accented spellings (Lucía, Sofía, Heloísa). Chinese names are the
// pinyin of common given names for the same reason.
//
// Snapshot of public rankings, not a live feed. ponytail: refresh by hand
// when a new year of SSA / INE / cartório lists is worth chasing.

import type { Locale } from "./i18n";

export const sampleNames: Record<Locale, readonly string[]> = {
  // US Social Security 2024, alternating girls and boys.
  en: ["Olivia", "Liam", "Emma", "Noah", "Amelia", "Oliver", "Charlotte", "James"],
  // Spain INE recent top names that are spelled without accents.
  es: ["Martina", "Mateo", "Valeria", "Hugo", "Julia", "Lucas", "Paula", "Leo"],
  // Brazil cartório lists, given names only.
  "pt-br": ["Helena", "Miguel", "Alice", "Arthur", "Laura", "Gael", "Valentina", "Theo"],
  // Pinyin of widely used Chinese given names (浩然 欣怡 子轩 雨桐 浩宇 可馨 一诺 梦瑶).
  "zh-cn": ["Haoran", "Xinyi", "Zixuan", "Yutong", "Haoyu", "Kexin", "Yinuo", "Mengyao"],
  // Names that dominate Indonesian civil registration, plus other very common given names.
  id: ["Siti", "Muhammad", "Aisyah", "Ahmad", "Putri", "Rizky", "Dewi", "Budi"],
};
