"use client";

import Link from "next/link";
import VantaBackground from "@/components/VantaBackground";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 pt-28">
      
      {/* 1. HERO SECTION (Vanta Background İçinde) */}
      <VantaBackground>
        {/* 
           ESKİ SAĞLAM YAPIYA DÖNÜŞ:
           - min-h-[calc(100vh-7rem)] ile navbar payını düşerek tam ekran yaptık.
           - flex-col ve justify-center ile ortaladık.
           - overflow-hidden ile taşmaları engelledik.
        */}
        <section id="home" className="relative min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          
          <div className="max-w-5xl 2xl:max-w-7xl animate-fade-in-up z-10 -mt-10">
            
            {/* BAŞLIK */}
            {/* Sadece font boyutlarını responsive yaptık (lg, xl, 2xl) */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold tracking-tight text-gray-900 leading-[0.9]">
              Markanı <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#901f3b] to-[#d6336c]">
                Geleceğe Taşı
              </span>
              <span className="text-black">.</span>
            </h1>
            
            {/* BOŞLUK */}
            <div className="h-8 md:h-10 2xl:h-16"></div>

            {/* AÇIKLAMA METNİ - SİYAH */}
            <p 
              className="text-lg md:text-xl 2xl:text-2xl text-black max-w-3xl 2xl:max-w-5xl mx-auto leading-relaxed font-medium mb-12 2xl:mb-20"
              style={{ color: '#000000' }}
            >
              Markalar için modern web siteleri, sosyal medya içerikleri ve dijital kampanyalar üreten bağımsız bir medya stüdyosuyuz. Tasarım, teknoloji ve hikaye anlatımını birleştiriyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/services" 
                className="px-12 py-5 2xl:px-16 2xl:py-6 rounded-full bg-[#901f3b] text-white text-lg 2xl:text-xl font-bold hover:bg-[#7a1a32] transition-all shadow-xl shadow-[#901f3b]/20 hover:-translate-y-1"
              >
                Hizmetlerimizi Gör
              </Link>
              <Link 
                href="#contact" 
                className="px-12 py-5 2xl:px-16 2xl:py-6 rounded-full border-2 border-gray-100 text-gray-600 text-lg 2xl:text-xl font-bold hover:border-[#901f3b] hover:text-[#901f3b] transition-all bg-white/80 backdrop-blur-sm"
              >
                Bizimle İletişime Geç
              </Link>
            </div>
          </div>

          {/* Scroll İndikatörü - ESKİ YERİNDE (bottom-10) ve ORTALANMIŞ */}
          <div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-black z-20 pointer-events-none"
            style={{ marginLeft: '-12px' }}
          >
            <span className="text-xs uppercase tracking-widest font-bold">Kaydır</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </section>
      </VantaBackground>

      {/* 2. İLETİŞİM */}
      <section id="contact" className="py-32 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-[4rem] p-10 md:p-20 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#901f3b]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bir Projeniz mi Var?</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Kısa bir brief ile bize fikirlerinizi anlatın, birlikte nasıl bir şey çıkarabileceğimizi konuşalım.
            </p>
          </div>

          {/* Formspree Entegrasyonu */}
          <form action="https://formspree.io/f/xzddpnql" method="POST" className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-base font-medium text-gray-700 ml-1">Adınız Soyadınız</label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-2xl border-0 bg-white px-8 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#901f3b] transition-all text-lg"
                  placeholder="Adınızı yazın"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-gray-700 ml-1">E-posta Adresiniz</label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border-0 bg-white px-8 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#901f3b] transition-all text-lg"
                  placeholder="ornek@marka.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-3">
                <label className="text-base font-medium text-gray-700 ml-1">Telefon Numaranız</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-2xl border-0 bg-white px-8 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#901f3b] transition-all text-lg"
                  placeholder="0555 555 55 55"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-base font-medium text-gray-700 ml-1">Projeniz / İhtiyacınız</label>
              <textarea
                rows={5}
                name="message"
                className="w-full rounded-2xl border-0 bg-white px-8 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#901f3b] transition-all resize-none text-lg"
                placeholder="Kısaca bahsedin..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#901f3b] px-10 py-6 text-center text-lg font-bold text-white shadow-xl shadow-[#901f3b]/20 hover:bg-[#7a1a32] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Mesajı Gönder
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-base">
            &copy; {new Date().getFullYear()} Mirai Media. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-8">
            <a 
              href="https://www.instagram.com/miraimedia.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#901f3b] transition text-lg"
            >
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-[#901f3b] transition text-lg">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#901f3b] transition text-lg">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
