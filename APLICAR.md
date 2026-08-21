# APLICAR — Landing page atualizada com as funcionalidades novas

4 arquivos: 1 novo (`Novidades.jsx`), 3 alterados. Nenhuma dependência
nova (só ícones do `lucide-react`, que já é dependência do projeto).

**⚠️ Não consegui rodar `npm run build`** — este upload trouxe só a pasta
`src/`, sem `package.json`/config na raiz. Fiz checagem manual de chaves,
parênteses e tags JSX em todos os arquivos (todos batendo), mas recomendo
rodar `npm run build` no seu ambiente antes de publicar.

## O que eu levantei no código do app (`libapp.zip`) antes de escrever

Conferi telas e modelos reais no Flutter, não fui só de memória:

- `in_app_navigation_screen.dart` — navegação dentro do app pro entregador
- `loyalty_model.dart` — fidelidade com níveis (tier) por pontos
- `referral_screen.dart` — indicação com recompensa
- `product_variant.dart` — variações de produto (cor, tamanho)
- `wholesale_config.dart` — modo atacado
- `business_hours_screen.dart` — horário com sábado/domingo diferentes
  (da sessão anterior)
- Trial de 15 dias no Plano Pro (`register_admin_screen.dart` /
  `subscription_plan_model.dart`, de sessões anteriores)

## 1. Nova seção "Novidades" na home

**Novo arquivo:** `src/components/Novidades.jsx`

Seção dedicada logo depois de "Para quem é", com 3 colunas — Cliente,
Entregador, Distribuidora — cada uma com 3 funcionalidades novas:

- **Cliente:** fidelidade com níveis, indique e ganhe, produtos com variação
- **Entregador:** navegação no app, rota com várias entregas, confirmação
  por código
- **Distribuidora:** 15 dias grátis no Plano Pro, modo atacado, horário
  flexível de fim de semana

Termina com um link direto para a página de distribuidores.

## 2. Trial de 15 dias — estava ausente da página de distribuidores

**Arquivo:** `src/pages/Distribuidores.jsx`

Essa é a lacuna mais importante que encontrei: o trial gratuito de 15 dias
no Plano Pro — provavelmente o maior gancho de conversão pra atrair
distribuidoras novas — não aparecia em **nenhum lugar** da página.
Adicionei:

- Um selo destacado logo abaixo do título principal do hero: "Comece com
  15 dias grátis no Plano Pro"
- Um novo card de benefício com o mesmo destaque, agora em primeiro na
  lista
- Mais dois benefícios que também estavam faltando: modo atacado e
  variações de produto

## 3. Cards de perfil atualizados com o que existe de verdade hoje

**Arquivo:** `src/components/Profiles.jsx`

Os itens genéricos ("Rotas otimizadas", "Rastreamento em tempo real")
viraram descrições específicas do que o app realmente tem agora:
navegação dentro do app pro entregador, fidelidade/indicação pro cliente,
15 dias grátis + atacado pra distribuidora.

## 4. `src/pages/Home.jsx`

Só o import e a inclusão de `<Novidades />` na composição da página,
entre `<Profiles />` e `<ProductCategories />`.

## Teste

```bash
npm install
npm run build
npm run dev
```

Confira a nova seção "Novidades" na home, o selo do trial na página de
distribuidores, e os textos atualizados nos cards de "Para quem é".

## Sugestão de commits

```
feat: seção "Novidades" destacando funcionalidades recentes por perfil
feat: destacar trial de 15 dias grátis na página de distribuidores
content: atualizar cards de perfil com funcionalidades atuais do app
```
