interface PixelStarProps {
  className?: string;
}

const STAR = [[3], [3], [2, 3, 4], [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], [2, 3, 4], [0, 2, 4, 6]];
const HEART = [[1, 2, 4, 5], [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], [2, 3, 4], [3]];
const SPARK = [[3], [1, 3, 5], [2, 3, 4], [0, 1, 2, 4, 5, 6], [2, 3, 4], [1, 3, 5], [3]];

function PixelGlyph({ rows, className }: { rows: number[][]; className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true" focusable="false">
      {rows.flatMap((cols, r) =>
        cols.map((c) => (
          <rect key={`${c}-${r}`} x={c * 4} y={r * 4} width={4} height={4} fill="currentColor" />
        )),
      )}
    </svg>
  );
}

/** Eight-bit style pixel star used for the logo and small decorations. */
export function PixelStar({ className }: PixelStarProps) {
  return <PixelGlyph rows={STAR} className={className} />;
}

export function PixelHeart({ className }: PixelStarProps) {
  return <PixelGlyph rows={HEART} className={className} />;
}

export function PixelSpark({ className }: PixelStarProps) {
  return <PixelGlyph rows={SPARK} className={className} />;
}
