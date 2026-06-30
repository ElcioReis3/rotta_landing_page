import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/img/logo-horizontal.png";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Recursos", href: "#recursos" },
  { label: "Para quem é", href: "#perfis" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(10,31,68,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#topo" className="flex items-center">
          <img src={logoHorizontal} alt="RottaGás+" className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-navy-900/70 hover:text-flame-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <a href="#download">
              <Download className="h-4 w-4" />
              Baixar grátis
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-navy-900"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden container pt-4 pb-5 flex flex-col gap-4 bg-white shadow-[0_8px_24px_rgba(10,31,68,0.12)] rounded-b-2xl animate-rise">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-navy-900/80"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" asChild className="w-full">
            <a href="#download">
              <Download className="h-4 w-4" />
              Baixar grátis
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
