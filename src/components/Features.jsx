import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Wallet,
  MapPinned,
  ShieldCheck,
  Tag,
  Bell,
  CreditCard,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Pedido em poucos toques",
    desc: "Escolha o produto, a quantidade e a distribuidora mais próxima. Sem ligação, sem espera.",
  },
  {
    icon: MapPinned,
    title: "Acompanhamento em tempo real",
    desc: "Veja o entregador se aproximar no mapa, do momento em que sai da distribuidora até a sua porta.",
  },
  {
    icon: Wallet,
    title: "Sistema de créditos",
    desc: "Compre créditos uma vez e use em vários pedidos. O saldo é debitado automaticamente a cada entrega confirmada.",
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
    desc: "Trabalhamos só com fornecedores avaliados, para sua entrega chegar com segurança.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 md:py-32 bg-mist relative">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <Badge variant="flame" className="mb-4">Recursos</Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
            Tudo o que você precisa para nunca ficar sem gás
          </h2>
          <p className="mt-4 text-navy-900/60 leading-relaxed">
            Um aplicativo pensado do pedido à entrega, com a confiança de quem
            entende de logística e atendimento.
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
