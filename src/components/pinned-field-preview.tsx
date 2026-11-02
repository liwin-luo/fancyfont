import type { PinnedFieldPreview as PinnedFieldPreviewCopy } from "@/lib/content/platform-pages-en";

export function formatFieldCount(template: string, count: number, max: number, label: string): string {
  return template
    .replaceAll("{count}", String(count))
    .replaceAll("{max}", String(max))
    .replaceAll("{label}", label);
}

export function PinnedFieldPreview({
  copy,
  styled,
  handle,
  label,
  count,
  max,
}: {
  copy: PinnedFieldPreviewCopy;
  styled: string;
  handle: string;
  label: string;
  count: number;
  max: number;
}) {
  const over = count > max;
  const shown = styled || "—";

  return (
    <section
      aria-labelledby="pinned-preview-heading"
      data-pinned-preview="berry"
      data-graphemes={count}
      data-limit={max}
      data-over={over ? "true" : "false"}
    >
      <h2 id="pinned-preview-heading" className="text-sm font-bold text-ink-900">
        {copy.heading}
      </h2>
      <p className="mt-1 text-xs leading-relaxed text-ink-600">{formatFieldCount(copy.showing, count, max, label)}</p>
      <div className="mt-2 rounded-2xl border border-line bg-[#f6f7f8] p-4">
        <p className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase">{copy.displayName}</p>
        <p className="result-text mt-1 text-2xl leading-tight font-extrabold text-ink-900">{shown}</p>
        <p className="mt-3 text-[11px] font-semibold tracking-wider text-ink-500 uppercase">{copy.username}</p>
        <p className="mt-1 text-sm text-ink-500">@{handle}</p>
        <div className="mt-3 rounded-md border-4 border-[#c4a574] bg-[#fff8e7] px-3 py-2 text-center">
          <p className="text-[11px] font-semibold tracking-wider text-[#8a6a3b] uppercase">{copy.sign}</p>
          <p className="result-text mt-1 text-lg text-ink-900">{shown}</p>
        </div>
      </div>
      <p
        className={`mt-2 text-sm font-semibold ${over ? "text-warning" : "text-ink-800"}`}
        aria-live="polite"
      >
        {formatFieldCount(copy.counter, count, max, label)}
        {over ? ` ${copy.over}` : ""}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-ink-600">{copy.approxNote}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-600">{copy.usernameNote}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-600">{copy.signNote}</p>
    </section>
  );
}
