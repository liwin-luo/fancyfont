"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import type { CodExtra } from "@/lib/content/cod-extra";
import { buildCodScenario, type CodPieceKey } from "@/lib/cod-scenarios";

const order: CodPieceKey[] = ["player", "clan", "plain"];

export function CodScenarioKits({ copy, defaultName }: { copy: CodExtra["kits"]; defaultName: string }) {
  const [name, setName] = useState(defaultName);

  return (
    <section className="mt-12" aria-labelledby="cod-scenarios-heading">
      <h2 id="cod-scenarios-heading" className="text-xl font-bold text-ink-900">
        {copy.heading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{copy.intro}</p>
      <label htmlFor="cod-scenario-name" className="mt-4 mb-2 block text-sm font-semibold text-ink-700">
        {copy.nameLabel}
      </label>
      <input
        id="cod-scenario-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        autoComplete="off"
        spellCheck={false}
        className="text-input"
      />
      <div className="mt-4 space-y-4">
        {copy.items.map((item) => {
          const pieces = buildCodScenario(name, item.template);
          return (
            <article key={item.id} className="rounded-2xl border border-line bg-surface p-4">
              <h3 className="font-bold text-ink-900">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-600">{item.blurb}</p>
              <div className="mt-3 space-y-2">
                {order.map((key) => {
                  const piece = pieces.find((entry) => entry.key === key);
                  if (!piece) return null;
                  return (
                    <div key={key} className="rounded-xl border border-line bg-white p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase">
                            {copy.pieces[key]}
                          </p>
                          <p className="result-text mt-1 text-lg break-words text-ink-900">{piece.text || "—"}</p>
                        </div>
                        <CopyButton text={piece.text} ariaLabel={copy.pieces[key]} />
                      </div>
                      <p className="mt-2 text-xs text-ink-600">
                        {copy.count.replaceAll("{count}", String(piece.graphemes))}
                        {key === "clan" ? ` ${copy.clanHint}` : ""}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
