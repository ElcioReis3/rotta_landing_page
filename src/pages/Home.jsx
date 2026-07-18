import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Profiles from "@/components/Profiles";
import ProductCategories from "@/components/ProductCategories";
import CylinderSizes from "@/components/CylinderSizes";
import AboutCTA from "@/components/AboutCTA";
import DownloadCTA from "@/components/DownloadCTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Profiles />
      <ProductCategories />
      <CylinderSizes />
      <AboutCTA />
      <DownloadCTA />
      <FAQ />
    </main>
  );
}
