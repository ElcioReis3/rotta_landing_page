import logoHorizontal from "@/assets/img/logo-horizontal.png";
import { AtSign, Mail, Phone, UserRound } from "lucide-react";
import { Link } from "@/router";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">
          <div>
            <img
              src={logoHorizontal}
              alt="RottaCarga+"
              className="h-9 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              A plataforma que leva o peso por você. Gás, água, ração, produtos
              de limpeza e itens de quintal, entregues por distribuidoras da sua
              região com sua própria equipe.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Navegação
            </p>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link
                  to="/#como-funciona"
                  className="hover:text-flame-500 transition-colors"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  to="/#recursos"
                  className="hover:text-flame-500 transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  to="/#perfis"
                  className="hover:text-flame-500 transition-colors"
                >
                  Para quem é
                </Link>
              </li>
              <li>
                <Link
                  to="/#categorias"
                  className="hover:text-flame-500 transition-colors"
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq"
                  className="hover:text-flame-500 transition-colors"
                >
                  Dúvidas
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-flame-500 transition-colors inline-flex items-center gap-1.5"
                >
                  <UserRound className="h-3.5 w-3.5" />
                  Sobre o criador
                </Link>
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
                href="https://www.instagram.com/elcioreis_cx/"
                target="_blank"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-flame-500 transition-colors flex items-center justify-center"
              >
                <AtSign className="h-4 w-4 text-white" />
              </a>
              <p className="text-white text-sm">Instagram</p>
            </div>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-white/70">
          Desenvolvido por{" "}
          <a href="https://www.elcioserviçoson.com.br">ÉlcioServiçosOn</a>
        </p>
        <p className="pt-4 text-center text-xs text-white/30">
          © {new Date().getFullYear()} RottaCarga+. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
