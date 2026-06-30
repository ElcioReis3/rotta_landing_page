import { Badge } from "@/components/ui/badge";
import { Droplets, Flame, Check } from "lucide-react";

export default function ProductCategories() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <Badge variant="navy" className="mb-4">
            O que você pede no app
          </Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
            Gás e água, distribuidoras verificadas e de confiança
          </h2>
          <p className="mt-4 text-navy-900/60 leading-relaxed">
            O RottaGás+ distribuidoras de gás e água fazem parte da plataforma,
            com pedido e entrega pelo mesmo app.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-navy-900/8 bg-mist p-8 hover:shadow-flame transition-shadow duration-300">
            <div className="h-14 w-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-6">
              <Flame className="h-7 w-7 text-flame-500" />
            </div>
            <h3 className="font-display font-bold text-xl text-navy-900 mb-3">
              Distribuidoras de gás
            </h3>
            <p className="text-sm text-navy-900/60 leading-relaxed mb-5">
              Botijões em todos os tamanhos, do uso doméstico ao comercial,
              entregues por revendedoras verificadas da sua região.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm text-navy-900/75">
                <Check className="h-4 w-4 text-flame-500 shrink-0" />
                P2 ao P45
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-900/75">
                <Check className="h-4 w-4 text-flame-500 shrink-0" />
                Entrega rastreada
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-navy-900/8 bg-mist p-8 hover:shadow-flame transition-shadow duration-300">
            <div className="h-14 w-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-6">
              <Droplets className="h-7 w-7 text-flame-500" />
            </div>
            <h3 className="font-display font-bold text-xl text-navy-900 mb-3">
              Distribuidoras de água
            </h3>
            <p className="text-sm text-navy-900/60 leading-relaxed mb-5">
              Galões e garrafões para casa ou empresa, pedidos com a mesma
              facilidade
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm text-navy-900/75">
                <Check className="h-4 w-4 text-flame-500 shrink-0" />
                Galões de 5L, 10L e 20L
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-900/75">
                <Check className="h-4 w-4 text-flame-500 shrink-0" />
                Assinatura recorrente
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
