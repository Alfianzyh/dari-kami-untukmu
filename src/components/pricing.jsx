import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const packages = [
    {
      name: "Paket Simple Love",
      price: "Rp 150.000",
      features: [
        "1 Desain undangan elegan",
        "Fitur RSVP online",
        "Peta lokasi terintegrasi",
        "Link undangan siap dibagikan",
      ],
      note: "Cocok untuk kamu yang suka simpel & praktis.",
    },
    {
      name: "Paket Eternal Love",
      price: "Rp 250.000",
      features: [
        "Semua fitur Paket Simple Love",
        "Tambahan galeri foto & cerita cinta",
        "Musik romantis latar undangan",
        "Custom warna sesuai tema",
      ],
      note: "Pas buat kamu yang ingin undangan lebih personal & hangat.",
    },
    {
      name: "Paket Forever & Always",
      price: "Rp 400.000",
      features: [
        "Semua fitur Paket Eternal Love",
        "Desain full custom sesuai keinginan",
        "Animasi interaktif premium",
        "Support editing tak terbatas",
      ],
      note: "Pilihan terbaik untuk momen sekali seumur hidup yang ingin dirayakan dengan penuh kesan.",
    },
  ];

  return (
    <section className="py-16 bg-gray-200 font-Poppins" id="pricing">
        <div className="max-w-6xl mx-auto px-6 text-center mb-7">
            <h2 className="text-4xl font-bold mb-12">Paket Harga</h2>
            <div className="grid gap-8 md:grid-cols-3">
            {packages.map((p, idx) => (
                <div
                key={idx}
                className={`bg-white p-8 rounded-2xl flex flex-col justify-between items-center shadow-sm scale-105 shadow-md" : ""}`}
                >
                <div className="w-full flex flex-col items-center">
                    <h3 className="font-semibold text-lg mb-3">{p.name}</h3>
                    <p className="text-2xl font-bold mb-6">{p.price}</p>
                    <ul className="text-sm text-black space-y-2 mb-6 w-full text-left">
                    {p.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-black mt-1" />
                        <span>{f}</span>
                        </li>
                    ))}
                    </ul>
                    <p className="text-sm font-bold text-black mb-6">{p.note}</p>
                </div>

                <button className="w-full md:w-[160px] px-6 py-3 bg-gray-200 text-black rounded-full text-md font-bold hover:bg-gray-300 transition text-center cursor-pointer">
                    Pilih Paket
                </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
