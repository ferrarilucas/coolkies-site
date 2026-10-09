"use client";

import type { MouseEvent } from "react";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { PhoneMockup } from "@/components/phone-mockup";
import { features } from "@/lib/content";

export function Features() {
  const onPointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="recursos" className="border-y border-border bg-card py-[clamp(70px,9vw,110px)]">
      <div className="container">
        <div className="mb-14 grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-10">
          <Reveal className="max-w-[720px]">
            <span className="eyebrow">Recursos</span>
            <h2 className="my-4 text-[clamp(1.9rem,4.4vw,3rem)]">
              Tudo que o seu corre precisa. Nada que ele não precisa.
            </h2>
            <p className="lead">
              Um sistema de gestão completo para pequenos negócios, desenhado primeiro para a tela do celular — porque
              é lá que a venda acontece.
            </p>
          </Reveal>

          <Reveal delay={150} className="flex justify-center lg:w-[600px]">
            <PhoneMockup />
          </Reveal>
        </div>

        <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 60}>
              <article
                onMouseMove={onPointerMove}
                className="feat-card group relative h-full overflow-hidden rounded-xl border border-border bg-secondary p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-card"
              >
                <span className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-secondary text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={feature.icon} />
                </span>
                <h3 className="relative mb-2 text-[1.15rem]">{feature.title}</h3>
                <p className="relative text-[15.5px] text-muted-foreground">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
