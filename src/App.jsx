import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import { usePath } from "@/router";

export default function App() {
  const path = usePath();

  useEffect(() => {
    document.title =
      path === "/sobre"
        ? "Quem está por trás do RottaCarga+ | Élcio Reis"
        : "RottaCarga+ | Nós levamos o peso por você";
  }, [path]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {path === "/sobre" ? <Sobre /> : <Home />}
      <Footer />
    </div>
  );
}
