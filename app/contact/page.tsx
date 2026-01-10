"use client";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900 pt-32 min-h-screen pb-20">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İletişime Geçin</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Projeniz hakkında konuşmak, tanışmak veya bir kahve içmek için bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Sol: İletişim Bilgileri */}
          <div className="space-y-10">
            
            {/* Bilgi Kartı */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-[#901f3b]">İletişim Bilgileri</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#901f3b] shadow-sm flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Adres</p>
                    <p className="text-gray-600 text-sm">Maslak Mah. Büyükdere Cad. No:123, Sarıyer/İstanbul</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#901f3b] shadow-sm flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">E-posta</p>
                    <p className="text-gray-600 text-sm">info@miraimedia.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#901f3b] shadow-sm flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Telefon</p>
                    <p className="text-gray-600 text-sm">+90 (212) 123 45 67</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Harita (Görsel) */}
            <div className="h-64 w-full bg-gray-200 rounded-3xl overflow-hidden relative">
               {/* Buraya gerçek Google Maps iframe'i gelebilir */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                 Google Maps Alanı
               </div>
            </div>

          </div>

          {/* Sağ: İletişim Formu */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Bize Yazın</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Adınız</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#901f3b] focus:ring-1 focus:ring-[#901f3b] transition-all"
                    placeholder="Adınız"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Soyadınız</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#901f3b] focus:ring-1 focus:ring-[#901f3b] transition-all"
                    placeholder="Soyadınız"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">E-posta Adresiniz</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#901f3b] focus:ring-1 focus:ring-[#901f3b] transition-all"
                  placeholder="ornek@sirket.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">Mesajınız</label>
                <textarea 
                  rows={5} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#901f3b] focus:ring-1 focus:ring-[#901f3b] transition-all resize-none"
                  placeholder="Projenizden bahsedin..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#901f3b] text-white font-bold py-4 rounded-xl hover:bg-[#7a1a32] transition-colors shadow-lg shadow-[#901f3b]/20 hover:-translate-y-1 transform duration-200"
              >
                Mesajı Gönder
              </button>
            </form>
          </div>

        </div>
      </div>

    </main>
  );
}
