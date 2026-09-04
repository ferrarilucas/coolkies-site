import { Reveal } from "@/components/reveal";
import { Plus } from "@/components/icons";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="perguntas" className="border-y border-border bg-card py-[clamp(70px,9vw,110px)]">
      <div className="container">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Dúvidas</span>
          <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)]">Perguntas frequentes</h2>
        </Reveal>

        <div className="grid max-w-[860px] gap-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 50}>
              <details
                open={index === 0}
                className="group overflow-hidden rounded-lg border border-border bg-secondary transition-[border-color,box-shadow] duration-300 open:border-primary open:shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3.5 p-5 text-[16.5px] font-bold tracking-tight [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="ml-auto grid h-[26px] w-[26px] shrink-0 place-items-center rounded-lg bg-secondary text-primary transition-transform duration-300 group-open:rotate-45">
                    <Plus />
                  </span>
                </summary>
                <p className="max-w-[70ch] animate-fade-in px-5 pb-5 text-[15.5px] text-muted-foreground">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
