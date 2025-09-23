import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Templates from "@/components/templates";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className=" border-gray-200 font-Poppins">
      <Header
        menuItems={[
          { id: "template", label: "Template" },
          { id: "harga", label: "Harga" },
          { id: "tentang", label: "Tentang" },
          { id: "kotnak", label: "Kontak" },
        ]}
      />     
      <Hero />
      <Features />
      <Templates />
      <Pricing />
    </div>
  );
}
