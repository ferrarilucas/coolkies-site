import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1160px" },
    },
    extend: {
      colors: {
        soft: {
          DEFAULT: "hsl(var(--soft))",
          foreground: "hsl(var(--soft-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          text: "hsl(var(--warning-text))",
        },
        terra: {
          DEFAULT: "#C94F32",
          dark: "#A63E25",
        },
        areia: "#D7B98E",
        bege: "#E7D7C0",
        creme: "#F7F4ED",
        carvao: "#25251F",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 12px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      boxShadow: {
        soft: "0 1px 2px hsl(60 9% 8% / .06)",
        card: "0 8px 28px -10px hsl(60 9% 8% / .18)",
        deep: "0 32px 64px -24px hsl(60 9% 8% / .34)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotateY(-9deg) rotateX(3deg)" },
          "50%": { transform: "translateY(-12px) rotateY(-9deg) rotateX(3deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "blob-a": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-40px,40px) scale(1.15)" },
        },
        "blob-b": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(50px,-30px) scale(1.2)" },
        },
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        grow: {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
        draw: { to: { strokeDashoffset: "0" } },
        wobble: {
          "0%, 100%": { transform: "rotate(0)" },
          "25%": { transform: "rotate(-12deg)" },
          "75%": { transform: "rotate(12deg)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) rotate(0)" },
          "50%": { transform: "translate(14px,-22px) rotate(18deg)" },
          "100%": { transform: "translate(0,0) rotate(0)" },
        },
        roll: {
          "0%, 16%": { transform: "translateY(0)" },
          "20%, 36%": { transform: "translateY(-1.5em)" },
          "40%, 56%": { transform: "translateY(-3em)" },
          "60%, 76%": { transform: "translateY(-4.5em)" },
          "80%, 96%": { transform: "translateY(-6em)" },
          "100%": { transform: "translateY(-7.5em)" },
        },
        "photo-in": {
          from: { opacity: "0", transform: "translateY(22px) scale(0.94)", filter: "blur(10px)" },
          to: { opacity: "1", transform: "none", filter: "blur(0)" },
        },
        "note-in": {
          from: { opacity: "0", transform: "translateY(14px) scale(0.82)" },
          to: { opacity: "1", transform: "none" },
        },
        "line-draw": {
          from: { strokeDasharray: "1", strokeDashoffset: "1" },
          to: { strokeDasharray: "1", strokeDashoffset: "0" },
        },
        "dot-in": {
          from: { opacity: "0", transform: "translate(-50%,-50%) scale(0)" },
          to: { opacity: "1", transform: "translate(-50%,-50%) scale(1)" },
        },
        "wipe-in": {
          from: { clipPath: "inset(0 100% 0 0)", opacity: "0" },
          to: { clipPath: "inset(0 0 0 0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        bob: "bob 6s ease-in-out infinite",
        "blob-a": "blob-a 18s ease-in-out infinite",
        "blob-b": "blob-b 22s ease-in-out infinite",
        slide: "slide 34s linear infinite",
        grow: "grow .8s cubic-bezier(.2,.9,.3,1) forwards",
        draw: "draw 1.1s .5s cubic-bezier(.4,0,.2,1) forwards",
        wobble: "wobble .6s ease",
        drift: "drift 11s ease-in-out infinite",
        roll: "roll 11s cubic-bezier(.6,0,.2,1) infinite",
        "fade-in": "fade-in .35s ease",
        "photo-in": "photo-in 1s cubic-bezier(.2,.8,.2,1) both",
        note: "note-in .7s cubic-bezier(.2,.9,.3,1.25) both, bob 6s ease-in-out infinite",
        "line-draw": "line-draw .55s cubic-bezier(.4,0,.2,1) both",
        "dot-in": "dot-in .4s cubic-bezier(.2,.9,.3,1.4) both",
        "wipe-in": "wipe-in 1.2s cubic-bezier(.5,0,.2,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
