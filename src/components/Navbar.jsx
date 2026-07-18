import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/img/logo-horizontal.png";
import { Menu, X, Download, UserRound } from "lucide-react";
import { Link, usePath } from "@/router";

const links = [
  { label: "Como funciona", to: "/#como-funciona" },
  { label: "Categorias", to: "/#categorias" },
  { label: "Recursos", to: "/#recursos" },
  { label: "Para quem é", to: "/#perfis" },
  { label: "Dúvidas", to: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePath();
  const isSobre = path === "/sobre";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Em páginas internas o header nunca fica transparente sobre o conteúdo claro
  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(10,31,68,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logoHorizontal}
            alt="RottaCarga+"
            className={`h-9 w-auto transition-all ${
              !solid && isSobre ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-semibold transition-colors hover:text-flame-600 ${
                !solid && isSobre ? "text-white/70" : "text-navy-900/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/sobre"
            className={`text-sm font-semibold transition-colors hover:text-flame-600 ${
              isSobre && solid
                ? "text-flame-600"
                : isSobre
                  ? "text-flame-500"
                  : "text-navy-900/70"
            }`}
          >
            Sobre o criador
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <Link to="/#download">
              <Download className="h-4 w-4" />
              Baixar grátis
            </Link>
          </Button>
        </div>

        <button
          className={`md:hidden ${!solid && isSobre ? "text-white" : "text-navy-900"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden container pt-4 pb-5 flex flex-col gap-4 bg-white shadow-[0_8px_24px_rgba(10,31,68,0.12)] rounded-b-2xl animate-rise">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-navy-900/80"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/sobre"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-flame-600 flex items-center gap-2"
          >
            <UserRound className="h-4 w-4" />
            Sobre o criador
          </Link>
          <Button size="sm" asChild className="w-full">
            <Link to="/#download" onClick={() => setOpen(false)}>
              <Download className="h-4 w-4" />
              Baixar grátis
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
