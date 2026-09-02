"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { plans, guarantees } from "@/lib/pricing";
import { site } from "@/lib/site";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

function Check({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`mt-[3px] h-[18px] w-[18px] shrink-0 ${muted ? "text-primary-foreground" : "text-success"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="precos" className="border-y border-border bg-card py-[clamp(70px,9vw,110px)]">
      <div className="container">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Planos</span>
          <h2 className="my-4 text-[clamp(1.9rem,4.4vw,3rem)]">
            Menos que um pote de manteiga por semana.
          </h2>
          <p className="lead">
            Todos os planos vêm com os recursos completos do Coolkies. O que muda é quantos workspaces e quantas
            pessoas trabalham com você. No anual você economiza R$ 120 — no Balcão, é o ano inteiro pelo preço de
            oito meses.
          </p>
        </Reveal>

        <Reveal className="mb-4 flex flex-wrap items-center justify-center gap-3">
          <div
            role="radiogroup"
            aria-label="Ciclo de cobrança"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-background p-1.5 shadow-soft"
          >
            <button
              type="button"
              role="radio"
              aria-checked={yearly}
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2.5 text-[15px] font-bold transition-colors ${
                yearly ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anual
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={!yearly}
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2.5 text-[15px] font-bold transition-colors ${
                !yearly ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensal
            </button>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-success/12 px-3.5 py-2 text-[13px] font-extrabold uppercase tracking-wider text-success">
            No anual você economiza R$ 120 por ano
          </span>
        </Reveal>

        <p aria-live="polite" className="mb-10 text-center text-[14px] text-muted-foreground">
          {yearly
            ? "Cobrança única por ano, com o preço travado até a próxima renovação."
            : "Cobrança todo mês, sem compromisso. Mude para o anual quando quiser e leve o desconto."}
        </p>

        <div className="grid items-start gap-[18px] lg:grid-cols-3">
          {plans.map((plan, index) => {
            const custom = plan.monthly === null || plan.yearlyMonthly === null;
            const price = custom ? null : yearly ? plan.yearlyMonthly! : plan.monthly!;
            const perYear = custom ? null : price! * 12;
            const off = custom ? 0 : Math.round((1 - plan.yearlyMonthly! / plan.monthly!) * 100);
            const featured = Boolean(plan.featured);
            const href = plan.ctaHref === "app" ? site.appUrl : site.whatsapp;

            return (
              <Reveal key={plan.id} delay={index * 80}>
                <article
                  className={`relative flex h-full flex-col rounded-xl border p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 ${
                    featured
                      ? "border-transparent bg-gradient-to-br from-choco via-primary to-[#A97144] text-primary-foreground shadow-deep lg:-mt-4"
                      : "border-border bg-background shadow-soft hover:shadow-card"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-caramel px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-choco shadow-soft">
                      Mais escolhido
                    </span>
                  )}

                  <span
                    className={`text-[12.5px] font-extrabold uppercase tracking-[0.08em] ${
                      featured ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.audience}
                  </span>
                  <h3 className="mt-1.5 text-[1.6rem]">{plan.name}</h3>
                  <p className={`mt-2 text-[15px] ${featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                    {plan.tagline}
                  </p>

                  <div className={`my-6 border-y py-6 ${featured ? "border-primary-foreground/20" : "border-border"}`}>
                    {custom ? (
                      <>
                        <b className="block text-[clamp(1.6rem,3vw,2rem)] font-black leading-none tracking-[-0.04em]">
                          Sob medida
                        </b>
                        <span
                          className={`mt-3 block text-[14px] ${
                            featured ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          Preço fechado conforme o tamanho da sua operação.
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="flex min-h-[26px] items-center gap-2.5">
                          {yearly && (
                            <>
                              <span
                                className={`text-[15px] font-semibold line-through ${
                                  featured ? "text-primary-foreground/60" : "text-muted-foreground"
                                }`}
                              >
                                {brl.format(plan.monthly!)}
                              </span>
                              <span
                                className={`rounded-full px-2.5 py-1 text-[11.5px] font-extrabold uppercase tracking-wider ${
                                  featured ? "bg-caramel text-choco" : "bg-success/12 text-success"
                                }`}
                              >
                                {off}% off
                              </span>
                            </>
                          )}
                        </div>
                        <div className="mt-2 flex items-end gap-1.5">
                          <b className="text-[clamp(2.4rem,5vw,3.1rem)] font-black leading-none tracking-[-0.04em] tabular-nums">
                            {brl.format(price!)}
                          </b>
                          <span
                            className={`pb-1.5 text-[15px] font-bold ${
                              featured ? "text-primary-foreground/80" : "text-muted-foreground"
                            }`}
                          >
                            /mês
                          </span>
                        </div>
                        <span
                          className={`mt-2.5 block text-[14px] ${
                            featured ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          {yearly
                            ? `${brl.format(perYear!)} por ano, em uma cobrança só — você economiza ${brl.format(
                                (plan.monthly! - plan.yearlyMonthly!) * 12,
                              )}`
                            : `${brl.format(perYear!)} por ano — no plano anual sairia ${brl.format(
                                plan.yearlyMonthly! * 12,
                              )}`}
                        </span>
                      </>
                    )}
                  </div>

                  <span
                    className={`mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-extrabold ${
                      featured ? "bg-primary-foreground/15 text-primary-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    {plan.workspaces}
                  </span>

                  {plan.inherits && (
                    <p className={`mb-3 text-[14.5px] font-bold ${featured ? "" : "text-foreground"}`}>
                      Tudo do {plan.inherits}, mais:
                    </p>
                  )}

                  <ul className="mb-7 flex flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-[15px]">
                        <Check muted={featured} />
                        <span className={featured ? "text-primary-foreground/90" : "text-muted-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={href}
                    className={`btn mt-auto w-full ${
                      featured ? "bg-background text-primary hover:-translate-y-0.5" : "btn-primary"
                    }`}
                  >
                    {plan.ctaLabel}
                  </a>
                  <span
                    className={`mt-3 block text-center text-[13px] ${
                      featured ? "text-primary-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {custom ? "Resposta no mesmo dia útil" : "Sem cartão de crédito"}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          delay={120}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-xl border border-border bg-background px-6 py-5 text-[14.5px] font-semibold text-muted-foreground shadow-soft"
        >
          {guarantees.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <Check />
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
