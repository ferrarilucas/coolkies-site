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

export function CookieMark({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 512 512" width={size} height={size} aria-hidden>
      <rect width="512" height="512" fill="#8B5E3C" />
      <circle cx="256" cy="256" r="158" fill="#DFA96E" />
      <circle cx="256" cy="256" r="158" fill="none" stroke="#C08B52" strokeWidth="14" />
      <circle cx="205" cy="205" r="24" fill="#4B2E1A" />
      <circle cx="300" cy="180" r="19" fill="#4B2E1A" />
      <circle cx="330" cy="270" r="23" fill="#4B2E1A" />
      <circle cx="240" cy="300" r="20" fill="#4B2E1A" />
      <circle cx="175" cy="280" r="15" fill="#4B2E1A" />
      <circle cx="285" cy="345" r="14" fill="#4B2E1A" />
    </svg>
  );
}

export function Crumb({ size = 30, tone = "#DFA96E" }: { size?: number; tone?: string }) {
  return (
    <svg viewBox="0 0 512 512" width={size} height={size} aria-hidden>
      <circle cx="256" cy="256" r="200" fill={tone} />
      <circle cx="205" cy="205" r="30" fill="#4B2E1A" />
      <circle cx="320" cy="260" r="26" fill="#4B2E1A" />
      <circle cx="240" cy="330" r="22" fill="#4B2E1A" />
    </svg>
  );
}
