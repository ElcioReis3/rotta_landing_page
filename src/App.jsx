import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Profiles from "@/components/Profiles";
import ProductCategories from "@/components/ProductCategories";
import CylinderSizes from "@/components/CylinderSizes";
import DownloadCTA from "@/components/DownloadCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Profiles />
        <ProductCategories />
        <CylinderSizes />
        <DownloadCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
