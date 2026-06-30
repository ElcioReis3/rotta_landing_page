import { Badge } from "@/components/ui/badge";
import { Steps } from "../data/steps";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="container relative">
        <div className="max-w-xl mx-auto text-center mb-20">
          <Badge variant="navy" className="mb-4">
            Como funciona
          </Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
            Da sua tela até a sua porta, em quatro passos
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-10 md:gap-6">
          {/* linha de rota conectando os passos, visível a partir de md */}
          <svg
            className="hidden md:block absolute top-9 left-0 w-full h-6 -z-10"
            viewBox="0 0 1000 24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="60"
              y1="12"
              x2="940"
              y2="12"
              stroke="#FFAD42"
              strokeWidth="2"
              strokeDasharray="2 10"
              strokeLinecap="round"
            />
          </svg>

          {Steps.map((s, i) => (
            <div
              key={s.n}
              className="relative flex flex-col items-start animate-rise"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative h-[72px] w-[72px] rounded-2xl bg-navy-900 flex items-center justify-center mb-6 shadow-navy">
                <s.icon className="h-7 w-7 text-flame-500" />
                <span className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-flame-500 text-white text-xs font-bold font-display flex items-center justify-center border-4 border-white">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-navy-900/60 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
