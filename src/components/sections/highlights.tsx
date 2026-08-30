import { Reveal } from "@/components/reveal";
import { highlights } from "@/lib/content";

export function Highlights() {
  return (
    <section className="py-[clamp(60px,8vw,90px)]">
      <div className="container grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 80}
            className="rounded-lg border border-border bg-card px-4 py-7 text-center shadow-soft"
          >
            <b className="block text-[clamp(2rem,4.5vw,2.7rem)] font-black leading-none tracking-[-0.04em] text-primary">
              {item.value}
            </b>
            <span className="mt-2 block text-[14.5px] font-semibold text-muted-foreground">{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
