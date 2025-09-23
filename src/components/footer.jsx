import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-96 text-center md:text-left">
            <div>
                <img src="/logo.png" alt="Logo" className="w-20 mx-auto md:mx-0" />
                <p className="mt-2 text-black">
                    Merayakan cinta, menghubungkan cerita.
                </p>
                <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
                    <a href="#"><FaWhatsapp /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTiktok /></a>
                </div>
            </div>

            <div className="text-black">
                <h3 className="font-semibold mb-2">Metode Pembayaran</h3>
                <img
                    src="/payments.png"
                    alt="Metode Pembayaran"
                    className="w-full max-w-xs mx-auto md:mx-0"
                />
            </div>
        </div>
        <div className="text-center mt-8 text-black text-md">
            © Copyright 2025. DariKamiUntukmu. All Rights Reserved.
        </div>
    </footer>
  );
}
