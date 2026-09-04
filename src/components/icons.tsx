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

export function BigasMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="-130 -130 1340 1340" width={size} height={size} className={className} aria-hidden>
      <g transform="matrix(6.706568,0,0,6.706568,-1558.718151,-3132.090132)">
        <g transform="matrix(1,0,0,1,65,271)">
          <path
            d="M280.353,206.635C305.839,240.857 269.888,267.696 258.498,267.722C249.643,267.742 224.713,265.344 200.492,290.492C190.604,300.758 187.373,311.667 186.76,313.738C186.256,315.441 184.763,313.904 184.734,313.459C184.447,309.072 185.338,309.138 185.203,258.5C185.19,253.698 185.057,204.045 185.231,198.481C185.337,195.092 187.476,196.251 254.494,196.068C270.377,196.024 277.138,203.678 280.353,206.635Z"
            fill="#35B379"
          />
          <path
            d="M262.88,268.656C264.081,268.314 269.712,266.711 278.493,268.534C333.569,279.969 313.766,356.473 258.501,357.537C258.42,357.538 187.977,357.597 187.49,357.585C182.213,357.46 191.765,341.117 198.971,332.906C205.12,325.899 262.576,268.947 262.88,268.656Z"
            fill="#1C8F63"
          />
        </g>
      </g>
    </svg>
  );
}

export function Sprout({ size = 30, tone = "#22C55E" }: { size?: number; tone?: string }) {
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
