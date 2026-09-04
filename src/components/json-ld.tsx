import { faqs, features } from "@/lib/content";
import { plans, pixDiscount } from "@/lib/pricing";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#org`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        description: "Sistema de gestão para micro, pequenos e médios vendedores.",
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#site`,
        url: site.url,
        name: site.name,
        inLanguage: "pt-BR",
        publisher: { "@id": `${site.url}/#org` },
      },
      {
        "@type": "SoftwareApplication",
        name: site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android, iOS",
        inLanguage: "pt-BR",
        url: site.url,
        description: site.description,
        featureList: features.map((feature) => feature.title),
        offers: plans
          .filter((plan) => plan.yearlyMonthly !== null)
          .map((plan) => ({
            "@type": "Offer",
            name: `${site.name} ${plan.name}`,
            priceCurrency: "BRL",
            price: ((plan.yearlyMonthly! - pixDiscount) * 12).toFixed(2),
            description: `${plan.workspaces} — plano anual pago com Pix recorrente, equivalente a R$ ${(
              plan.yearlyMonthly! - pixDiscount
            )
              .toFixed(2)
              .replace(".", ",")} por mês. No cartão, R$ ${plan.yearlyMonthly!.toFixed(2).replace(".", ",")} por mês. 14 dias de teste grátis.`,
            category: "SubscriptionPlan",
          })),
        publisher: { "@id": `${site.url}/#org` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
