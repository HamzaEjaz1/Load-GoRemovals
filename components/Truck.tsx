type UteProps = {
  className?: string;
  animated?: boolean;
};

export function Ute({ className, animated = false }: UteProps) {
  return (
    <svg className={className} viewBox="0 0 300 110" fill="none" aria-hidden="true">
      <g className="truck">
        <path d="M152 20 V10 Q152 6 156 6 H214 Q220 6 223 12 L244 52 L282 58 Q292 60 292 70 V84 Q292 88 288 88 H264" />
        <path d="M212 88 H112" />
        <path d="M60 88 H18 Q10 88 10 80 V68 Q10 54 24 52 L152 50 V20" />
        <path d="M162 14 H210 Q214 14 216 18 L232 50 H162 Z" />
        <line x1="152" y1="50" x2="152" y2="88" />
        <line x1="166" y1="60" x2="180" y2="60" />
        <path d="M10 76 H18 V84" />
        <path d="M292 72 H284 V80 H292" />
        <path d="M60 88 A26 26 0 0 1 112 88" />
        <path d="M212 88 A26 26 0 0 1 264 88" />
        <g className={animated ? "wheel wheel-rear" : undefined}>
          <circle cx="86" cy="88" r="20" />
          <circle cx="86" cy="88" r="10" />
          {animated ? (
            <path d="M86 71 V105 M69 88 H103 M74 76 L98 100 M98 76 L74 100" />
          ) : null}
        </g>
        <g className={animated ? "wheel wheel-front" : undefined}>
          <circle cx="238" cy="88" r="20" />
          <circle cx="238" cy="88" r="10" />
          {animated ? (
            <path d="M238 71 V105 M221 88 H255 M226 76 L250 100 M250 76 L226 100" />
          ) : null}
        </g>
      </g>
    </svg>
  );
}
