interface PixelStarProps {
  className?: string;
}

/** Eight-bit style pixel star used for the logo and small decorations. */
export function PixelStar({ className }: PixelStarProps) {
  const filled: [number, number][] = [];
  const rows = [
    [3],
    [3],
    [2, 3, 4],
    [0, 1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [2, 3, 4],
    [0, 2, 4, 6],
  ];
  rows.forEach((cols, r) => cols.forEach((c) => filled.push([c, r])));

  return (
    <svg
      viewBox="0 0 28 28"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {filled.map(([c, r]) => (
        <rect key={`${c}-${r}`} x={c * 4} y={r * 4} width={4} height={4} fill="currentColor" />
      ))}
    </svg>
  );
}
