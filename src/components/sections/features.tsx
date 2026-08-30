"use client";

import type { MouseEvent } from "react";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
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
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Recursos</span>
          <h2 className="my-4 text-[clamp(1.9rem,4.4vw,3rem)]">
            Tudo que o seu corre precisa. Nada que ele não precisa.
          </h2>
          <p className="lead">
            Um sistema de gestão completo para pequenos negócios, desenhado primeiro para a tela do celular — porque é
            lá que a venda acontece.
          </p>
        </Reveal>

        <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 60}>
              <article
                onMouseMove={onPointerMove}
                className="feat-card group relative h-full overflow-hidden rounded-xl border border-border bg-background p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-caramel hover:shadow-card"
              >
                {feature.soon && (
                  <span className="absolute right-4 top-4 rounded-full bg-warning/15 px-2.5 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-warning-text">
                    Em breve
                  </span>
                )}
                <span
                  className={`mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[13px] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
                    feature.soon ? "bg-warning/15 text-warning-text" : "bg-secondary text-primary"
                  }`}
                >
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
