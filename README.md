# 🍪 Coolkies — site

Landing page de venda do **Coolkies**, o sistema de gestão para micro, pequenos e médios vendedores.
Next.js 15 (App Router) + Tailwind, com os mesmos tokens visuais do `coolkies-system`.

## Rodar

```bash
npm install
npm run dev
```

## Identidade visual

Os tokens em `src/app/globals.css` são os mesmos do sistema (marrom cookie `#8B5E3C`, caramelo `#DFA96E`,
chocolate `#4B2E1A`, fundo creme, `--radius: 0.75rem`, fonte Inter). Alterou lá, altere aqui.

## Estrutura

| Caminho | O que é |
|---|---|
| `src/lib/site.ts` | domínio, URL do app, WhatsApp, e-mail e textos de SEO |
| `src/lib/content.ts` | recursos, segmentos, dores, passos, destaques e FAQ |
| `src/components/sections/` | uma seção da página por arquivo |
| `src/components/reveal.tsx` | animação de entrada por scroll (IntersectionObserver) |
| `src/app/opengraph-image.tsx` | imagem de compartilhamento 1200x630 gerada em runtime |
| `src/app/robots.ts` / `sitemap.ts` | rotas de metadata do Next |

## Antes de publicar

Trocar em `src/lib/site.ts`:

- `url` — domínio real (hoje `https://coolkies.com.br`)
- `appUrl` — URL do sistema (hoje `https://app.coolkies.com.br`)
- `whatsapp` — número real (hoje `5500000000000`, placeholder)
- `email` — e-mail de contato

## SEO

- `metadata` completo em `src/app/layout.tsx` (canonical, OpenGraph, Twitter, keywords, robots)
- JSON-LD em `src/components/json-ld.tsx`: `Organization`, `WebSite`, `SoftwareApplication` e `FAQPage`
- `robots.txt` e `sitemap.xml` gerados pelo Next
- HTML semântico, headings em ordem e texto de cauda longa no rodapé

Não há depoimentos nem números de clientes na página — só entram quando forem reais.
