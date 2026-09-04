import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section id="comecar" className="py-[clamp(80px,10vw,130px)] text-center">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-moss via-primary to-leaf px-[clamp(22px,4vw,56px)] py-[clamp(38px,6vw,72px)] text-primary-foreground shadow-deep">
          <span
            className="pointer-events-none absolute -left-32 -top-56 h-[520px] w-[520px] animate-blob-b opacity-35"
            style={{ background: "radial-gradient(circle,#34D399,transparent 62%)" }}
            aria-hidden
          />
          <h2 className="relative mb-4 text-[clamp(1.9rem,4.4vw,3rem)]">Seu produto já é bom. Falta o negócio ser.</h2>
          <p className="relative mx-auto mb-8 max-w-[56ch] text-[clamp(1rem,2vw,1.15rem)] opacity-90">
            Comece hoje a controlar vendas, fiado, estoque e custos num só lugar. Leva menos tempo do que anotar no
            caderno — e ninguém precisa lembrar de nada de cabeça.
          </p>
          <div className="relative flex flex-wrap justify-center gap-3.5">
            <a className="btn btn-lg bg-background text-primary hover:-translate-y-0.5" href={site.appUrl}>
              Criar minha conta grátis
            </a>
            <a
              className="btn btn-lg border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              href={site.whatsapp}
            >
              Falar no WhatsApp
            </a>
          </div>
          <p className="relative mt-6 text-[13.5px] opacity-75">
            Sem cartão de crédito para testar. Cancele quando quiser.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
