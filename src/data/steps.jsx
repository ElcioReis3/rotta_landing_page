import { Smartphone, Route, PackageCheck, Wallet2 } from "lucide-react";

export const Steps = [
  {
    n: "01",
    icon: Smartphone,
    title: "Faça seu pedido",
    desc: "Escolha o item pesado ou volumoso que precisa e selecione a distribuidora mais próxima de você.",
  },
  {
    n: "02",
    icon: Route,
    title: "Entregador sai em rota",
    desc: "Um entregador da própria distribuidora é designado e você acompanha cada etapa do seu pedido.",
  },
  {
    n: "03",
    icon: PackageCheck,
    title: "Receba sem esforço",
    desc: "O entregador chega até você e leva a carga até onde precisar. Confirme o recebimento direto no app.",
  },
  {
    n: "04",
    icon: Wallet2,
    title: "Crédito debitado automaticamente",
    desc: "O valor é descontado do seu saldo de créditos — sem burocracia para o próximo pedido.",
  },
];
