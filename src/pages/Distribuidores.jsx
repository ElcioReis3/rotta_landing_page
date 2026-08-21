import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/router";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Building2,
  LayoutDashboard,
  Users,
  BarChart3,
  Bike,
  Package,
  Package2,
  Palette,
  ShieldCheck,
  Monitor,
  Sparkles,
} from "lucide-react";

const WEB_ADMIN_URL = "https://rotta-carga-plus-web.netlify.app/login";
const WEB_ADMIN_URL_REGISTER =
  "https://rotta-carga-plus-web.netlify.app/register";

const beneficios = [
  {
    icon: Sparkles,
    title: "15 dias grátis no Plano Pro",
    desc: "Comece testando todos os recursos do plano completo, sem cartão de crédito e sem compromisso.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel de gestão completo",
    desc: "Produtos, preços, promoções e horário de atendimento — tudo num painel só, direto do navegador.",
  },
  {
    icon: Bike,
    title: "Sua própria equipe de entrega",
    desc: "Cadastre e gerencie seus entregadores, acompanhe rotas e status de entrega em tempo real.",
  },
  {
    icon: Package2,
    title: "Modo atacado",
    desc: "Configure preços e condições especiais para quem compra em maior volume, sem criar um catálogo separado.",
  },
  {
    icon: Palette,
    title: "Variações de produto",
    desc: "Cadastre cor, tamanho ou modelo do mesmo item — o cliente escolhe a opção certa direto no pedido.",
  },
  {
    icon: Package,
    title: "Controle de estoque",
    desc: "Saiba exatamente o que tem disponível, sem depender de planilha ou papel.",
  },
  {
    icon: BarChart3,
    title: "Relatórios de vendas",
    desc: "Acompanhe faturamento, pedidos e desempenho da sua distribuidora ao longo do tempo.",
  },
  {
    icon: Users,
    title: "Clientes da sua região",
    desc: "Apareça no app para quem já está perto de você, procurando exatamente o que você vende.",
  },
];

export default function Distribuidores() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy-900 overflow-hidden">
        <div
          className="absolute inset-0 route-grid opacity-[0.35]"
          aria-hidden="true"
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.18]"
          viewBox="0 0 1280 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M -50 460 C 250 380, 350 540, 600 440 S 950 300, 1340 400"
            fill="none"
            stroke="#FF8A00"
            strokeWidth="3"
            className="route-line"
          />
        </svg>
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-flame-500/15 blur-3xl" />

        <div className="container relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-flame-500 transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>

          <div className="max-w-2xl animate-rise">
            <Badge variant="light" className="mb-5">
              <Building2 className="h-3.5 w-3.5" />
              Para distribuidoras e lojistas
            </Badge>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white text-balance leading-[1.1]">
              Tem interesse em se tornar um distribuidor no RottaCarga+?
            </h1>

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-flame-500 pl-3 pr-4 py-1.5">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/20">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-sm font-bold text-white">
                Comece com 15 dias grátis no Plano Pro
              </span>
            </div>

            <p className="mt-6 text-white/60 text-lg leading-relaxed">
              Se você vende gás, água, ração, produtos de limpeza ou qualquer
              item pesado e volumoso, o RottaCarga+ coloca sua distribuidora na
              frente de clientes da sua própria região.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a
                  href={WEB_ADMIN_URL_REGISTER}
                  target="_blank"
                  rel="noreferrer"
                >
                  Criar minha conta de distribuidor
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="light" asChild>
                <a href={WEB_ADMIN_URL} target="_blank" rel="noreferrer">
                  <Monitor className="h-5 w-5" />
                  Já tenho conta — acessar painel
                </a>
              </Button>
            </div>

            <p className="mt-5 text-xs text-white/40">
              O cadastro e o painel administrativo do RottaCarga+ funcionam pela
              versão web, direto do navegador do computador ou celular
              diretamente pelo aplicativo RottaCarga+
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-14">
            <Badge variant="flame" className="mb-4">
              Por que ser um parceiro
            </Badge>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
              Tudo que sua distribuidora precisa, num painel só
            </h2>
            <p className="mt-5 text-navy-900/65 leading-relaxed">
              Sem taxa de adesão, sem complicação — cadastre sua empresa,
              configure seus produtos e comece a receber pedidos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b, i) => (
              <div
                key={b.title}
                className="rounded-2xl border border-navy-900/8 bg-mist p-7 hover:bg-white hover:shadow-sm transition-all duration-300 animate-rise"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-11 w-11 rounded-xl bg-flame-500 flex items-center justify-center mb-5">
                  <b.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-navy-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-navy-900/60 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASSO A PASSO */}
      <section className="py-24 md:py-28 bg-mist">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_0.9fr] gap-12 md:gap-16 items-center">
            <div>
              <Badge variant="navy" className="mb-4">
                Como funciona
              </Badge>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance mb-8">
                Três passos para começar a vender
              </h2>

              <div className="space-y-6">
                {[
                  {
                    n: "01",
                    title: "Crie sua conta na versão web ou mobile",
                    desc: "Acesse o link abaixo e cadastre sua distribuidora — nome, endereço, categoria de produtos, região de atuação etc.",
                  },
                  {
                    n: "02",
                    title: "Configure seu catálogo",
                    desc: "Cadastre produtos, preços e o horário de atendimento da sua loja.",
                  },
                  {
                    n: "03",
                    title: "Comece a receber pedidos",
                    desc: "Assim que aprovado, sua distribuidora aparece para clientes da região no app RottaCarga+.",
                  },
                ].map((s) => (
                  <div key={s.n} className="flex gap-5">
                    <div className="shrink-0 h-11 w-11 rounded-full bg-navy-900 text-flame-500 font-display font-extrabold flex items-center justify-center text-sm">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-navy-900 mb-1">
                        {s.title}
                      </h3>
                      <p className="text-sm text-navy-900/60 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Button size="lg" asChild>
                  <a
                    href={WEB_ADMIN_URL_REGISTER}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cadastre-se agora
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-navy-900 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-flame-500/15 blur-3xl" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-flame-500 flex items-center justify-center mb-6">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <p className="font-display font-bold text-white text-lg mb-3">
                  Versão web para administradores
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  O painel de gestão do RottaCarga+ roda direto no navegador —
                  sem instalar nada. Acesse pelo computador da sua loja ou pelo
                  celular, sempre que precisar.
                </p>
                <a
                  href={WEB_ADMIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-flame-500 hover:text-flame-400 transition-colors break-all"
                >
                  rotta-carga-plus-web.netlify.app
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
              Pronto para levar sua distribuidora para o RottaCarga+?
            </h2>
            <p className="mt-5 text-navy-900/65 leading-relaxed">
              Crie sua conta em poucos minutos na versão web e comece a aparecer
              para clientes da sua região.
            </p>
            <div className="mt-9">
              <Button size="lg" asChild>
                <a
                  href={WEB_ADMIN_URL_REGISTER}
                  target="_blank"
                  rel="noreferrer"
                >
                  Criar minha conta de distribuidor
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
