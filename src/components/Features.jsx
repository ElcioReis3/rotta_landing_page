import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Wallet,
  MapPinned,
  ShieldCheck,
  Tag,
  Bell,
  PackageSearch,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Pedido em poucos toques",
    desc: "Escolha o produto, a quantidade e a distribuidora mais próxima. Sem ligação, sem esforço físico, sem carregar peso.",
  },
  {
    icon: MapPinned,
    title: "Acompanhamento do status do pedido",
    desc: "Veja o entregador da própria distribuidora se aproximar no mapa, do momento em que sai até a sua porta.",
  },
  {
    icon: Wallet,
    title: "Sistema de créditos",
    desc: "Compre créditos uma vez e use em vários pedidos.",
  },
  {
    icon: Tag,
    title: "Cupons e promoções",
    desc: "Aplique cupons de desconto direto no pedido e aproveite ofertas das distribuidoras parceiras.",
  },
  {
    icon: Bell,
    title: "Notificações de status",
    desc: "Receba avisos a cada etapa: pedido aceito, a caminho e entregue.",
  },
  {
    icon: ShieldCheck,
    title: "Distribuidoras verificadas",
    desc: "Cada distribuidora parceira tem seu próprio painel de gestão e sua própria equipe de entrega, sem frota externa.",
  },
  {
    icon: PackageSearch,
    title: "Catálogo big & bulky",
    desc: "Água e gás, ração pesada, produtos de limpeza no atacado e itens de quintal — tudo organizado por categoria.",
  },
  {
    icon: Truck,
    title: "Sem depender do seu carro",
    desc: "Chega de recusa de corrida por carga pesada ou suja. A entrega é feita por quem já é especialista em transportar volume.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 md:py-32 bg-mist relative">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <Badge variant="flame" className="mb-4">
            Recursos
          </Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
            Tudo o que você precisa para nunca carregar peso sozinho
          </h2>
          <p className="mt-4 text-navy-900/60 leading-relaxed">
            Um aplicativo pensado do pedido à entrega, com a confiança de quem
            entende de logística de itens pesados e volumosos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card
              key={f.title}
              className="group hover:shadow-navy hover:-translate-y-1 transition-all duration-300 animate-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-navy-900 group-hover:bg-flame-500 transition-colors duration-300 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{f.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
