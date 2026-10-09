import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Dashboard } from "@/components/sections/dashboard";
import { Marquee } from "@/components/sections/marquee";
import { Pain } from "@/components/sections/pain";
import { Features } from "@/components/sections/features";
import { Installments } from "@/components/sections/installments";
import { Steps } from "@/components/sections/steps";
import { Highlights } from "@/components/sections/highlights";
import { Pricing } from "@/components/sections/pricing";
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
        <Dashboard />
        <Pain />
        <Features />
        <Installments />
        <Steps />
        <Highlights />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
