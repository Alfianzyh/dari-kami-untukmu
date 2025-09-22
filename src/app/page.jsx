import Header from "@/components/header";

export default function Home() {
  return (
    <div className=" border-gray-200 font-Poppins">
      <Header
        menuItems={[
          { id: "featuressection", label: "Features" },
          { id: "discover", label: "Discover" },
          { id: "pricing", label: "Pricing" },
          { id: "download", label: "Download" },
        ]}
      />     
      <main className="pt-20"></main>
    </div>
  );
}
