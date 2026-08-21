import { Badge } from "@/components/ui/badge";
import { Link } from "@/router";
import {
  Star,
  Share2,
  Palette,
  Navigation,
  Route,
  KeyRound,
  Sparkles,
  Package2,
  CalendarClock,
  User,
  Bike,
  Building2,
  ArrowRight,
} from "lucide-react";

const grupos = [
  {
    icon: User,
    label: "Novo para clientes",
    color: "text-flame-500",
    items: [
      {
        icon: Star,
        title: "Fidelidade com níveis",
        desc: "Acumule pontos a cada pedido e suba de nível para desbloquear vantagens.",
      },
      {
        icon: Share2,
        title: "Indique e ganhe",
        desc: "Compartilhe seu código com amigos e ganhe créditos quando eles pedirem pela primeira vez.",
      },
      {
        icon: Palette,
        title: "Produtos com variação",
        desc: "Escolha cor, tamanho ou modelo direto no produto, quando a distribuidora oferecer opções.",
      },
    ],
  },
  {
    icon: Bike,
    label: "Novo para entregadores",
    color: "text-flame-500",
    items: [
      {
        icon: Navigation,
        title: "Navegação dentro do app",
        desc: "Siga o trajeto até o cliente sem sair do RottaCarga+ para abrir outro aplicativo de mapa.",
      },
      {
        icon: Route,
        title: "Rota com várias entregas",
        desc: "O app organiza a ordem mais eficiente quando há mais de um pedido para levar de uma vez.",
      },
      {
        icon: KeyRound,
        title: "Confirmação por código",
        desc: "A entrega só é concluída com o código que o próprio cliente informa, evitando erro de endereço.",
      },
    ],
  },
  {
    icon: Building2,
    label: "Novo para distribuidoras",
    color: "text-flame-500",
    items: [
      {
        icon: Sparkles,
        title: "15 dias grátis no Plano Pro",
        desc: "Comece testando todos os recursos, sem cartão de crédito e sem compromisso.",
      },
      {
        icon: Package2,
        title: "Modo atacado",
        desc: "Configure preços e condições especiais para clientes que compram em maior volume.",
      },
      {
        icon: CalendarClock,
        title: "Horário flexível",
        desc: "Defina um horário diferente para sábado e domingo, incluindo fechar nesses dias.",
      },
    ],
  },
];

export default function Novidades() {
  return (
    <section className="py-24 md:py-32 bg-mist relative overflow-hidden">
      <div className="container relative">
        <div className="max-w-xl mx-auto text-center mb-16">
          <Badge variant="flame" className="mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Novidades
          </Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
            O RottaCarga+ não para de evoluir
          </h2>
          <p className="mt-5 text-navy-900/65 leading-relaxed">
            As últimas atualizações trouxeram melhorias para os três lados
            do app — veja o que mudou para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {grupos.map((g, gi) => (
            <div
              key={g.label}
              className="rounded-2xl bg-white border border-navy-900/8 p-7 animate-rise"
              style={{ animationDelay: `${gi * 100}ms` }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <span className="h-9 w-9 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                  <g.icon className="h-4 w-4 text-flame-500" />
                </span>
                <p className="text-[11px] font-bold uppercase tracking-wider text-navy-900/50">
                  {g.label}
                </p>
              </div>

              <div className="space-y-5">
                {g.items.map((it) => (
                  <div key={it.title} className="flex items-start gap-3.5">
                    <span className="h-8 w-8 rounded-lg bg-flame-50 flex items-center justify-center shrink-0 mt-0.5">
                      <it.icon className="h-4 w-4 text-flame-500" />
                    </span>
                    <div>
                      <p className="font-display font-bold text-sm text-navy-900 leading-snug">
                        {it.title}
                      </p>
                      <p className="text-[13px] text-navy-900/55 leading-relaxed mt-0.5">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/distribuidores"
            className="inline-flex items-center gap-2 text-sm font-bold text-flame-600 hover:text-flame-700 transition-colors"
          >
            Sou distribuidor — quero conhecer o Plano Pro
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
