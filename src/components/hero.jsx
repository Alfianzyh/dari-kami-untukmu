export default function Hero() {
  return (
    <section className="relative w-full h-[911px] flex items-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-image.png')", 
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-3xl px-6 lg:px-0 lg:ml-96 text-white">
        <h1 className="text-3xl lg:text-6xl font-semibold leading-normal text-left">
          Bukan sekadar undangan, tapi cara merayakan cinta dengan penuh makna.
        </h1>
        <p className="mt-6 text-sm italic lg:text-base text-gray-200 max-w-xl text-left">
          Lewat undangan digital dari{" "}
          <span className="font-semibold">DariKamiUntukmu</span>, momen spesialmu
          bisa dibagikan dengan cara yang lebih hangat, modern, dan penuh makna.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-black to-black text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:from-white hover:to-white hover:text-black transition-all duration-200 cursor-pointer">
            Buat Undangan
          </button>
          <button className="px-6 py-3 bg-white text-black border-2 border-black rounded-full font-semibold shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 cursor-pointer">
            Coba Gratis
          </button>
        </div>
      </div>
    </section>
  );
}
