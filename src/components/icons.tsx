import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export type IconName =
  | "cart"
  | "calendar"
  | "chart"
  | "box"
  | "recipe"
  | "bag"
  | "list"
  | "users"
  | "coins";

type Props = SVGProps<SVGSVGElement>;

const paths: Record<IconName, React.ReactNode> = {
  cart: (
    <>
      <circle cx="9" cy="20" r="1.6" />
      <circle cx="18" cy="20" r="1.6" />
      <path d="M2 3h2.5l2.3 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H5.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M8 2v4M16 2v4M3 10h18" />
      <path d="M9 15l2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <rect x="7" y="11" width="3" height="6" rx="1" />
      <rect x="13" y="7" width="3" height="10" rx="1" />
    </>
  ),
  box: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </>
  ),
  recipe: (
    <>
      <path d="M6 3v9a3 3 0 1 0 6 0V3" />
      <path d="M9 12v9" />
      <path d="M18 3c-1.5 2-2 4-2 6s.5 3 2 3 2-1 2-3-.5-4-2-6z" />
      <path d="M18 12v9" />
    </>
  ),
  bag: (
    <>
      <path d="M3 9h18l-1.4 10.2a2 2 0 0 1-2 1.8H6.4a2 2 0 0 1-2-1.8z" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </>
  ),
  list: (
    <>
      <path d="M9 5h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M10 9h4M10 13h4M10 17h2" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
    </>
  ),
  coins: (
    <>
      <path d="M12 3v18" />
      <path d="M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 2.6 5 3 5 1.1 5 3-2.2 3-5 3-5-1.1-5-3" />
    </>
  ),
};

export function Icon({ name, ...props }: Props & { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...base} {...props}>
      {paths[name]}
    </svg>
  );
}

export function Check(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden {...base} strokeWidth={3.2} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Close(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden {...base} strokeWidth={2.6} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Plus(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} aria-hidden {...base} strokeWidth={3} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function TrendUp(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={17} height={17} aria-hidden {...base} strokeWidth={2.4} {...props}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 8h4v4" />
    </svg>
  );
}

export function Clock(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={17} height={17} aria-hidden {...base} strokeWidth={2.4} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Shield(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={17} height={17} aria-hidden {...base} strokeWidth={2.2} {...props}>
      <path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function CipriLogo({ className = "", height = 30 }: { className?: string; height?: number }) {
  return (
    <svg viewBox="0 0 415 202" height={height} width={(height * 415) / 202} className={className} role="img" aria-label="Cipri">
      <g transform="translate(-42.97707 -149.049073)">
        <g transform="translate(-8.725233 -10.321148)">
          <path
            fill="currentColor"
            d="M257.053,320.502C256.999,347.804 258.847,358.277 247.556,360.767C247.525,360.774 231.687,362.268 226.689,360.083C217.428,356.034 219.482,348.824 219.335,309.502C219.13,254.136 216.837,237.582 241.763,215.812C275.865,186.028 354.449,206.548 345.353,272.479C338.989,318.607 284.298,334.074 259.238,316.951C258.476,316.431 258.497,316.437 257.539,316.571C256.993,316.647 257.048,320.185 257.053,320.502ZM277.583,286.084C316.78,289.84 314.845,238.21 281.481,239.131C258.471,239.765 243.96,275.247 277.583,286.084ZM69.335,224.355C73.211,220.386 76.907,216.093 86.606,210.696C124.035,189.87 175.992,213.909 159.042,235.153C148.089,248.88 144.011,247.398 142.5,247.417C138.531,247.464 117.459,235.02 102.793,249.803C79.464,273.319 109.783,307.387 133.687,291.817C148.218,282.353 149.861,288.763 160.389,302.583C171.981,317.802 138.269,330.296 132.537,331.642C72.675,345.699 24.375,279.543 69.335,224.355ZM354.931,236.622C355.731,234.506 358.358,222.461 371.154,213.051C373.341,211.443 385.03,202.849 403.499,202.789C422.03,202.73 421.06,208.986 420.715,227.505C420.449,241.753 405.536,238.849 402.525,239.597C388.87,242.987 391.106,255.429 391.091,278.5C391.072,307.849 393.486,321.125 379.486,322.333C354.783,324.463 353.161,315.502 353.076,308.507C352.343,248.779 353.734,242.249 354.931,236.622ZM172.136,252.501C172.185,221.025 171.304,217.567 175.833,212.813C181.457,206.911 210.3,202.197 210.385,223.499C210.733,311.253 211.714,312.142 207.009,318.072C202.23,324.096 180.233,325.044 174.825,317.257C171.981,313.16 172.047,312.785 172.136,252.501ZM426.762,237.498C426.762,222.973 425.646,216.326 431.575,211.593C438.558,206.017 454.403,208.375 457.326,209.836C466.4,214.37 464.591,217.182 464.644,281.5C464.665,307.212 466.964,320.667 452.479,322.269C434.931,324.211 430.75,318.898 429.593,317.427C426.274,313.208 426.82,312.63 426.762,237.498Z"
          />
        </g>
        <g transform="translate(22.274767 124.678852)">
          <path
            fill="currentColor"
            d="M177.748,54.626C162.573,79.472 127.696,55.644 144.441,31.453C154.751,16.559 189.951,25.561 177.748,54.626Z"
          />
          <path
            fill="#D7B98E"
            d="M424.42,62.357C388.002,77.118 384.438,18.926 419.422,24.868C431.691,26.952 444.158,48.356 424.42,62.357Z"
          />
        </g>
      </g>
    </svg>
  );
}

export function Sprout({ size = 30, tone = "currentColor" }: { size?: number; tone?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden fill="none">
      <path d="M12 21c0-5 1.6-8.4 5-10.4" stroke={tone} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M17 4.6c2.2 0 4 1.8 4 4 0 2.2-1.8 4-4 4-1.4 0-2.6-.7-3.3-1.8.6-3.3 2-5.4 3.3-6.2z" fill={tone} opacity={0.9} />
      <path d="M7 8.6c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4 1.6 0 3-.9 3.6-2.3-.5-3.2-1.9-5-3.6-5.7z" fill={tone} opacity={0.55} />
    </svg>
  );
}

export function Sun(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden {...base} strokeWidth={2.2} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.4v2.2M12 19.4v2.2M4.2 12H2M22 12h-2.2M5.6 5.6 4 4M20 20l-1.6-1.6M18.4 5.6 20 4M4 20l1.6-1.6" />
    </svg>
  );
}

export function Moon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden {...base} strokeWidth={2.2} {...props}>
      <path d="M20 13.4A8.4 8.4 0 0 1 10.6 4a8.4 8.4 0 1 0 9.4 9.4z" />
    </svg>
  );
}
