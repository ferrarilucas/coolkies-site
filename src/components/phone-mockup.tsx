import { CountUp } from "@/components/count-up";
import { PhoneClock } from "@/components/phone-clock";
import { Clock, TrendUp } from "@/components/icons";

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
  { emoji: "🛍️", name: "Marina · Pedido #128", sub: "Hoje, 14:20", amount: "R$ 96,00", tag: "Pago", paid: true },
  { emoji: "📦", name: "Bruno · Kit festa", sub: "Combinado: dia 5", amount: "R$ 145,00", tag: "Fiado", paid: false },
  { emoji: "🧾", name: "Padaria da Ana", sub: "5º dia útil", amount: "R$ 320,00", tag: "Previsto", paid: false },
];

export function PhoneMockup() {
  return (
    <div className="relative [perspective:1400px]">
      <div className="absolute right-[calc(100%-26px)] top-[10%] z-20 w-max hidden animate-bob items-center gap-2.5 rounded-2xl border border-border bg-card p-3 shadow-card md:flex">
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

      <div className="absolute left-[calc(100%-26px)] bottom-[16%] z-20 w-max hidden animate-bob items-center gap-2.5 rounded-2xl border border-border bg-card p-3 shadow-card [animation-delay:1.1s] md:flex">
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
        aria-label="Painel do Cipri com faturamento recebido, valores previstos, gráfico de vendas e lista de pedidos"
      >
        <span className="absolute left-1/2 top-[19px] z-10 h-[22px] w-24 -translate-x-1/2 rounded-full bg-[#1E1D18]" aria-hidden />
        <div className="relative overflow-hidden rounded-[34px] bg-background">
          <div className="mb-3 mt-2 flex h-[22px] items-center justify-between px-4 text-xs font-semibold leading-none text-muted-foreground">
            <PhoneClock />
            <span>Cipri</span>
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
                      : "bg-gradient-to-b from-areia to-primary"
                  }`}
                  style={{ height: bar.height, animationDelay: `${0.15 + index * 0.07}s` }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-2 px-4 pb-3 pt-3">
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
          <div className="flex justify-center pb-2" aria-hidden>
            <span className="h-[5px] w-28 rounded-full bg-foreground/80" />
          </div>
        </div>
      </div>
    </div>
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
