export default function About() {
  return (
    <section className="py-16" id="about">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Tentang Kami</h2>
        <p className="text-justify text-black mb-6 font-semibold">
          DariKamiUntukmu lahir dari cinta kami terhadap cerita indah di setiap
          perayaan. Kami percaya, undangan bukan hanya sekedar ajakan datang,
          tapi juga cara untuk berbagi kebahagiaan dan momen spesial kepada
          orang-orang tersayang.
        </p>
        <p className="text-justify text-black font-semibold">
          Lewat undangan digital, kami ingin membantu setiap pasangan
          menceritakan kisah cintanya dengan cara yang hangat, modern, dan tetap
          berkesan. Karena bagi kami, setiap cinta pantas untuk dirayakan dengan
          indah.
        </p>
        <div className="mt-10 flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-35" />
        </div>
      </div>
    </section>
  );
}
