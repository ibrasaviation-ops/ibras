'use client';

/**
 * IbrasLogo — theme-driven SVG recreation of the Ibras Aviation mark.
 *
 * Color contract
 * ---------------
 * The logo has three "slots" that must always resolve against the
 * background it's placed on, rather than being baked into a raster file:
 *
 *   1. wordmark   — the heavy "IBRAS" text + plane icon
 *   2. subtext    — the letter-spaced "AVIATION" line
 *   3. streak     — the motion trail behind the plane
 *
 * `tone="light"` -> for dark/navy surfaces (navbar over video, footer,
 *                    hero). Wordmark = --color-foreground (white),
 *                    subtext = --color-subtle, streak = --color-accent.
 * `tone="dark"`  -> for light surfaces (FAQ, Contact, any white card).
 *                    Wordmark = --color-ink, subtext = --color-ink-muted,
 *                    streak = --color-accent-hover.
 *
 * Because every fill is a CSS var, flipping tone is the only thing you
 * ever need to do — no second exported PNG, no manual hex-picking.
 */

interface IbrasLogoProps {
  tone?: 'light' | 'dark';
  layout?: 'horizontal' | 'stacked';
  className?: string;
  /** Optional: render the plane-streak accent, off by default disables it */
  showStreak?: boolean;
}

const PLANE_PATH =
  'M21,16v-2l-8-5V3.5C13,2.67,12.33,2,11.5,2S10,2.67,10,3.5V9l-8,5v2l8-2.5V19l-2.5,1.5V22l4-1l4,1v-1.5L13,19v-5.5L21,16z';

export default function IbrasLogo({
  tone = 'light',
  layout = 'horizontal',
  className = '',
  showStreak = true,
}: IbrasLogoProps) {
  const wordColor = tone === 'light' ? 'var(--color-foreground)' : 'var(--color-ink)';
  const subColor = tone === 'light' ? 'var(--color-subtle)' : 'var(--color-ink-muted)';
  const streakColor = tone === 'light' ? 'var(--color-accent)' : 'var(--color-accent-hover)';

  const Mark = (
    <g>
      {showStreak && (
        <path
          d="M0 27 L14 27 L34 3 L40 3 L20 27 L40 27 L20 33 Z"
          fill={streakColor}
          opacity={0.55}
        />
      )}
      <g transform="translate(11,4) scale(0.85) rotate(-18 11.5 12)">
        <path d={PLANE_PATH} fill={wordColor} />
      </g>
    </g>
  );

  if (layout === 'stacked') {
    return (
      <svg
        viewBox="0 0 200 150"
        className={className}
        role="img"
        aria-label="Ibras Aviation"
        style={{ fontFamily: 'inherit' }}
      >
        <g transform="translate(74,4) scale(1.3)">{Mark}</g>
        <text
          x="100"
          y="92"
          textAnchor="middle"
          fontWeight={800}
          fontSize="34"
          letterSpacing="1"
          fill={wordColor}
        >
          IBRAS
        </text>
        <text
          x="100"
          y="112"
          textAnchor="middle"
          fontWeight={600}
          fontSize="12"
          letterSpacing="6"
          fill={subColor}
        >
          AVIATION
        </text>
        <line x1="30" y1="130" x2="170" y2="130" stroke={subColor} strokeWidth="1" opacity={0.6} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 210 44"
      className={className}
      role="img"
      aria-label="Ibras Aviation"
      style={{ fontFamily: 'inherit' }}
    >
      <g transform="translate(2,6)">{Mark}</g>
      <text x="54" y="24" fontWeight={800} fontSize="21" letterSpacing="0.5" fill={wordColor}>
        IBRAS
      </text>
      <text x="54" y="38" fontWeight={600} fontSize="9" letterSpacing="3.5" fill={subColor}>
        AVIATION
      </text>
    </svg>
  );
}
