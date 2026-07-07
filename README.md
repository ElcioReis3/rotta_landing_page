# RottaCarga+ — Landing Page

Landing page apresentacional do app RottaCarga+ ("Nós levamos o peso por
você"), com a função de página de download (APK), construída em React +
Tailwind CSS + shadcn/ui.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/`, prontos para hospedar em qualquer
serviço de site estático (Vercel, Netlify, hospedagem própria, etc).

## Estrutura

- `src/components/Navbar.jsx` — menu fixo com link de download
- `src/components/Hero.jsx` — seção de abertura com CTA principal
- `src/components/Features.jsx` — recursos do app
- `src/components/HowItWorks.jsx` — passo a passo do fluxo de pedido
- `src/components/Profiles.jsx` — perfis (cliente / equipe de entrega / distribuidora)
- `src/components/ProductCategories.jsx` — as 4 categorias (Água e Gás, Pet Peso Pesado, Limpeza Atacado, Lazer e Quintal)
- `src/components/CylinderSizes.jsx` — tamanhos de botijão disponíveis
- `src/components/DownloadCTA.jsx` — seção de download do APK
- `src/components/FAQ.jsx` — perguntas frequentes
- `src/components/Footer.jsx` — rodapé com contato
- `src/components/ui/` — componentes shadcn/ui (Button, Card, Badge, Accordion)

## Personalização

- **Link real do APK:** troque o `<a>` do botão "Baixar APK" em
  `DownloadCTA.jsx` e `Hero.jsx` pelo link de download definitivo (ou
  conecte a uma rota de download direto do arquivo).
- **Cores da marca:** definidas em `tailwind.config.js` (`navy` e `flame`).
- **Imagens:** estão em `src/assets/img/`, extraídas dos arquivos enviados
  (logo, ícone do app, banner de tamanhos).
