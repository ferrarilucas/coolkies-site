import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { CipriLogo, Icon, type IconName } from "@/components/icons";

const menu: { label: string; icon: IconName }[] = [
  { label: "Visão geral", icon: "chart" },
  { label: "Vendas", icon: "cart" },
  { label: "Fiado", icon: "calendar" },
  { label: "Estoque", icon: "box" },
  { label: "Receitas", icon: "recipe" },
  { label: "Clientes", icon: "users" },
];

const kpis = [
  { label: "Recebido", value: 4260, prefix: "R$ ", note: "+12% no período", tone: "text-success" },
  { label: "Previsto", value: 1740, prefix: "R$ ", note: "3 recebimentos pendentes", tone: "text-warning-text" },
  { label: "Vendas", value: 87, prefix: "", note: "+8% no período", tone: "text-success" },
];

const movements = [
  { client: "Marina", sub: "Pedido #128", amount: "R$ 96,00", tag: "Pago", paid: true, when: "Hoje, 14:20" },
  { client: "Bruno", sub: "Kit festa", amount: "R$ 145,00", tag: "Fiado", paid: false, when: "Combinado: dia 5" },
  { client: "Padaria da Ana", sub: "Entrega semanal", amount: "R$ 320,00", tag: "Previsto", paid: false, when: "5º dia útil" },
  { client: "Carla", sub: "Pedido #126", amount: "R$ 54,00", tag: "Pago", paid: true, when: "Ontem, 17:05" },
];

const received = [20, 34, 28, 52, 46, 68, 74];
const forecast = [20, 30, 36, 44, 58, 62, 88];

const W = 560;
const H = 180;
const step = W / (received.length - 1);
const toPath = (values: number[]) =>
  values
    .map((value, index) => `${index === 0 ? "M" : "L"}${(index * step).toFixed(1)},${(H - (value / 100) * H).toFixed(1)}`)
    .join(" ");

const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export function Dashboard() {
  return (
    <section id="painel" className="py-[clamp(60px,8vw,100px)]">
      <div className="container">
        <Reveal className="mx-auto mb-10 max-w-[720px] text-center">
          <span className="eyebrow">Painel</span>
          <h2 className="my-4 text-[clamp(1.9rem,4.4vw,3rem)]">Seu negócio inteiro numa tela só.</h2>
          <p className="lead mx-auto">
            Veja o que já entrou, o que ainda vai entrar e quem está devendo, no computador ou no celular.
          </p>
        </Reveal>

        <Reveal className="overflow-hidden rounded-2xl border border-border bg-card shadow-deep">
          <div className="grid md:grid-cols-[210px_1fr]">
            <aside className="hidden border-r border-border bg-secondary/60 p-5 md:block">
              <CipriLogo height={26} className="mb-6 text-terra dark:text-primary" />
              <ul className="grid gap-1.5 text-[14px] font-semibold">
                {menu.map((item, index) => (
                  <li
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2 ${
                      index === 0 ? "bg-soft text-soft-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <Icon name={item.icon} width={17} height={17} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-[1.25rem]">Visão geral</h3>
                <span className="rounded-full border border-border bg-background px-3 py-1.5 text-[12.5px] font-bold text-muted-foreground">
                  Últimos 7 dias
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="rounded-2xl border border-border bg-background p-4">
                    <span className="block text-[11.5px] font-bold uppercase tracking-wider text-muted-foreground">
                      {kpi.label}
                    </span>
                    <CountUp
                      to={kpi.value}
                      prefix={kpi.prefix}
                      className="mt-1 block text-[1.7rem] font-black leading-none tracking-[-0.04em] tabular-nums"
                    />
                    <span className={`mt-2 block text-[12.5px] font-semibold ${kpi.tone}`}>{kpi.note}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-background p-4 sm:p-5">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[15px] font-extrabold">Recebido x previsto</span>
                  <span className="flex items-center gap-4 text-[12px] font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <i className="h-2 w-2 rounded-full bg-primary" /> Recebido
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <i className="h-2 w-2 rounded-full bg-areia" /> Previsto
                    </span>
                  </span>
                </div>
                <svg
                  viewBox={`-6 -8 ${W + 12} ${H + 16}`}
                  className="h-auto w-full overflow-visible"
                  role="img"
                  aria-label="Gráfico de linhas com valores recebidos e previstos nos últimos sete dias"
                >
                  {[0, 25, 50, 75, 100].map((tick) => (
                    <line
                      key={tick}
                      x1={0}
                      x2={W}
                      y1={H - (tick / 100) * H}
                      y2={H - (tick / 100) * H}
                      stroke="hsl(var(--border))"
                      strokeWidth={1}
                    />
                  ))}
                  <path d={toPath(forecast)} fill="none" stroke="#D7B98E" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                  <path d={toPath(received)} fill="none" stroke="hsl(var(--primary))" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx={W} cy={H - (received[received.length - 1] / 100) * H} r={5} fill="hsl(var(--primary))" />
                </svg>
                <div className="mt-2 flex justify-between text-[11.5px] font-semibold text-muted-foreground">
                  {days.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-background p-4 sm:p-5">
                <span className="mb-2 block text-[15px] font-extrabold">Últimas movimentações</span>
                <ul className="divide-y divide-border">
                  {movements.map((item) => (
                    <li key={item.client + item.sub} className="flex items-center gap-3 py-2.5 text-[14px]">
                      <span className="min-w-0 flex-1">
                        <b className="block truncate font-bold">{item.client}</b>
                        <span className="block truncate text-[12.5px] text-muted-foreground">
                          {item.sub} · {item.when}
                        </span>
                      </span>
                      <b className="tabular-nums">{item.amount}</b>
                      <span
                        className={`w-[72px] rounded-full px-2 py-0.5 text-center text-[10.5px] font-extrabold uppercase tracking-wide ${
                          item.paid ? "bg-success/10 text-success" : "bg-warning/15 text-warning-text"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
