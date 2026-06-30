import logoHorizontal from "@/assets/img/logo-horizontal.png";
import { AtSign, Share2, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">
          <div>
            <img
              src={logoHorizontal}
              alt="RottaGás+"
              className="h-9 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Conectando clientes, entregadores e distribuidoras de gás e água
              em um só aplicativo. Peça com confiança, receba com agilidade.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Navegação
            </p>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="#como-funciona"
                  className="hover:text-flame-500 transition-colors"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="#recursos"
                  className="hover:text-flame-500 transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#perfis"
                  className="hover:text-flame-500 transition-colors"
                >
                  Para quem é
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-flame-500 transition-colors"
                >
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Contato
            </p>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-flame-500" />
                7empresaelcio@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-flame-500" />
                (99) 999645-2760
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-flame-500 transition-colors flex items-center justify-center"
              >
                <AtSign className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                aria-label="Redes sociais"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-flame-500 transition-colors flex items-center justify-center"
              >
                <Share2 className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-white/70">
          Desenvolvido por{" "}
          <a href="https://www.elcioserviçoson.com.br">ÉlcioServiçosOn</a>
        </p>
        <p className="pt-4 text-center text-xs text-white/30">
          © {new Date().getFullYear()} RottaGás+. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
