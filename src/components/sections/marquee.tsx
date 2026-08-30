import { segments } from "@/lib/content";

export function Marquee() {
  return (
    <section aria-label="Segmentos atendidos pelo Coolkies" className="group relative overflow-hidden border-y border-border bg-card py-4">
      <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />
      <div className="flex w-max animate-slide gap-3.5 group-hover:[animation-play-state:paused]">
        {[...segments, ...segments].map((segment, index) => (
          <span
            key={`${segment}-${index}`}
            className="inline-flex items-center whitespace-nowrap rounded-full border border-border bg-secondary px-4 py-2 text-[14.5px] font-bold text-secondary-foreground"
          >
            {segment}
          </span>
        ))}
      </div>
    </section>
  );
}
