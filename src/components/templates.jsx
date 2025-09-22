export default function Templates() {
  const templates = [
    {
      id: "01",
      name: "Warm",
      img: "/warm.png", 
    },
    {
      id: "02",
      name: "Cool",
      img: "/cool.png",
    },
    {
      id: "03",
      name: "Earth",
      img: "/earth.png",
    },
  ];

  return (
    <section className="py-16" id="templates">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 font-poppins">Template Desain Undangan</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {templates.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-[32px] shadow-md flex flex-col items-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="rounded-[32px] w-[270px] h-[420px] object-cover mx-auto"
              />
              <h3 className="mt-6 font-semibold text-lg font-poppins">
                {t.id} - {t.name}
              </h3>
              <div className="mt-6 flex flex-col gap-3 w-full">
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-base font-semibold font-poppins hover:bg-gray-300 transition">
                  Lihat Template
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-full text-base font-semibold font-poppins hover:bg-black transition">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
