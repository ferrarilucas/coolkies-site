import { Reveal } from "@/components/reveal";
import { steps } from "@/lib/content";

export function Steps() {
  return (
    <section id="como-funciona" className="border-y border-border bg-card py-[clamp(70px,9vw,110px)]">
      <div className="container">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)]">
            Do primeiro pedido ao primeiro relatório em menos de 10 minutos.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3" style={{ counterReset: "step" }}>
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              as="article"
              delay={index * 100}
              className="h-full rounded-xl border border-border bg-background p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div
                className="step-number stroke-text mb-4 text-[clamp(3rem,7vw,4.2rem)] font-black leading-[0.8] tracking-[-0.06em]"
                aria-hidden
              />
              <h3 className="text-[1.15rem]">{step.title}</h3>
              <p className="mt-2 text-[15.5px] text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
