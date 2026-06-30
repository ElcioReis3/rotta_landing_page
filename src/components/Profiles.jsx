import { Badge } from "@/components/ui/badge";
import { User, Bike, Building2, Check } from "lucide-react";

const profiles = [
  {
    icon: User,
    title: "Para clientes",
    desc: "Peça gás e água sem sair de casa, acompanhe a entrega e pague do jeito mais fácil para você.",
    items: ["Pedido em poucos toques", "Rastreamento em tempo real", "Histórico de pedidos e créditos"],
  },
  {
    icon: Bike,
    title: "Para entregadores",
    desc: "Receba pedidos próximos, organize sua rota e tenha controle total das suas entregas do dia.",
    items: ["Rotas otimizadas", "Confirmação de entrega no app", "Acompanhamento de ganhos"],
  },
  {
    icon: Building2,
    title: "Para distribuidoras",
    desc: "Gerencie pedidos, estoque e equipe de entrega em um painel pensado para o seu negócio crescer.",
    items: ["Painel de gestão completo", "Controle de entregadores", "Relatórios de vendas"],
  },
];

export default function Profiles() {
  return (
    <section id="perfis" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-flame-500/10 blur-3xl" />

      <div className="container relative">
        <div className="max-w-xl mx-auto text-center mb-16">
          <Badge variant="light" className="mb-4">Para quem é</Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white text-balance">
            Um app, três jeitos de fazer parte da rota
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-8 hover:bg-white/[0.07] transition-colors duration-300 animate-rise"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-flame-500 flex items-center justify-center mb-6">
                <p.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{p.desc}</p>
              <ul className="space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="h-4 w-4 text-flame-500 mt-0.5 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
