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
| Background | `#F7F4ED` (creme) | `#25251F` (carvão) |
| Surface (card) | `#FFFDF9` | `#2F2E28` |
| Texto principal | `#25251F` | `#F7F4ED` |
| Accent (primary) | `#C94F32` (terracota) | `#E26B4D` (terracota claro, para manter contraste) |
| Accent suave (soft) | `#F8DDD2` | `#4E2A20` |

Cores fixas em `tailwind.config.ts`: `terra #C94F32`, `terra-dark #A63E25`, `areia #D7B98E`, `bege #E7D7C0`,
`creme #F7F4ED`, `carvao #25251F`. Os blocos de destaque (CTA, plano em destaque) usam sempre terracota com texto
branco, nos dois temas. O logotipo (`CipriLogo` em `src/components/icons.tsx`) herda a cor do texto e mantém o ponto
em areia; os SVGs originais ficam em `public/brand/` e o favicon em `public/icon.svg`. A foto do hero é
`public/hero-lojista-recorte.webp` (imagem gerada por IA, recortada sem fundo; os cartões e o texto manuscrito são HTML animado em `src/components/hero-visual.tsx`). Fonte Sora, `--radius: 0.875rem`.

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
