import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import WhoIsItFor from "@/components/WhoIsItFor";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Differentials />
      <Services />
      <WhoIsItFor />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
