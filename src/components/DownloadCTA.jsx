import { Button } from "@/components/ui/button";
import {
  Download,
  Smartphone,
  ShieldCheck,
  Zap,
  Play,
  Apple,
  Monitor,
  Sparkles,
  Clock,
} from "lucide-react";
import appIcon from "@/assets/img/app-icon.png";
import appIconDark from "@/assets/img/app-icon-dark.png";

const comingSoon = [
  {
    icon: Play,
    title: "Google Play Store",
    desc: "Instalação e atualizações automáticas direto da loja oficial do Android.",
  },
  {
    icon: Apple,
    title: "Apple App Store",
    desc: "Versão para iPhone e iPad, com a mesma experiência do app Android.",
  },
  {
    icon: Monitor,
    title: "Versão desktop para administradores",
    desc: "Painel para computador, pensado para distribuidoras gerenciarem pedidos, equipe e relatórios em tela grande.",
  },
];

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

          {/* EM BREVE */}
          <div className="mt-8 rounded-2xl bg-white/[0.04] border border-white/10 p-7 md:p-9 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between mb-7">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 rounded-xl bg-flame-500 flex items-center justify-center shrink-0">
                  <Sparkles className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="font-display font-bold text-lg text-white leading-tight">
                    Em breve, em todo lugar
                  </p>
                  <p className="text-xs text-white/45 mt-0.5">
                    Novas versões do RottaCarga+ já estão a caminho
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-flame-500/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-flame-400">
                <Clock className="h-3.5 w-3.5" />
                Em desenvolvimento
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {comingSoon.map((c, i) => (
                <div
                  key={c.title}
                  className="relative rounded-xl bg-white/[0.03] border border-white/10 p-5 hover:bg-white/[0.06] transition-colors duration-300 animate-rise"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <span className="absolute top-4 right-4 rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white/60">
                    Em breve
                  </span>
                  <c.icon className="h-6 w-6 text-flame-500 mb-4" />
                  <p className="text-sm font-bold text-white leading-snug pr-16">
                    {c.title}
                  </p>
                  <p className="text-xs text-white/50 mt-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-white/40 leading-relaxed">
              Enquanto isso, o APK acima já entrega a experiência completa do app
              no Android. Quem instalar agora recebe as atualizações assim que as
              novas versões forem publicadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
