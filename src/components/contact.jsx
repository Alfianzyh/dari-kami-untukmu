export default function Contact() {
  return (
    <section className="py-16 bg-gray-200" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Kontak Kami</h2>
        <p className="text-black mb-6">
          Punya pertanyaan, atau siap buat undangan digital impianmu? Kami selalu
          senang mendengar cerita cintamu.
        </p>
        <form className="grid gap-4 text-left max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Nama"
            className="border p-3 rounded-lg bg-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg bg-white"
          />
          <textarea
            placeholder="Pesan"
            className="border p-3 rounded-lg bg-white"
            rows="4"
          ></textarea>
          <button className="px-6 py-2 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700 transition">
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
}
