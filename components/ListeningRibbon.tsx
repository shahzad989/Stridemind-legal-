// The own-audio walk in one picture, drawn the same way as the app's ribbon
// (components/ListeningRibbon.tsx in the app repo): someone's podcast as a run
// of sound bars, broken by a warm dot where a task sits. A plain SVG with a
// fixed viewBox, so it scales to any screen and renders on the server.
const BAR_WIDTH = 3;
const BAR_GAP = 3;
const DOT_SLOT = 26;

// Fixed, irregular heights so the bars look like speech, not a pattern.
function barHeight(i: number): number {
  const v = Math.abs(Math.sin(i * 1.7) * 0.55 + Math.sin(i * 0.43 + 1) * 0.45);
  return 0.22 + v * 0.78;
}

export default function ListeningRibbon({
  barsPerRun = 14,
  dots = 3,
  height = 72,
  barColor,
  dotColor = '#F2C97D',
  haloColor = 'rgba(242,201,125,0.22)',
  className,
}: {
  barsPerRun?: number;
  dots?: number;
  height?: number;
  barColor: string;
  dotColor?: string;
  haloColor?: string;
  className?: string;
}) {
  const mid = height / 2;
  const shapes: React.ReactNode[] = [];
  let x = 0;
  let bar = 0;
  for (let r = 0; r <= dots; r++) {
    for (let b = 0; b < barsPerRun; b++) {
      const h = barHeight(bar) * (height - 8);
      shapes.push(
        <rect
          key={`b${bar}`}
          x={x}
          y={mid - h / 2}
          width={BAR_WIDTH}
          height={h}
          rx={BAR_WIDTH / 2}
          fill={barColor}
        />
      );
      x += BAR_WIDTH + BAR_GAP;
      bar++;
    }
    if (r < dots) {
      const cx = x + DOT_SLOT / 2 - BAR_GAP / 2;
      shapes.push(<circle key={`h${r}`} cx={cx} cy={mid} r={11} fill={haloColor} />);
      shapes.push(<circle key={`d${r}`} cx={cx} cy={mid} r={5} fill={dotColor} />);
      x += DOT_SLOT;
    }
  }
  return (
    <svg
      viewBox={`0 0 ${x - BAR_GAP} ${height}`}
      className={className}
      width="100%"
      aria-hidden="true"
    >
      {shapes}
    </svg>
  );
}
