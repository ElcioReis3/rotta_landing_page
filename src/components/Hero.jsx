import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, MapPin } from "lucide-react";
import appIcon from "@/assets/img/app-icon.png";
import appIconDark from "@/assets/img/app-icon-dark.png";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-navy-900 pt-28 pb-16 sm:pt-32 sm:pb-24 md:pt-44 md:pb-32"
    >
      {/* trama de rota - assinatura visual */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18]"
        viewBox="0 0 1280 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -50 650 C 200 600, 280 720, 480 600 S 760 420, 980 480 S 1250 380, 1340 250"
          fill="none"
          stroke="#FF8A00"
          strokeWidth="3"
          className="route-line"
        />
        <circle cx="480" cy="600" r="6" fill="#FF8A00" />
        <circle cx="980" cy="480" r="6" fill="#FF8A00" />
      </svg>

      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-flame-500/20 blur-3xl" />
      <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-navy-500/30 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-16 items-center min-w-0">
        <div className="animate-rise min-w-0">
          <Badge variant="light" className="mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
            Logística Big &amp; Bulky · Disponível para Android
          </Badge>

          <h1 className="font-display font-extrabold text-[2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-white text-balance">
            Nós levamos{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10 text-flame-500">o peso</span>
            </span>{" "}
            por você
          </h1>

          <p className="mt-6 text-lg text-white/65 max-w-md leading-relaxed">
            O RottaCarga+ conecta você às distribuidoras da sua região para
            entregar tudo o que é pesado, denso ou volumoso: gás, água, ração,
            carvão e produtos de limpeza.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="#download">
                <Download className="h-5 w-5" />
                Baixar o app agora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 hover:border-white/40"
              asChild
            >
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-flame-500 text-flame-500" />
              <Star className="h-4 w-4 fill-flame-500 text-flame-500" />
              <Star className="h-4 w-4 fill-flame-500 text-flame-500" />
              <Star className="h-4 w-4 fill-flame-500 text-flame-500" />
              <Star className="h-4 w-4 fill-flame-500 text-flame-500" />
              <span className="ml-2 text-sm font-semibold">
                4.9 de avaliação
              </span>
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div className="flex items-center gap-1.5 text-sm font-semibold">
              <MapPin className="h-4 w-4 text-flame-500" />
              Entrega rastreada
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-rise [animation-delay:150ms]">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-[3rem] bg-gradient-to-br from-flame-500/30 to-transparent blur-2xl" />
            <div className="relative h-[78vw] w-[78vw] max-h-[420px] max-w-[420px] sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px] rounded-[3rem] bg-gradient-to-br from-navy-700 to-navy-900 border border-white/10 shadow-2xl flex items-center justify-center animate-float">
              <img
                src={appIconDark}
                alt="Ícone do RottaCarga+"
                className="h-[42vw] w-[42vw] max-h-56 max-w-56 sm:h-56 sm:w-56 lg:h-64 lg:w-64 animate-flicker drop-shadow-[0_20px_40px_rgba(255,138,0,0.35)]"
              />
            </div>

            <div className="absolute -bottom-5 left-2 sm:-bottom-6 sm:-left-10 bg-white rounded-2xl shadow-navy px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 animate-rise [animation-delay:400ms] max-w-[calc(100%-1rem)]">
              <div className="h-10 w-10 rounded-full bg-flame-50 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-flame-500" />
              </div>
              <div>
                <p className="text-xs text-navy-900/50 font-semibold">
                  Entregas de
                </p>
                <p className="text-sm font-display font-bold text-navy-900">
                  15 até 30 minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
