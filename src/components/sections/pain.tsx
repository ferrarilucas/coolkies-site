import { Reveal } from "@/components/reveal";
import { Close } from "@/components/icons";
import { pains } from "@/lib/content";

export function Pain() {
  return (
    <section id="por-que" className="py-[clamp(70px,9vw,110px)]">
      <div className="container">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">O problema</span>
          <h2 className="my-4 text-[clamp(1.9rem,4.4vw,3rem)]">
            Se o seu controle é WhatsApp, caderno e memória, o prejuízo é invisível.
          </h2>
          <p className="lead">
            Não é falta de venda. É falta de controle. E o que não é medido, some no fim do mês.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain, index) => (
            <Reveal
              key={pain.title}
              as="article"
              delay={index * 80}
              className="rounded-lg border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="mb-3.5 grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-destructive/10 text-destructive">
                <Close />
              </span>
              <h3 className="mb-2 text-[1.02rem]">{pain.title}</h3>
              <p className="text-[15.5px] text-muted-foreground">{pain.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-9 flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-moss p-[clamp(26px,4vw,40px)] text-primary-foreground shadow-card">
          <span
            className="pointer-events-none absolute -right-10 -top-40 h-[340px] w-[340px] animate-blob-a opacity-35"
            style={{ background: "radial-gradient(circle,#34D399,transparent 65%)" }}
            aria-hidden
          />
          <div className="relative">
            <h3 className="max-w-[22ch] text-[clamp(1.3rem,3vw,1.9rem)]">Bigas: o caderninho que virou sistema.</h3>
            <p className="mt-2 max-w-[44ch] text-[15.5px] opacity-85">
              Cada venda registrada em segundos, cada fiado com data, cada receita com custo real. Profissional sem ser
              complicado.
            </p>
          </div>
          <a className="btn btn-lg relative bg-background text-primary hover:-translate-y-0.5" href="#comecar">
            Quero organizar meu corre
          </a>
        </Reveal>
      </div>
    </section>
  );
}
