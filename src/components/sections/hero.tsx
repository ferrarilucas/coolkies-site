import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { Check, Clock, Crumb, TrendUp } from "@/components/icons";

const bars = [
  { height: "42%", pending: false },
  { height: "63%", pending: false },
  { height: "38%", pending: false },
  { height: "80%", pending: false },
  { height: "55%", pending: false },
  { height: "70%", pending: true },
  { height: "95%", pending: true },
];

const orders = [
  { emoji: "🍪", name: "Marina · 12 cookies", sub: "Hoje, 14:20", amount: "R$ 96,00", tag: "Pago", paid: true },
  { emoji: "🎂", name: "Bruno · Bolo + 6 doces", sub: "Combinado: dia 5", amount: "R$ 145,00", tag: "Fiado", paid: false },
  { emoji: "🥐", name: "Padaria da Ana", sub: "5º dia útil", amount: "R$ 320,00", tag: "Previsto", paid: false },
];

const perks = ["Sem instalar nada", "Vira app na tela do celular", "Feito em português, para o Brasil"];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden py-[clamp(56px,9vw,110px)]">
      <span
        className="blob -right-36 -top-40 h-[520px] w-[520px] animate-blob-a"
        style={{ background: "radial-gradient(circle,#DFA96E,transparent 68%)" }}
        aria-hidden
      />
      <span
        className="blob -bottom-44 -left-40 h-[440px] w-[440px] animate-blob-b opacity-30"
        style={{ background: "radial-gradient(circle,#8B5E3C,transparent 68%)" }}
        aria-hidden
      />
      <span className="pointer-events-none absolute left-[6%] top-[18%] animate-drift opacity-50" aria-hidden>
        <Crumb size={34} />
      </span>
      <span
        className="pointer-events-none absolute bottom-[14%] left-[14%] animate-drift opacity-40 [animation-delay:-3s] [animation-duration:14s]"
        aria-hidden
      >
        <Crumb size={22} tone="#C08B52" />
      </span>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal as="span" className="eyebrow">
            🍪 Feito para quem vende de verdade
          </Reveal>

          <Reveal as="h1" delay={80} className="my-5 text-[clamp(2.4rem,7vw,4.4rem)] font-black">
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
                  stroke="#DFA96E"
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
            Coolkies é o sistema de gestão que organiza{" "}
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

        <Reveal delay={200} className="relative flex justify-center [perspective:1400px]">
          <div className="absolute -left-[3%] top-[19%] z-10 hidden animate-bob items-center gap-2.5 rounded-2xl border border-border bg-card p-3 shadow-card sm:flex xl:-left-[6%]">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-success/10 text-success">
              <TrendUp />
            </span>
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Lucro do mês
              </span>
              <CountUp to={3480} prefix="R$ " className="block text-[15px] font-extrabold tracking-tight" />
            </span>
          </div>

          <div className="absolute -right-[2%] bottom-[12%] z-10 hidden animate-bob items-center gap-2.5 rounded-2xl border border-border bg-card p-3 shadow-card [animation-delay:1.1s] sm:flex xl:-right-[8%]">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-warning/15 text-warning-text">
              <Clock />
            </span>
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                A receber dia 5
              </span>
              <CountUp to={920} prefix="R$ " className="block text-[15px] font-extrabold tracking-tight" />
            </span>
          </div>

          <div
            className="phone-frame relative w-[min(330px,84vw)] animate-floaty rounded-[44px] p-[11px] shadow-deep"
            role="img"
            aria-label="Painel do Coolkies com faturamento recebido, valores previstos, gráfico de vendas e lista de pedidos"
          >
            <span className="absolute left-1/2 top-[9px] z-10 h-[22px] w-24 -translate-x-1/2 rounded-full bg-[#2E1B0F]" aria-hidden />
            <div className="relative overflow-hidden rounded-[34px] bg-background">
              <div className="flex items-center justify-between px-4 pb-2.5 pt-[34px] text-xs font-semibold text-muted-foreground">
                <span>9:41</span>
                <span>Coolkies</span>
              </div>
              <div className="px-4 pb-3 text-xl font-extrabold tracking-tight">Painel</div>

              <div className="grid grid-cols-2 gap-2.5 px-4">
                <Kpi label="Recebido" value={<CountUp to={4260} prefix="R$ " />} tone="text-success" />
                <Kpi label="Previsto" value={<CountUp to={1740} prefix="R$ " />} tone="text-warning-text" />
                <Kpi label="Vendas" value={<CountUp to={87} />} />
                <Kpi label="Ticket médio" value={<CountUp to={69} prefix="R$ " />} />
              </div>

              <div className="mx-4 mt-3 rounded-2xl border border-border bg-card p-3 shadow-soft">
                <div className="mb-2.5 flex items-center justify-between text-[11px] font-bold text-muted-foreground">
                  <span>Recebido x previsto</span>
                  <span>7 dias</span>
                </div>
                <div className="flex h-[76px] items-end gap-[7px]">
                  {bars.map((bar, index) => (
                    <i
                      key={index}
                      className={`flex-1 origin-bottom scale-y-0 animate-grow rounded-t ${
                        bar.pending
                          ? "border border-border bg-[repeating-linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--secondary))_4px,hsl(var(--accent))_4px,hsl(var(--accent))_8px)]"
                          : "bg-gradient-to-b from-caramel to-primary"
                      }`}
                      style={{ height: bar.height, animationDelay: `${0.15 + index * 0.07}s` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-2 px-4 pb-[18px] pt-3">
                {orders.map((order) => (
                  <div key={order.name} className="flex items-center gap-2.5 rounded-[13px] border border-border bg-card p-2.5 shadow-soft">
                    <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] bg-secondary text-[15px]">
                      {order.emoji}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[12.5px] font-bold leading-tight">{order.name}</span>
                      <span className="block text-[11px] font-medium text-muted-foreground">{order.sub}</span>
                    </span>
                    <span className="ml-auto text-right">
                      <b className="block text-[12.5px] font-extrabold tabular-nums">{order.amount}</b>
                      <span
                        className={`inline-block rounded-full px-[7px] py-0.5 text-[9.5px] font-extrabold uppercase tracking-wide ${
                          order.paid ? "bg-success/10 text-success" : "bg-warning/15 text-warning-text"
                        }`}
                      >
                        {order.tag}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
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
