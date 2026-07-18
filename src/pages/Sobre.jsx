import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/router";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Building2,
  BookOpen,
  Code2,
  Smartphone,
  ShieldCheck,
  CreditCard,
  Database,
  Award,
  MapPin,
  Mail,
  AtSign,
  Quote,
  Target,
  Lightbulb,
  Users,
  CheckCircle2,
} from "lucide-react";
import fotoElcio from "@/assets/img/foto-elcio.JPG";
import fotoProfessor from "@/assets/img/foto-professor.png";
import senacLogo from "@/assets/img/senac-logo.png";
import appIconDark from "@/assets/img/app-icon-dark.png";

const stack = [
  {
    icon: Smartphone,
    title: "Flutter",
    desc: "App Android nativo, com interface fluida e responsiva.",
  },
  {
    icon: Database,
    title: "Firebase / Firestore",
    desc: "Banco em tempo real, autenticação e notificações push.",
  },
  {
    icon: CreditCard,
    title: "Stripe",
    desc: "Pagamentos, assinaturas e créditos com validação por webhook.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & LGPD",
    desc: "Regras de acesso por papel, auditoria e exportação de dados.",
  },
];

const jornada = [
  {
    icon: Lightbulb,
    title: "O problema",
    desc: "Em Caxias, pedir gás, água ou ração ainda dependia de ligação, WhatsApp e espera sem previsão. Faltava transparência para o cliente e organização para a distribuidora.",
  },
  {
    icon: Target,
    title: "A proposta",
    desc: "Criar uma plataforma que conectasse distribuidoras locais, suas próprias equipes de entrega e os clientes — tudo em um app só, com pedido rastreável e pagamento seguro.",
  },
  {
    icon: Code2,
    title: "O desenvolvimento",
    desc: "Meses de estudo e código: arquitetura multi-perfil (cliente, entregador, distribuidora e administrador), integração de pagamentos, notificações e painéis de gestão.",
  },
  {
    icon: Users,
    title: "O resultado",
    desc: "Um produto funcional, que está sendo testado em dispositivos reais, pronto para ser usado por distribuidoras da região — e apresentado como projeto integrador do curso técnico.",
  },
];

const competencias = [
  "Desenvolvimento de aplicações web e mobile",
  "Modelagem e integração com bancos de dados na nuvem",
  "Segurança da informação e boas práticas de LGPD",
  "Experiência do usuário (UX) e design de interface",
  "Versionamento de código e trabalho em projeto real",
];

export default function Sobre() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy-900 overflow-hidden">
        <div
          className="absolute inset-0 route-grid opacity-[0.35]"
          aria-hidden="true"
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.18]"
          viewBox="0 0 1280 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M -50 460 C 250 380, 350 540, 600 440 S 950 300, 1340 400"
            fill="none"
            stroke="#FF8A00"
            strokeWidth="3"
            className="route-line"
          />
        </svg>
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-flame-500/15 blur-3xl" />

        <div className="container relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-flame-500 transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>

          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
            <div className="relative mx-auto md:mx-0 w-full max-w-sm animate-rise">
              <div className="absolute -inset-4 rounded-[2.25rem] bg-flame-500/20 blur-3xl" />
              <img
                src={fotoElcio}
                alt="Foto de Élcio Reis"
                className="relative rounded-[2rem] w-full aspect-[4/5] object-cover border-4 border-white/10 shadow-navy"
              />
              <div className="relative -mt-8 mx-5 rounded-2xl bg-flame-500 px-5 py-4 text-center shadow-flame">
                <p className="font-display font-extrabold text-white text-lg leading-tight">
                  Élcio Reis
                </p>
                <p className="text-[11px] font-semibold text-white/85 mt-0.5 uppercase tracking-wider">
                  Criador do RottaCarga+
                </p>
              </div>
            </div>

            <div className="animate-rise" style={{ animationDelay: "120ms" }}>
              <Badge variant="light" className="mb-5">
                Quem está por trás
              </Badge>
              <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white text-balance leading-[1.1]">
                Prazer, eu sou o Élcio Reis
              </h1>
              <p className="mt-6 text-white/60 text-lg leading-relaxed">
                Sou aluno do curso Técnico em Informática para Internet do SENAC
                Caxias e desenvolvedor do RottaCarga+, a plataforma que conecta
                distribuidoras locais aos clientes que precisam de entregas
                pesadas e volumosas.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  {
                    label: "Formação",
                    value: "Técnico em Informática para Internet",
                  },
                  { label: "Instituição", value: "SENAC — Caxias/MA" },
                  { label: "Projeto", value: "RottaCarga+ (integrador)" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl bg-white/[0.05] border border-white/10 p-4"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-flame-500">
                      {c.label}
                    </p>
                    <p className="text-sm text-white/85 font-semibold mt-1.5 leading-snug">
                      {c.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/#download">
                    Conhecer o aplicativo
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="light" asChild>
                  <a href="mailto:7empresaelcio@gmail.com">
                    <Mail className="h-5 w-5" />
                    Falar comigo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINHA HISTÓRIA */}
      <section className="py-24 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_0.85fr] gap-12 md:gap-16">
            <div>
              <Badge variant="flame" className="mb-4">
                Minha trajetória
              </Badge>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
                Da curiosidade por tecnologia a um produto no ar
              </h2>
              <div className="mt-6 space-y-5 text-navy-900/70 leading-relaxed">
                <p>
                  Sempre me interessei por entender como as coisas funcionam por
                  trás da tela. Essa curiosidade me levou ao curso Técnico em
                  Informática para Internet do SENAC, onde encontrei a base
                  técnica e o acompanhamento necessários para transformar ideias
                  soltas em software de verdade.
                </p>
                <p>
                  Ao longo do curso, aprendi a programar, a pensar em
                  arquitetura, a cuidar da segurança dos dados dos usuários e
                  talvez o mais importante: ouvir o problema antes de escrever a
                  primeira linha de código. O RottaCarga+ é o resultado direto
                  desse processo: um app construído do zero, que está sendo
                  testado em dispositivos reais e pensado para a rotina de quem
                  mora aqui.
                </p>
                <p>
                  Cada tela, cada regra de segurança e cada integração de
                  pagamento deste projeto foi desenvolvida por mim, com
                  orientação docente e a metodologia de projeto integrador do
                  SENAC. Mais do que uma nota final, o objetivo sempre foi
                  entregar algo que pudesse realmente funcionar para as
                  distribuidoras e os clientes da região.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border-l-4 border-flame-500 bg-mist p-6">
                <Quote className="h-6 w-6 text-flame-500 mb-3" />
                <p className="font-display font-semibold text-navy-900 text-lg leading-snug text-balance">
                  “Tecnologia só faz sentido quando resolve um problema real de
                  gente real. O RottaCarga+ é a minha forma de provar isso.”
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy-900/40">
                  Élcio Reis
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-navy-900/8 bg-white shadow-sm p-7 sticky top-28">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-11 w-11 rounded-xl bg-flame-500 flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </span>
                  <p className="font-display font-bold text-navy-900">
                    Competências desenvolvidas
                  </p>
                </div>
                <ul className="space-y-3.5">
                  {competencias.map((c) => (
                    <li key={c} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-flame-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-navy-900/70 leading-relaxed">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-navy-900/8 space-y-3">
                  <p className="flex items-center gap-2.5 text-sm text-navy-900/70">
                    <MapPin className="h-4 w-4 text-flame-500 shrink-0" />
                    Caxias — Maranhão, Brasil
                  </p>
                  <a
                    href="mailto:7empresaelcio@gmail.com"
                    className="flex items-center gap-2.5 text-sm text-navy-900/70 hover:text-flame-600 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-flame-500 shrink-0" />
                    7empresaelcio@gmail.com
                  </a>
                  <a
                    href="https://www.instagram.com/elcioreis_cx/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-sm text-navy-900/70 hover:text-flame-600 transition-colors"
                  >
                    <AtSign className="h-4 w-4 text-flame-500 shrink-0" />
                    @elcioreis_cx
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O PROJETO */}
      <section className="py-24 md:py-28 bg-mist">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Badge variant="flame" className="mb-4">
              O projeto
            </Badge>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
              RottaCarga+, o projeto integrador do último módulo
            </h2>
            <p className="mt-5 text-navy-900/65 leading-relaxed">
              O projeto integrador é a etapa final do curso técnico: o momento
              em que o aluno reúne tudo o que aprendeu para entregar uma solução
              completa a um problema real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jornada.map((j, i) => (
              <div
                key={j.title}
                className="rounded-2xl bg-white border border-navy-900/8 p-7 shadow-sm animate-rise"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-navy-900 flex items-center justify-center mb-5">
                  <j.icon className="h-5 w-5 text-flame-500" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-flame-600 mb-2">
                  Etapa {i + 1}
                </p>
                <h3 className="font-display font-bold text-lg text-navy-900 mb-2.5">
                  {j.title}
                </h3>
                <p className="text-sm text-navy-900/60 leading-relaxed">
                  {j.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-[auto_1fr] gap-8 items-center rounded-2xl bg-navy-900 p-8 md:p-10">
            <img
              src={appIconDark}
              alt="Ícone do app RottaCarga+"
              className="h-20 w-20 mx-auto md:mx-0"
            />
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-4 text-center md:text-left">
                Tecnologias utilizadas no desenvolvimento
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stack.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl bg-white/[0.05] border border-white/10 p-4"
                  >
                    <s.icon className="h-5 w-5 text-flame-500 mb-2.5" />
                    <p className="text-sm font-bold text-white">{s.title}</p>
                    <p className="text-xs text-white/50 mt-1 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUIÇÃO */}
      <section className="py-24 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16 items-center">
            <div className="rounded-2xl border border-navy-900/8 bg-white shadow-sm p-10 flex flex-col items-center text-center">
              <img
                src={senacLogo}
                alt="Logo do SENAC"
                className="h-70 w-auto object-contain mb-6"
              />
              <p className="font-display font-bold text-navy-900 leading-snug">
                Serviço Nacional de Aprendizagem Comercial
              </p>
              <p className="text-sm text-navy-900/55 mt-2">
                Unidade Caxias — MA
              </p>
              <div className="mt-6 pt-6 border-t border-navy-900/8 w-full space-y-2.5 text-left">
                <p className="flex items-start gap-2.5 text-sm text-navy-900/65">
                  <BookOpen className="h-4 w-4 text-flame-500 mt-0.5 shrink-0" />
                  Curso Técnico em Informática para Internet
                </p>
                <p className="flex items-start gap-2.5 text-sm text-navy-900/65">
                  <GraduationCap className="h-4 w-4 text-flame-500 mt-0.5 shrink-0" />
                  Projeto integrador do último módulo - Desenvolvimento com
                  ajuda da IA
                </p>
                <p className="flex items-start gap-2.5 text-sm text-navy-900/65">
                  <MapPin className="h-4 w-4 text-flame-500 mt-0.5 shrink-0" />
                  Caxias, Maranhão
                </p>
              </div>
            </div>

            <div>
              <Badge variant="navy" className="mb-4">
                <Building2 className="h-3.5 w-3.5" />A instituição
              </Badge>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
                Formação técnica com nome, história e credibilidade
              </h2>
              <div className="mt-6 space-y-5 text-navy-900/70 leading-relaxed">
                <p>
                  O SENAC — Serviço Nacional de Aprendizagem Comercial — é uma
                  das instituições de educação profissional mais reconhecidas do
                  Brasil, com décadas de atuação na formação de profissionais
                  para o mercado de trabalho em todo o país.
                </p>
                <p>
                  Na unidade de Caxias, o curso Técnico em Informática para
                  Internet forma profissionais capazes de desenvolver, publicar
                  e manter aplicações web e mobile, com atenção à qualidade do
                  código, à experiência do usuário e à segurança dos dados.
                </p>
                <p>
                  O diferencial da metodologia é o projeto integrador: em vez de
                  provas isoladas, o aluno precisa entregar uma solução real,
                  documentada e defendida diante de professores avaliadores. É
                  esse rigor que está por trás do RottaCarga+.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Prática",
                    description: "Aprendizado baseado em projetos reais",
                  },
                  {
                    title: "Orientação",
                    description: "Acompanhamento docente em todas as etapas",
                  },
                  {
                    title: "Mercado",
                    description: "Conteúdo alinhado à demanda profissional",
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl bg-mist border border-navy-900/8 p-4"
                  >
                    <p className="font-display font-bold text-navy-900">
                      {b.title}
                    </p>
                    <p className="text-xs text-navy-900/55 mt-1 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSOR */}
      <section className="py-24 md:py-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-flame-500/10 blur-3xl" />
        <div className="container relative">
          <div className="max-w-xl mx-auto text-center mb-14">
            <Badge variant="light" className="mb-4">
              Orientação
            </Badge>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white text-balance">
              Um projeto acompanhado de perto por quem entende
            </h2>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl bg-white/[0.04] border border-white/10 p-8 md:p-10">
            <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="relative mx-auto sm:mx-0">
                <div className="absolute -inset-2 rounded-full bg-flame-500/20 blur-xl" />
                <img
                  src={fotoProfessor}
                  alt="Foto do professor Pedro Gomes"
                  className="relative h-40 w-40 rounded-full object-cover border-4 border-white/10"
                />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-flame-500 mb-2">
                  Professor orientador
                </p>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Pedro Gomes
                </h3>
                <p className="text-sm text-white/55 mt-1.5">
                  Bacharelado em Ciência da Computação
                </p>
                <p className="mt-5 text-sm text-white/65 leading-relaxed">
                  Responsável pela orientação técnica do projeto, o professor
                  Pedro Gomes acompanhou o RottaCarga+ desde a definição do
                  problema até a validação da solução, orientando decisões de
                  arquitetura, boas práticas de desenvolvimento e a documentação
                  exigida pelo projeto integrador.
                </p>
                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  Essa orientação garante que o app não seja apenas uma ideia
                  bonita, mas um software construído com critério técnico e
                  avaliado por padrões acadêmicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-28 bg-mist">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 text-balance">
              Quer conhecer o app ou falar sobre o projeto?
            </h2>
            <p className="mt-5 text-navy-900/65 leading-relaxed">
              Se você é de uma distribuidora, professor, avaliador ou apenas
              curioso pela tecnologia por trás do RottaCarga+, ficarei feliz em
              conversar e mostrar o projeto por dentro.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link to="/#download">
                  Baixar o aplicativo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="mailto:7empresaelcio@gmail.com">
                  <Mail className="h-5 w-5" />
                  Entrar em contato
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
