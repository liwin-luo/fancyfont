import type { Metadata } from "next";
import Link from "next/link";
import { PixelStar } from "@/components/pixel-star";
import { localePath, type Locale } from "@/lib/i18n";

export const notFoundMetadata: Record<Locale, Metadata> = {
  en: { title: "Page not found", robots: { index: false, follow: false } },
  es: { title: "Página no encontrada", robots: { index: false, follow: false } },
  "pt-br": { title: "Página não encontrada", robots: { index: false, follow: false } },
  "zh-cn": { title: "找不到页面", robots: { index: false, follow: false } },
  id: { title: "Halaman tidak ditemukan", robots: { index: false, follow: false } },
};

const COPY: Record<Locale, { h1: string; sub: string; back: string; fancy: string }> = {
  en: {
    h1: "This page went full glitch",
    sub: "The page you are looking for doesn't exist — but our generators do.",
    back: "Back to home",
    fancy: "Try Fancy Text",
  },
  es: {
    h1: "Esta página se volvió glitch",
    sub: "La página que buscas no existe — pero nuestros generadores sí.",
    back: "Volver al inicio",
    fancy: "Probar letras bonitas",
  },
  "pt-br": {
    h1: "Esta página virou glitch",
    sub: "A página que você procura não existe — mas nossos geradores sim.",
    back: "Voltar ao início",
    fancy: "Testar letras bonitas",
  },
  "zh-cn": {
    h1: "这个页面乱码了",
    sub: "你要找的页面不存在——但我们的生成器都在。",
    back: "回到首页",
    fancy: "试试个性字体",
  },
  id: {
    h1: "Halaman ini berubah jadi glitch",
    sub: "Halaman yang kamu cari tidak ada — tapi generator kami ada.",
    back: "Kembali ke beranda",
    fancy: "Coba Huruf Keren",
  },
};

export function NotFoundTemplate({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
        <PixelStar className="h-8 w-8 text-brand-600" />
      </span>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink-900">{c.h1}</h1>
      <p className="mt-3 text-ink-600">{c.sub}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href={localePath(locale, "/")} className="btn-primary">
          {c.back}
        </Link>
        <Link href={localePath(locale, "/fancy-text-generator/")} className="btn-secondary">
          {c.fancy}
        </Link>
      </div>
    </div>
  );
}
