import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/router";
import { ArrowRight, GraduationCap, Code2, MapPin } from "lucide-react";
import fotoElcio from "@/assets/img/foto-elcio.JPG";

export default function AboutCTA() {
  return (
    <section id="quem-somos" className="py-24 md:py-28 bg-mist">
      <div className="container">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
          <div className="relative mx-auto md:mx-0 w-full max-w-xs">
            <div className="absolute -inset-3 rounded-[2rem] bg-flame-500/15 blur-2xl" />
            <img
              src={fotoElcio}
              alt="Élcio Reis, criador do RottaCarga+"
              className="relative rounded-[1.75rem] w-full aspect-[4/5] object-cover shadow-navy border-4 border-white"
            />
            <div className="relative -mt-7 mx-4 rounded-2xl bg-navy-900 px-5 py-4 text-center shadow-navy">
              <p className="font-display font-bold text-white leading-tight">
                Élcio Reis
              </p>
              <p className="text-[11px] text-white/55 mt-1 leading-snug">
                Desenvolvedor e criador do RottaCarga+
              </p>
            </div>
          </div>

          <div>
            <Badge variant="flame" className="mb-4">
              Quem está por trás
            </Badge>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
              Um app real, feito por um estudante de tecnologia do Maranhão
            </h2>
            <p className="mt-5 text-navy-900/65 leading-relaxed">
              O RottaCarga+ não nasceu em uma grande empresa: nasceu em sala de
              aula, como projeto integrador do curso Técnico em Informática para
              Internet do SENAC Caxias — e virou uma plataforma completa, com
              app, pagamentos, painel administrativo e entregas de verdade.
            </p>

            <ul className="mt-7 space-y-3.5">
              {[
                {
                  icon: GraduationCap,
                  text: "Projeto integrador do último módulo do curso técnico",
                },
                {
                  icon: Code2,
                  text: "Flutter, Firebase e Stripe — do zero ao app publicado",
                },
                {
                  icon: MapPin,
                  text: "Desenvolvido em Caxias, Maranhão, para a realidade local",
                },
              ].map((i) => (
                <li key={i.text} className="flex items-start gap-3">
                  <span className="h-9 w-9 shrink-0 rounded-xl bg-white border border-navy-900/8 flex items-center justify-center">
                    <i.icon className="h-4 w-4 text-flame-500" />
                  </span>
                  <span className="text-sm text-navy-900/75 leading-relaxed pt-2">
                    {i.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button size="lg" asChild>
                <Link to="/sobre">
                  Conheça quem está por trás do RottaCarga+
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
