import { BigasMark } from "@/components/icons";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Produto",
    links: [
      { href: "#recursos", label: "Recursos" },
      { href: "#parcelado", label: "Parcelado na Palavra" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#perguntas", label: "Perguntas frequentes" },
    ],
  },
  {
    title: "Para quem",
    links: [
      { href: "#por-que", label: "Confeitaria e doces" },
      { href: "#por-que", label: "Marmitas e salgados" },
      { href: "#por-que", label: "Feira e delivery" },
      { href: "#por-que", label: "Brechó e artesanato" },
    ],
  },
  {
    title: "Contato",
    links: [
      { href: site.whatsapp, label: "WhatsApp" },
      { href: `mailto:${site.email}`, label: site.email },
      { href: site.appUrl, label: "Entrar no sistema" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-16 text-[14.5px] text-muted-foreground">
      <div className="container">
        <div className="grid gap-8 border-b border-border pb-9 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#topo" className="mb-3 flex items-center gap-3 text-xl font-black tracking-[-0.03em] text-foreground">
              <BigasMark size={34} className="shrink-0" />
              Bigas
            </a>
            <p>{site.tagline} O caderninho que virou sistema, para quem faz o negócio acontecer.</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-foreground">
                {column.title}
              </h4>
              <ul className="grid gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-5 text-[13.5px]">
          <span>© {new Date().getFullYear()} Bigas. Feito no Brasil, em português.</span>
          <span>Tecnologia para gente real</span>
        </div>

        <p className="mt-3.5 max-w-[78ch] text-[13px] opacity-75">
          Bigas é um sistema de gestão de vendas para micro, pequenos e médios empreendedores: controle de pedidos,
          controle de fiado e parcelamento sem cartão, previsão de recebimento, controle de estoque e produção, ficha
          técnica de receitas com custo real, comparação de preços entre mercados e lista de compras automática, tudo
          pelo celular.
        </p>
      </div>
    </footer>
  );
}
