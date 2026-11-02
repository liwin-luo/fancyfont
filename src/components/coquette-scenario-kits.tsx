"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import type { CoquetteExtra } from "@/lib/content/coquette-extra";
import { buildCoquetteScenario } from "@/lib/coquette-scenarios";

export function CoquetteScenarioKits({
  copy,
  defaultName,
}: {
  copy: CoquetteExtra["kits"];
  defaultName: string;
}) {
  const [name, setName] = useState(defaultName);

  return (
    <section className="mt-12" aria-labelledby="coquette-scenarios-heading">
      <h2 id="coquette-scenarios-heading" className="text-xl font-bold text-ink-900">
        {copy.heading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{copy.intro}</p>
      <label htmlFor="coquette-scenario-name" className="mt-4 mb-2 block text-sm font-semibold text-ink-700">
        {copy.nameLabel}
      </label>
      <input
        id="coquette-scenario-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        autoComplete="off"
        spellCheck={false}
        className="text-input"
      />
      <div className="mt-4 space-y-4">
        {copy.items.map((item) => {
          const pieces = buildCoquetteScenario(name, item.template);
          return (
            <article key={item.id} className="rounded-2xl border border-line bg-surface p-4">
              <h3 className="font-bold text-ink-900">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-600">{item.blurb}</p>
              <div className="mt-3 space-y-2">
                {pieces.map((piece) => (
                  <div key={piece.key} className="rounded-xl border border-line bg-white p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase">
                          {copy.pieces[piece.key]}
                        </p>
                        <p className="result-text mt-1 text-lg break-words text-ink-900">{piece.text || "—"}</p>
                      </div>
                      <CopyButton text={piece.text} ariaLabel={copy.pieces[piece.key]} />
                    </div>
                    <p className="mt-2 text-xs text-ink-600">
                      {copy.count.replaceAll("{count}", String(piece.graphemes))}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
