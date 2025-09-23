import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Templates from "@/components/templates";
import Pricing from "@/components/pricing";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className=" border-gray-200 font-Poppins">
      <Header
        menuItems={[
          { id: "templates", label: "Template" },
          { id: "pricing", label: "Harga" },
          { id: "about", label: "Tentang" },
          { id: "contact", label: "Kontak" },
        ]}
      />     
      <Hero />
      <Features />
      <Templates />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
