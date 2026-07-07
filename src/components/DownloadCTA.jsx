import { Button } from "@/components/ui/button";
import { Download, Smartphone, ShieldCheck, Zap } from "lucide-react";
import appIcon from "@/assets/img/app-icon.png";
import appIconDark from "@/assets/img/app-icon-dark.png";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative py-24 md:py-32 bg-navy-900 overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        viewBox="0 0 1280 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -50 100 C 250 180, 350 20, 600 100 S 950 220, 1340 80"
          fill="none"
          stroke="#FF8A00"
          strokeWidth="3"
          className="route-line"
        />
      </svg>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-flame-500/15 blur-3xl" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <img
            src={appIconDark}
            alt="RottaCarga+"
            className="h-20 w-20 mx-auto mb-8 animate-flicker"
          />

          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white text-balance">
            Baixe agora e nunca mais carregue peso sozinho
          </h2>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            RottaCarga+ | Nós levamos o peso por você. Gratuito, rápido de
            instalar e pronto para usar. Disponível para dispositivos Android.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base h-16 px-10">
              <Download className="h-5 w-5" />
              Baixar APK — Android
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/40">
            Versão 1.0 · Requer Android 8.0 ou superior
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/10 p-5">
              <Zap className="h-5 w-5 text-flame-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">
                  Instalação rápida
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Pronto para usar em menos de 2 minutos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/10 p-5">
              <ShieldCheck className="h-5 w-5 text-flame-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Seguro</p>
                <p className="text-xs text-white/50 mt-1">
                  Pagamentos e dados protegidos de ponta a ponta.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/10 p-5">
              <Smartphone className="h-5 w-5 text-flame-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Leve</p>
                <p className="text-xs text-white/50 mt-1">
                  Ocupa pouco espaço, funciona em qualquer Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
