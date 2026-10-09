import Image from "next/image";
import { CountUp } from "@/components/count-up";
import { Icon, type IconName } from "@/components/icons";

type Note = {
  icon: IconName;
  label: string;
  value: React.ReactNode;
  position: string;
  delay: number;
  line: string;
  dot: string;
};

const notes: Note[] = [
  {
    icon: "coins",
    label: "Venda registrada",
    value: "R$ 84,90",
    position: "left-[-4%] top-[6%]",
    delay: 0.9,
    line: "M22,10.8 H27 Q31,10.8 31,16 V43.6",
    dot: "left-[31%] top-[49%]",
  },
  {
    icon: "cart",
    label: "Estoque atualizado",
    value: "3 produtos",
    position: "right-[-4%] top-[40%]",
    delay: 1.3,
    line: "M80,41 H72 Q64,41 63,44.7",
    dot: "left-[63%] top-[50%]",
  },
  {
    icon: "chart",
    label: "Vendas do dia",
    value: <CountUp to={2480} prefix="R$ " />,
    position: "left-[-6%] top-[62%]",
    delay: 1.7,
    line: "M20,60.6 H27 Q31,60.6 31,57.2",
    dot: "left-[31%] top-[64%]",
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[600px] [container-type:inline-size]" style={{ aspectRatio: "1000 / 894" }}>
      <div className="animate-photo-in absolute inset-0 drop-shadow-[0_28px_40px_rgba(37,37,31,0.22)]">
        <Image
          src="/hero-lojista-recorte.webp"
          alt="Lojista sorrindo enquanto registra uma venda no tablet"
          width={1000}
          height={894}
          priority
          sizes="(min-width: 1024px) 600px, 92vw"
          className="h-full w-full object-contain"
        />
      </div>

      <svg
        viewBox="0 0 100 89.4"
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        {notes.map((note) => (
          <path
            key={note.label}
            d={note.line}
            pathLength={1}
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeOpacity={0.75}
            strokeWidth={0.38}
            strokeLinecap="round"
            className="animate-line-draw"
            style={{ animationDelay: `${note.delay + 0.35}s` }}
          />
        ))}
      </svg>

      {notes.map((note) => (
        <span
          key={note.label}
          aria-hidden
          className={`animate-dot-in absolute z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground ring-4 ring-background/70 ${note.dot}`}
          style={{ animationDelay: `${note.delay + 0.9}s` }}
        />
      ))}

      {notes.map((note) => (
        <div
          key={note.label}
          className={`animate-note absolute z-20 flex w-max items-center gap-2.5 rounded-2xl border border-border bg-card/95 p-2.5 pr-4 shadow-card backdrop-blur-sm sm:gap-3 sm:p-3 sm:pr-5 ${note.position}`}
          style={{ animationDelay: `${note.delay}s, ${note.delay + 1.4}s` }}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground sm:h-11 sm:w-11">
            <Icon name={note.icon} width={20} height={20} />
          </span>
          <span className="leading-tight">
            <span className="block text-[11.5px] font-medium text-muted-foreground sm:text-[13px]">{note.label}</span>
            <b className="block text-[15px] font-extrabold tracking-tight tabular-nums sm:text-[19px]">{note.value}</b>
          </span>
        </div>
      ))}

      <div
        className="absolute right-[-2%] top-[0%] z-10 -rotate-[7deg] font-hand text-[5.2cqw] leading-[1.12]"
        aria-hidden
      >
        <p className="animate-wipe-in" style={{ animationDelay: "2.1s" }}>
          Mais tempo
          <br />
          para o que
          <br />
          importa.
        </p>
        <svg viewBox="0 0 160 14" preserveAspectRatio="none" className="mt-1 h-[0.28em] w-[88%] overflow-visible">
          <path
            d="M3 9 C 40 3, 90 3, 157 5"
            pathLength={1}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={3.2}
            strokeLinecap="round"
            className="animate-line-draw"
            style={{ animationDelay: "3.2s", animationDuration: "0.7s" }}
          />
        </svg>
      </div>
    </div>
  );
}
