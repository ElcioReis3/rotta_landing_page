import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
import { GasSizes } from "../data/gas_sizes";

export default function CylinderSizes() {
  return (
    <section className="py-24 md:py-32 bg-mist">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <Badge variant="flame" className="mb-4">
            Linha de gás
          </Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
            Todos os tamanhos de botijão em um só lugar
          </h2>
          <p className="mt-4 text-navy-900/60 leading-relaxed">
            Do uso doméstico ao comercial, peça o botijão certo para sua
            necessidade.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {GasSizes.map((s, i) => (
            <div
              key={s.code}
              className="group rounded-2xl bg-white border border-navy-900/8 p-5 text-center hover:border-flame-300 hover:shadow-flame transition-all duration-300 animate-rise"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-navy-900 group-hover:bg-flame-500 transition-colors flex items-center justify-center">
                <Flame className="h-5 w-5 text-flame-500 group-hover:text-white transition-colors" />
              </div>
              <p className="font-display font-extrabold text-navy-900 text-lg">
                {s.code}
              </p>
              <p className="text-xs font-semibold text-flame-600 mb-1.5">
                {s.kg}
              </p>
              <p className="text-[11px] text-navy-900/50 leading-snug">
                {s.use}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
