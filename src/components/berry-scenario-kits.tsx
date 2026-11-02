"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { buildScenario, type BuiltPiece, type ScenarioPieceKey } from "@/lib/berry-scenarios";
import type { BerryExtra } from "@/lib/content/berry-avenue-extra";

function countLine(template: string, count: number): string {
  return template.replaceAll("{count}", String(count));
}

function PieceRow({
  label,
  piece,
  copy,
}: {
  label: string;
  piece: BuiltPiece;
  copy: BerryExtra["kits"];
}) {
  const count = piece.max === null ? copy.openCount : copy.boundedCount;
  return (
    <div className="rounded-xl border border-line bg-white p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase">{label}</p>
          <p className="result-text mt-1 text-lg break-words text-ink-900">{piece.text || "—"}</p>
        </div>
        <CopyButton text={piece.text} ariaLabel={label} />
      </div>
      <p className={`mt-2 text-xs ${piece.outside ? "font-semibold text-warning" : "text-ink-600"}`}>
        {countLine(count, piece.graphemes)}
        {piece.outside ? ` ${copy.outside}` : ""}
        {piece.trimmed ? ` ${copy.trimmed}` : ""}
      </p>
    </div>
  );
}

export function BerryScenarioKits({
  copy,
  defaultName,
}: {
  copy: BerryExtra["kits"];
  defaultName: string;
}) {
  const [name, setName] = useState(defaultName);
  const order: ScenarioPieceKey[] = ["display", "bio", "sign", "plain"];

  return (
    <section className="mt-12" aria-labelledby="berry-scenarios-heading">
      <h2 id="berry-scenarios-heading" className="text-xl font-bold text-ink-900">
        {copy.heading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{copy.intro}</p>
      <label htmlFor="berry-scenario-name" className="mt-4 mb-2 block text-sm font-semibold text-ink-700">
        {copy.nameLabel}
      </label>
      <input
        id="berry-scenario-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        autoComplete="off"
        spellCheck={false}
        className="text-input"
      />
      <div className="mt-4 space-y-4">
        {copy.items.map((item) => {
          const pieces = buildScenario(name, item.template);
          return (
            <article key={item.id} className="rounded-2xl border border-line bg-surface p-4">
              <h3 className="font-bold text-ink-900">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-600">{item.blurb}</p>
              <div className="mt-3 space-y-2">
                {order.map((key) => {
                  const built = pieces.find((entry) => entry.key === key);
                  if (!built) return null;
                  return <PieceRow key={key} label={copy.pieces[key]} piece={built} copy={copy} />;
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
