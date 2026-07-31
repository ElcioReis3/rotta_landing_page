import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Distribuidores from "@/pages/Distribuidores";
import { usePath } from "@/router";

const titles = {
  "/sobre": "Quem está por trás do RottaCarga+ | Élcio Reis",
  "/distribuidores": "Seja um distribuidor | RottaCarga+",
};

export default function App() {
  const path = usePath();

  useEffect(() => {
    document.title = titles[path] ?? "RottaCarga+ | Nós levamos o peso por você";
  }, [path]);

  const pages = {
    "/sobre": <Sobre />,
    "/distribuidores": <Distribuidores />,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {pages[path] ?? <Home />}
      <Footer />
    </div>
  );
}
