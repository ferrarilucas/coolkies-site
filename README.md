# Cipri — site

Landing page de venda do **Cipri** — *Seu negócio no seu ritmo* —, o sistema de gestão para micro, pequenos e médios vendedores.
Next.js 15 (App Router) + Tailwind, com a identidade do manual da marca Cipri.

## Rodar

```bash
npm install
npm run dev
```

## Identidade visual

Paleta do manual da marca, em tokens HSL no `src/app/globals.css`. Os dois temas existem e o site abre no
tema do sistema operacional; o botão no header sobrescreve e grava a escolha em `localStorage` (`cipri-theme`).

| Papel | Light | Dark |
|---|---|---|
| Background | `#F7F7EF` (creme) | `#1F2937` (grafite) |
| Surface (card) | `#FFFFFF` | `#273244` |
| Texto principal | `#1F2937` | `#F7F7EF` |
| Accent (primary) | `#0F3D34` (verde principal) | `#FFC93D` (amarelo) |
| Accent suave (soft) | `#FFEFC2` | `#1C4A42` |

Cores fixas em `tailwind.config.ts`: `moss #0F3D34`, `leaf #1B5E50`, `sun #FFC93D`, `cream #F7F7EF`,
`ink #1F2937`. Os blocos de destaque (CTA, plano em destaque) usam sempre verde `moss` com texto `cream`, nos dois
temas. O logotipo (`CipriLogo` em `src/components/icons.tsx`) herda a cor do texto e mantém o ponto amarelo; os SVGs
originais ficam em `public/brand/` e o favicon em `public/icon.svg`. Fonte Sora, `--radius: 0.875rem`.

## Estrutura

| Caminho | O que é |
|---|---|
| `src/lib/site.ts` | domínio, URL do app, WhatsApp, e-mail e textos de SEO |
| `src/lib/content.ts` | recursos, segmentos, dores, passos, destaques e FAQ |
| `src/lib/pricing.ts` | planos (Corre, Cresce, Escala), preços e garantias |
| `src/components/theme-toggle.tsx` | botão de tema e script anti-flash usado no `layout.tsx` |
| `src/components/sections/` | uma seção da página por arquivo |
| `src/components/reveal.tsx` | animação de entrada por scroll (IntersectionObserver) |
| `src/app/opengraph-image.tsx` | imagem de compartilhamento 1200x630 gerada em runtime |
| `src/app/robots.ts` / `sitemap.ts` | rotas de metadata do Next |

## Antes de publicar

Trocar em `src/lib/site.ts`:

- `url` — domínio real (hoje `https://cipri.com.br`, ainda não confirmado)
- `appUrl` — URL do sistema (hoje `https://app.cipri.com.br`)
- `whatsapp` — número do WhatsApp (hoje `5551999892403`)
- `email` — e-mail de contato

## SEO

- `metadata` completo em `src/app/layout.tsx` (canonical, OpenGraph, Twitter, keywords, robots)
- JSON-LD em `src/components/json-ld.tsx`: `Organization`, `WebSite`, `SoftwareApplication` e `FAQPage`
- `robots.txt` e `sitemap.xml` gerados pelo Next
- HTML semântico, headings em ordem e texto de cauda longa no rodapé

Não há depoimentos nem números de clientes na página — só entram quando forem reais.
