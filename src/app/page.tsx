import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Pain } from "@/components/sections/pain";
import { Features } from "@/components/sections/features";
import { Installments } from "@/components/sections/installments";
import { Steps } from "@/components/sections/steps";
import { Highlights } from "@/components/sections/highlights";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Pain />
        <Features />
        <Installments />
        <Steps />
        <Highlights />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
