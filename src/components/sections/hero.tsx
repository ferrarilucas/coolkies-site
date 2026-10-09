import { Reveal } from "@/components/reveal";
import { HeroVisual } from "@/components/hero-visual";
import { Check, Sprout } from "@/components/icons";

const perks = ["Sem instalar nada", "Vira app na tela do celular", "Feito em português, para o Brasil"];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden py-[clamp(56px,9vw,110px)]">
      <span
        className="blob -right-36 -top-40 h-[520px] w-[520px] animate-blob-a"
        style={{ background: "radial-gradient(circle,#D7B98E,transparent 68%)" }}
        aria-hidden
      />
      <span
        className="blob -bottom-44 -left-40 h-[440px] w-[440px] animate-blob-b opacity-30"
        style={{ background: "radial-gradient(circle,#C94F32,transparent 68%)" }}
        aria-hidden
      />

      <div className="container grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div>
          <Reveal as="span" className="eyebrow">
            <Sprout size={15} /> Feito para quem vende de verdade
          </Reveal>

          <Reveal as="h1" delay={80} className="my-5 text-[clamp(1.9rem,6.4vw,2.9rem)] font-black lg:text-[2.9rem]">
            Seu negócio{" "}
            <span className="relative whitespace-nowrap text-primary">
              saiu do caderninho
              <svg
                viewBox="0 0 420 24"
                preserveAspectRatio="none"
                aria-hidden
                className="absolute inset-x-0 -bottom-[0.16em] h-[0.36em] w-full overflow-visible"
              >
                <path
                  d="M4 16 C 90 4, 190 4, 274 12 S 380 20, 416 10"
                  fill="none"
                  stroke="#D7B98E"
                  strokeWidth={9}
                  strokeLinecap="round"
                  strokeDasharray={420}
                  strokeDashoffset={420}
                  className="animate-draw"
                />
              </svg>
            </span>
            .
          </Reveal>

          <Reveal as="p" delay={160} className="lead">
            Cipri é o sistema de gestão que organiza{" "}
            <span className="rotator" aria-hidden>
              <span className="block animate-roll">
                <b>suas vendas</b>
                <b>suas receitas</b>
                <b>suas margens</b>
                <b>seus fiados</b>
                <b>suas entregas</b>
                <b>suas vendas</b>
              </span>
            </span>
            <span className="sr-only">suas vendas, suas receitas, suas margens, seus fiados e suas entregas</span> num
            só lugar. Venda pela boca, controle pelo sistema — no celular, em segundos.
          </Reveal>

          <Reveal delay={240} className="my-8 flex flex-wrap gap-3.5">
            <a className="btn btn-primary btn-lg" href="#comecar">
              Começar de graça
            </a>
            <a className="btn btn-ghost btn-lg" href="#recursos">
              Ver o que ele faz
            </a>
          </Reveal>

          <Reveal delay={300} className="flex flex-wrap gap-x-6 gap-y-2 text-[14.5px] font-medium text-muted-foreground">
            {perks.map((perk) => (
              <span key={perk} className="inline-flex items-center gap-2">
                <Check className="shrink-0 text-success" />
                {perk}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function Kpi({ label, value, tone = "" }: { label: string; value: React.ReactNode; tone?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-3 py-2.5 shadow-soft">
      <span className="block text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className={`mt-0.5 block text-[17px] font-extrabold tracking-tight ${tone}`}>{value}</span>
    </div>
  );
}
