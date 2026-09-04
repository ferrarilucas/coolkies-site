"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";

const STORAGE_KEY = "bigas-theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      document.documentElement.classList.toggle("dark", event.matches);
      setDark(event.matches);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
      title={dark ? "Tema claro" : "Tema escuro"}
      className={`grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      {dark === null ? <Sun className="opacity-0" /> : dark ? <Sun /> : <Moon />}
    </button>
  );
}

export const themeScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;
