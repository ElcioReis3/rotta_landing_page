import { Badge } from "@/components/ui/badge";
import { Droplets, PawPrint, SprayCan, Trees, Check } from "lucide-react";

const categories = [
  {
    icon: Droplets,
    title: "Água e Gás",
    desc: "A base do app: botijões de 13kg e galões de água mineral de 20L, do jeito que você já conhece.",
    items: ["Botijão de gás de 2kg a 45kg", "Galão de água de 10L a 20L"],
  },
  {
    icon: PawPrint,
    title: "Pet Peso Pesado",
    desc: "Sacos grandes de ração, areia higiênica e tapetes — sem precisar carregar peso até o carro.",
    items: [
      "Ração de 10kg a 20kg",
      "Fardos de areia higiênica",
      "Caixas de tapetes higiênicos",
    ],
  },
  {
    icon: SprayCan,
    title: "Limpeza Atacado",
    desc: "Produtos concentrados em galões de 5 litros e fardos de papel de alta volumetria, para casa cheia de estoque.",
    items: [
      "Galões de 5L concentrados",
      "Fardos de produtos de limpeza",
      "Fardos de papel",
    ],
  },
  {
    icon: Trees,
    title: "Lazer e Quintal",
    desc: "Carvão, terra vegetal e o que mais o seu quintal e sua piscina precisam, entregue na porta.",
    items: [
      "Carvão 5kg a 20kg",
      "Terra vegetal e adubo",
      "Sal e cloro para piscina",
    ],
  },
];

export default function ProductCategories() {
  return (
    <section id="categorias" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <Badge variant="navy" className="mb-4">
            O que você pede no app
          </Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
            Quatro categorias, um só peso que você não precisa carregar
          </h2>
          <p className="mt-4 text-navy-900/60 leading-relaxed">
            O RottaCarga+ reúne distribuidoras locais verificadas para entregar
            os itens mais pesados, densos e volumosos do dia a dia — tudo pelo
            mesmo aplicativo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-navy-900/8 bg-mist p-8 hover:shadow-flame transition-shadow duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-6">
                <c.icon className="h-7 w-7 text-flame-500" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy-900 mb-3">
                {c.title}
              </h3>
              <p className="text-sm text-navy-900/60 leading-relaxed mb-5">
                {c.desc}
              </p>
              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2.5 text-sm text-navy-900/75"
                  >
                    <Check className="h-4 w-4 text-flame-500 shrink-0" />
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
