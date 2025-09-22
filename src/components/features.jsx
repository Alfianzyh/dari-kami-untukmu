import { FaLeaf, FaShareAlt, FaCheckSquare } from "react-icons/fa";
import { BsEnvelopeHeartFill } from "react-icons/bs";

export default function Features() {
  const features = [
    {
      icon: <FaCheckSquare className="text-3xl text-black" />,
      title: "Praktis & Simpel",
      desc: "Tinggal pilih desain, isi detail, dan undanganmu langsung siap dibagikan.",
    },
    {
      icon: <BsEnvelopeHeartFill className="text-3xl text-black" />,
      title: "Romantis & Personal",
      desc: "Setiap desain punya sentuhan cinta yang bisa kamu sesuaikan.",
    },
    {
      icon: <FaLeaf className="text-3xl text-black" />,
      title: "Ramah Lingkungan",
      desc: "Tanpa kertas, tanpa ribet, lebih peduli sama bumi.",
    },
    {
      icon: <FaShareAlt className="text-3xl text-black" />,
      title: "Mudah Dibagikan",
      desc: "Cukup satu link untuk semua orang tersayang.",
    },
  ];

  return (
    <section className="py-16 bg-gray-200" id="features">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-12">
          Kenapa pilih DariKamiUntukmu?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-300 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="flex justify-center mb-4 bg-white p-3 rounded-full">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
