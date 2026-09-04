# Bigas — site

Landing page de venda do **Bigas** — *Negócio é negócio* —, o sistema de gestão para micro, pequenos e médios vendedores.
Next.js 15 (App Router) + Tailwind, com os mesmos tokens visuais do `bigas-system`.

## Rodar

```bash
npm install
npm run dev
```

## Identidade visual

Paleta do manual da marca, em tokens HSL no `src/app/globals.css`. Os dois temas existem e o site abre no
tema do sistema operacional; o botão no header sobrescreve e grava a escolha em `localStorage` (`bigas-theme`).

| Papel | Light | Dark |
|---|---|---|
| Background | `#F7F8F7` | `#0B0D0F` |
| Surface (card) | `#FFFFFF` | `#12161A` |
| Surface elevada (secondary) | `#F1F3F2` | `#191E23` |
| Borda | `#E2E6E4` | `#272E35` |
| Texto principal | `#151A17` | `#F4F7F5` |
| Texto secundário | `#66706A` | `#98A2AB` |
| Accent (primary) | `#16A34A` | `#22C55E` |
| Accent suave (soft) | `#DCFCE7` | `#14532D` |
| Sucesso | `#15803D` | `#34D399` |
| Erro | `#DC2626` | `#F87171` |
| Warning | `#D97706` | `#FBBF24` |

Cores fixas de gradiente ficam em `tailwind.config.ts`: `leaf #22C55E`, `mint #34D399`, `moss #14532D`,
`ink #0B0D0F`. A marca (`BigasMark` em `src/components/icons.tsx` e `public/icon.svg`) usa os verdes do
logo original: `#35B379` e `#1C8F63`. Fonte Inter, `--radius: 0.875rem`.

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

- `url` — domínio real (hoje `https://bigas.com.br`, ainda não confirmado)
- `appUrl` — URL do sistema (hoje `https://app.bigas.com.br`)
- `whatsapp` — número real (hoje `5500000000000`, placeholder)
- `email` — e-mail de contato

## SEO

- `metadata` completo em `src/app/layout.tsx` (canonical, OpenGraph, Twitter, keywords, robots)
- JSON-LD em `src/components/json-ld.tsx`: `Organization`, `WebSite`, `SoftwareApplication` e `FAQPage`
- `robots.txt` e `sitemap.xml` gerados pelo Next
- HTML semântico, headings em ordem e texto de cauda longa no rodapé

Não há depoimentos nem números de clientes na página — só entram quando forem reais.
