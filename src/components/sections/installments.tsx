"use client";

import { useEffect, useState } from "react";
import { Reveal, useInView } from "@/components/reveal";
import { Check, Shield } from "@/components/icons";

const parcels = [
  { label: "1ª parcela", when: "Na entrega · 05/09", amount: 120 },
  { label: "2ª parcela", when: "Dia 5 · 05/10", amount: 120 },
  { label: "3ª parcela", when: "5º dia útil · 07/11", amount: 120 },
];

const total = parcels.reduce((sum, parcel) => sum + parcel.amount, 0);

const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const benefits = [
  ["Sem cartão, sem maquininha, sem taxa de terceiro.", "O dinheiro é seu, inteiro."],
  ["Parcela do jeito que vocês combinaram.", "2x no dia 5, 3x quinzenal, entrada e resto no fim do mês — você decide."],
  ["Cobrança sem climão.", "Lembrete pronto para mandar no WhatsApp, com o combinado registrado preto no branco."],
  ["Previsão de caixa de verdade.", "Cada parcela futura aparece no painel antes de cair na sua mão."],
];

export function Installments() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [paidCount, setPaidCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaidCount(parcels.length);
      return;
    }
    let step = 0;
    const timer = setInterval(() => {
      step = (step + 1) % (parcels.length + 2);
      setPaidCount(Math.min(step, parcels.length));
    }, 1100);
    return () => clearInterval(timer);
  }, [inView]);

  const paidValue = parcels.slice(0, paidCount).reduce((sum, parcel) => sum + parcel.amount, 0);

  return (
    <section id="parcelado" className="relative overflow-hidden py-[clamp(70px,9vw,110px)]">
      <span
        className="blob -right-32 top-10 h-[420px] w-[420px] animate-blob-a opacity-25"
        style={{ background: "radial-gradient(circle,#DFA96E,transparent 68%)" }}
        aria-hidden
      />
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="eyebrow">Em breve · exclusivo Coolkies</span>
          <h2 className="my-4 text-[clamp(1.9rem,4.4vw,3rem)]">
            Parcelado na Palavra: o <em className="not-italic text-primary">parcelamento de boca em boca</em>, agora com
            sistema atrás.
          </h2>
          <p className="lead">
            Seu cliente não tem cartão. Você não tem maquininha. O combinado é na palavra — e sempre foi assim. A
            diferença é que agora o combinado tem data, valor, lembrete e entra direto no seu fluxo de caixa.
          </p>
          <ul className="mt-7 grid gap-3.5">
            {benefits.map(([strong, rest]) => (
              <li key={strong} className="flex items-start gap-3 text-[15.5px] text-muted-foreground">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-success/10 text-success">
                  <Check width={13} height={13} />
                </span>
                <span>
                  <b className="text-foreground">{strong}</b> {rest}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a className="btn btn-primary btn-lg" href="#comecar">
              Entrar na lista de espera
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div ref={ref} className="rounded-2xl border border-border bg-card p-[clamp(20px,3.4vw,30px)] shadow-card">
            <div className="mb-[18px] flex items-center gap-3 border-b border-dashed border-border pb-[18px]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-xl">🧁</span>
              <span className="min-w-0">
                <span className="block truncate font-extrabold tracking-tight">Bruno Almeida</span>
                <span className="block text-[13px] text-muted-foreground">Kit festa · 3 parcelas combinadas</span>
              </span>
              <span className="ml-auto text-right">
                <b className="block text-[19px] font-extrabold tracking-tight tabular-nums">{brl(total)}</b>
                <span className="text-[11.5px] font-semibold uppercase tracking-wider text-muted-foreground">Total</span>
              </span>
            </div>

            <div className="grid gap-2.5">
              {parcels.map((parcel, index) => {
                const done = index < paidCount;
                return (
                  <div
                    key={parcel.label}
                    className={`flex items-center gap-3 rounded-2xl border p-3 transition-colors duration-500 ${
                      done ? "border-success/35 bg-success/5" : "border-border bg-background"
                    }`}
                  >
                    <span
                      className={`grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full border-2 transition-all duration-500 ${
                        done ? "border-success bg-success text-white" : "border-border text-transparent"
                      }`}
                    >
                      <Check width={13} height={13} />
                    </span>
                    <span>
                      <b className="block text-[14.5px] font-bold tracking-tight">{parcel.label}</b>
                      <span className="text-[12.5px] text-muted-foreground">{parcel.when}</span>
                    </span>
                    <span className="ml-auto text-[15px] font-extrabold tabular-nums">{brl(parcel.amount)}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-[18px] h-[7px] overflow-hidden rounded-full bg-muted">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-caramel to-primary transition-[width] duration-1000 ease-out"
                style={{ width: `${(paidValue / total) * 100}%` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-xs font-bold text-muted-foreground">
              <span className="tabular-nums">{brl(paidValue)} recebidos</span>
              <span className="tabular-nums">de {brl(total)}</span>
            </div>

            <div className="mt-[18px] flex items-center gap-2.5 rounded-xl bg-secondary p-3 text-[13px] text-muted-foreground">
              <Shield className="shrink-0 text-primary" />
              <span>Combinado registrado. Ninguém precisa lembrar de cabeça.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
