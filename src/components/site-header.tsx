"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CookieMark } from "@/components/icons";

const links = [
  { href: "#recursos", label: "Recursos" },
  { href: "#parcelado", label: "Parcelado na Palavra" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#precos", label: "Preços" },
  { href: "#perguntas", label: "Dúvidas" },
];

export function SiteHeader() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        stuck ? "border-border shadow-soft" : "border-transparent"
      }`}
      style={{ background: "hsl(var(--background) / 0.82)" }}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Link href="#topo" className="group flex items-center gap-3 text-xl font-black tracking-[-0.03em]">
          <span className="w-9 shrink-0 overflow-hidden rounded-[11px] shadow-soft group-hover:animate-wobble">
            <CookieMark />
          </span>
          Coolkies
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-[15px] font-semibold text-muted-foreground lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a className="btn btn-primary px-5 py-[11px] text-[15px]" href="#comecar">
          Quero testar
        </a>
      </div>
    </header>
  );
}
